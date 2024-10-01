import React, { useState, useEffect } from "react";

const UseEffectExample: React.FC = () => {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        setTime((prevTime) => prevTime + 1);
    }, []);

    return (
        <div>
            <h3>Пример использования useEffect</h3>

            <p>Время: {time}</p>

            <button
                onClick={() => {
                    setTime((prev) => prev + 1); // Increment the 'time'
                }}
            >
                Увеличить время
            </button>
        </div>
    );
};

export default UseEffectExample;
