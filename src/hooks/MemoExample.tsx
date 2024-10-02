import { useState } from 'react';

interface ChildProps {
    number: number;
}

const Child = ({ number }: ChildProps) => {
    console.log(`Рендеринг Child ${number}`);
    return <li>Элемент {number}</li>;
};

// ----------------------------------------------------------------

const MemoExample = () => {
    const [items, setItems] = useState<number[]>([1, 2, 3]);

    const addItem = () => {
        setItems(prevItems => [...prevItems, prevItems.length + 1]);
    };

    return (
        <div>
            <h2>Родительский компонент</h2>
            <button onClick={addItem}>Добавить элемент</button>
            <ul>
                {items.map(item => (
                    <Child key={item} number={item} />
                ))}
            </ul>
        </div>
    );
};

export default MemoExample;
