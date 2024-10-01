import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const UseContextExample = () => {
    return (
        <>
            <ThemeProvider>
                <ThemeProvider>
                    <ViewUseContextExapmple />
                </ThemeProvider>
            </ThemeProvider>
        </>
    );
};

const ViewUseContextExapmple = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const containerStyle: React.CSSProperties = {
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333333",
        color: theme === "light" ? "#333333" : "#f0f0f0",
        textAlign: "center",
        transition: "background-color 0.3s ease, color 0.3s ease",
    };

    return (
        <div style={containerStyle}>
            <h3>Пример использования useContext</h3>
            <p>
                Текущая тема: <strong>{theme}</strong>
            </p>
            <button onClick={toggleTheme}>Переключить тему</button>
        </div>
    );
};

export default UseContextExample;
