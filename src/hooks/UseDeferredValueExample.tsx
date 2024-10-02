import { useState, useDeferredValue } from 'react';

const items = Array.from({ length: 10000 }, (_, i) => `Элемент ${i + 1}`);

const UseDeferredValueExample = () => {
    const [search, setSearch] = useState<string>('');

    const deferredSearch = useDeferredValue(search);

    console.log('фильтрация по: ' + deferredSearch);

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(deferredSearch.toLowerCase())
    );

    return (
        <div>
            <h3>Пример использования useDeferredValue</h3>
            <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ padding: '8px', width: '300px', marginBottom: '20px' }}
            />
            <p>Отфильтровано элементов: {filteredItems.length}</p>
            <ul style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default UseDeferredValueExample;
