import React, { useState, useOptimistic, useTransition } from 'react';

type Message = {
    id: number;
    text: string;
    sending?: boolean;
};

// Симуляция отправки сообщения на сервер
const sendMessageToServer = (text: string): Promise<Message> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Случайно имитируем успех или ошибку
            if (Math.random() > 0.2) {
                resolve({
                    id: Date.now(),
                    text,
                });
            } else {
                reject(new Error('Ошибка отправки сообщения'));
            }
        }, 2000);
    });
};

const UseOptimisticExample = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: 'Привет! Как дела?' },
        { id: 2, text: 'Это пример useOptimistic' },
    ]);
    const [input, setInput] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [, startTransition] = useTransition();

    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage: string) => [
            ...state,
            {
                id: Date.now() + Math.random(), // Уникальный ID для каждого сообщения
                text: newMessage,
                sending: true,
            },
        ]
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const messageText = input;
        setInput('');
        setError(null);

        startTransition(async () => {
            // Оптимистично добавляем сообщение в UI
            addOptimisticMessage(messageText);

            try {
                // Отправляем сообщение на "сервер"
                const newMessage = await sendMessageToServer(messageText);
                // Если успешно, обновляем реальное состояние
                setMessages(prev => [...prev, newMessage]);
            } catch {
                // Если ошибка, оптимистичное сообщение автоматически исчезнет
                setError('Не удалось отправить сообщение. Попробуйте снова.');
                setInput(messageText); // Возвращаем текст в поле ввода
            }
        });
    };

    return (
        <div>
            <h3>Пример использования useOptimistic</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>
                Отправьте сообщение - оно сразу появится в списке (оптимистичное обновление).
                <br />
                Есть 20% шанс ошибки для демонстрации отката изменений.
            </p>

            <div style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '10px',
                maxHeight: '300px',
                overflowY: 'auto',
                backgroundColor: '#f9f9f9'
            }}>
                {optimisticMessages.map((message) => (
                    <div
                        key={message.id}
                        style={{
                            padding: '10px',
                            marginBottom: '8px',
                            backgroundColor: message.sending ? '#e3f2fd' : '#fff',
                            borderRadius: '4px',
                            border: '1px solid',
                            borderColor: message.sending ? '#90caf9' : '#e0e0e0',
                            opacity: message.sending ? 0.7 : 1,
                        }}
                    >
                        {message.text}
                        {message.sending ? (
                            <span style={{ marginLeft: '10px', fontSize: '12px', color: '#1976d2' }}>
                                ⏳ Отправка...
                            </span>
                        ) : null}
                    </div>
                ))}
            </div>

            {error ? (
                <div style={{
                    padding: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#ffebee',
                    color: '#c62828',
                    borderRadius: '4px',
                    border: '1px solid #ef9a9a'
                }}>
                    {error}
                </div>
            ) : null}

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Введите сообщение..."
                    style={{
                        flex: 1,
                        padding: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                />
                <button
                    type="submit"
                    disabled={!input.trim()}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: input.trim() ? '#1976d2' : '#ccc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: input.trim() ? 'pointer' : 'not-allowed',
                        fontSize: '14px'
                    }}
                >
                    Отправить
                </button>
            </form>

            <div style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: '#fff3e0',
                borderRadius: '4px',
                fontSize: '13px'
            }}>
                <strong>Как это работает:</strong>
                <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                    <li>При отправке сообщение сразу добавляется в список (оптимистично)</li>
                    <li>Сообщение помечается как "Отправка..." 2 секунды</li>
                    <li>Если отправка успешна - сообщение остаётся</li>
                    <li>Если ошибка - оптимистичное сообщение исчезает автоматически</li>
                </ul>
            </div>
        </div>
    );
};

export default UseOptimisticExample;