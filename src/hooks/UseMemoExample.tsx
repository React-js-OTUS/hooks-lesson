import { useState} from 'react';

function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const computeExpensiveValue = (num: number): number => {
    console.log(`Выполняется fib для ${num}`);

    return fib(num);
};

const UseMemoExample = () => {
    const [count, setCount] = useState<number>(30);
    const [text, setText] = useState<string>('');


    const expensiveValue = computeExpensiveValue(count)

    return (
        <div style={{ padding: '20px' }}>
            <h2>Без использования useMemo</h2>
            <div style={{ marginBottom: '10px' }}>
                <button onClick={() => setCount(prev => prev + 1)}>Увеличить count</button>
                <span style={{ marginLeft: '10px' }}>Count: {count}</span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    placeholder="Введите текст..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    style={{ padding: '8px', width: '300px' }}
                />
                <p>Введённый текст: {text}</p>
            </div>
            <p>Результат ресурсоёмких вычислений: {expensiveValue}</p>
        </div>
    );
};

export default UseMemoExample;
