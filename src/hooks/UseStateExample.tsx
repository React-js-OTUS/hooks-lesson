import { useState } from "react";

function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const UseStateExample = () => {
    const [count, setCount] = useState<number>(() => fib(40));

    return (
        <div>
            <h3>Пример использования useState</h3>
            <p>Текущее значение: {count}</p>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                Увеличить
            </button>
            <button onClick={() => setCount(count - 1)}>Уменьшить</button>
        </div>
    );
};

export default UseStateExample;
