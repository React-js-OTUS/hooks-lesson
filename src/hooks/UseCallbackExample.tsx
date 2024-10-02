import React, { useState, useEffect } from 'react';

const TitleUpdater: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [search, setSearch] = useState<string>('');


    const logCount = () => {
        console.log(`count: ${count}`)
    };

    useEffect(() => {
        logCount();
    }, []);

    return (
        <div>
            <h2>Пример с useCallback</h2>
            <input
                type="text"
                placeholder="Поиск..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{padding: '8px', width: '300px', marginBottom: '20px'}}
            />
            <p>Текущее значение счётчика: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Увеличить</button>
        </div>
    );
};

export default TitleUpdater;
