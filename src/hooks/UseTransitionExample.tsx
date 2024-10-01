import React, { useState, useTransition } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Элемент ${i + 1}`);

const UseTransitionExample = () => {
    const [search, setSearch] = useState<string>('');
    const [filteredItems, setFilteredItems] = useState<string[]>(items);

    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);

        startTransition(() => {
            const filtered = items.filter(item =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredItems(filtered);
        });
    };

    return (
        <div>
            <h3>Пример использования useTransition</h3>
            <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={handleChange}
                style={{ padding: '8px', width: '300px', marginBottom: '10px' }}
            />
            {isPending ? <span style={{ marginLeft: '10px' }}>Загрузка...</span> : null}
            <p>Отфильтровано элементов: {filteredItems.length}</p>
            <ul style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseTransitionExample;
