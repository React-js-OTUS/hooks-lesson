import { useRef } from "react";

const UseRefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const a = useRef<number>(0);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const changeDivStyle = () => {
        if (divRef.current) {
            divRef.current.style.backgroundColor =
                divRef.current.style.backgroundColor === "lightblue"
                    ? "lightcoral"
                    : "lightblue";
        }
    };

    return (
        <div>
            <h3>Пример использования useRef</h3>

            {a.current}

            <button
                onClick={() => (a.current += 1)}
                style={{ marginLeft: "10px", padding: "8px 12px" }}
            >
                +
            </button>

            <input
                ref={inputRef}
                type="text"
                placeholder="Автофокус при нажатии кнопки"
                style={{ padding: "8px", width: "200px" }}
            />
            <button
                onClick={focusInput}
                style={{ marginLeft: "10px", padding: "8px 12px" }}
            >
                Фокусировать поле
            </button>

            <div
                ref={divRef}
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: "lightblue",
                    transition: "background-color 0.3s ease",
                }}
            >
                Этот контейнер меняет цвет при нажатии кнопки ниже.
            </div>

            <button
                onClick={changeDivStyle}
                style={{ marginTop: "10px", padding: "8px 12px" }}
            >
                Изменить цвет контейнера
            </button>
        </div>
    );
};

export default UseRefExample;
