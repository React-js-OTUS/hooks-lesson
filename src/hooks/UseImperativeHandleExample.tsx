import { useImperativeHandle, forwardRef, useRef } from "react";

interface ChildHandle {
    reset: () => void;
}

const ChildComponent = forwardRef<ChildHandle, {}>((_props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        reset() {
            if (inputRef.current) {
                inputRef.current.value = "";
                inputRef.current.focus();
            }
        },
    }));

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Введите текст" />
        </div>
    );
});

const UseImperativeHandleExample = () => {
    const childRef = useRef<ChildHandle>(null);

    const handleReset = () => {
        if (childRef.current) {
            childRef.current.reset();
        }
    };

    return (
        <div>
            <h3>Пример использования useImperativeHandle</h3>
            <ChildComponent ref={childRef} />
            <button
                onClick={handleReset}
                style={{ marginTop: "10px", padding: "8px 12px" }}
            >
                Сбросить и сфокусировать поле
            </button>
        </div>
    );
};

export default UseImperativeHandleExample;
