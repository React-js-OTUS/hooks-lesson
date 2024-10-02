'use client'

import {useEffect, useRef, useState} from "react";

function fib(n: number): number {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const ComponentUsingUseLayoutEffect = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [state, setState] = useState(0);

    useEffect(() => {
        setState(fib(40))
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, []);

    return (
        <div>
            <h3>Пример с useLayoutEffect</h3>
            <div
                ref={containerRef}
                style={{
                    height: "200px",
                    overflow: "auto",
                    border: "1px solid black",
                }}
            >
                {Array.from({ length: 50 }, (_, i) => (
                    <p key={i}>Строка номер {i + 1}</p>
                ))}
            </div>
            {state}
        </div>
    );
};

export default ComponentUsingUseLayoutEffect;
