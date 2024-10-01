import React, { useSyncExternalStore } from 'react';
import counterStore from '../stores/counterStore';

const UseSyncExternalStoreExample: React.FC = () => {
    const subscribe = (callback: () => void) => {
        return counterStore.subscribe(callback);
    };

    const getSnapshot = () => counterStore.getCount();

    const count = useSyncExternalStore(subscribe, getSnapshot);

    const increment = () => counterStore.increment();
    const decrement = () => counterStore.decrement();

    return (
        <div>
            <h3>Пример использования useSyncExternalStore</h3>
            <p>Текущее значение счётчика: <strong>{count}</strong></p>
            <button onClick={increment} style={{ padding: '8px 12px', marginRight: '10px' }}>
                Увеличить
            </button>
            <button onClick={decrement} style={{ padding: '8px 12px' }}>
                Уменьшить
            </button>
        </div>
    );
};

export default UseSyncExternalStoreExample;
