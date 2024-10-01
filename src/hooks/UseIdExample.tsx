import { useId } from "react";

const UseIdExample = () => {
    const id = useId();

    return (
        <div>
            <h3>Пример использования useId</h3>
            <form>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor={`${id}-username`}>Имя пользователя:</label>
                    <input
                        id={`${id}-username`}
                        type="text"
                        placeholder="Введите имя пользователя"
                        style={{ marginLeft: "10px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor={`${id}-email`}>Электронная почта:</label>
                    <input
                        id={`${id}-email`}
                        type="email"
                        placeholder="Введите email"
                        style={{ marginLeft: "10px", padding: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor={`${id}-password`}>Пароль:</label>
                    <input
                        id={`${id}-password`}
                        type="password"
                        placeholder="Введите пароль"
                        style={{ marginLeft: "10px", padding: "5px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "8px 12px" }}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default UseIdExample;
