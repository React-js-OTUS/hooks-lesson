import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UseStateExample from "./hooks/UseStateExample";
import UseEffectExample from "./hooks/UseEffectExample";
import UseLayoutEffectExample from "./hooks/UseLayoutEffectExample";
import UseContextExample from "./hooks/UseContextExample";
import UseRefExample from "./hooks/UseRefExample";
import UseImperativeHandleExample from "./hooks/UseImperativeHandleExample";
import UseIdExample from "./hooks/UseIdExample";
import UseDeferredValueExample from "./hooks/UseDeferredValueExample";
import UseTransitionExample from "./hooks/UseTransitionExample.tsx";
import UseSyncExternalStoreExample from "./hooks/UseSyncExternalStoreExample.tsx";

const App = () => {
    return (
        <Router>
            <div style={styles.container}>
                <nav style={styles.nav}>
                    <h2>Примеры хуков React</h2>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <Link to="/use-state">useState</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-effect">useEffect</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-layout-effect">useLayoutEffect</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-context">useContext</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-ref">useRef</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-imperative-handle">useImperativeHandle</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-id">useId</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-deferred-value">useDeferredValue</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-transition">useTransition</Link>
                        </li>
                        <li style={styles.li}>
                            <Link to="/use-sync-external-store">useSyncExternalStore</Link>
                        </li>
                    </ul>
                </nav>
                <main style={styles.main}>
                    <Routes>
                        <Route path="/use-state" element={<UseStateExample />} />
                        <Route path="/use-effect" element={<UseEffectExample />} />
                        <Route
                            path="/use-layout-effect"
                            element={<UseLayoutEffectExample />}
                        />
                        <Route path="/use-context" element={<UseContextExample />} />
                        <Route path="/use-ref" element={<UseRefExample />} />
                        <Route
                            path="/use-imperative-handle"
                            element={<UseImperativeHandleExample />}
                        />
                        <Route path="/use-id" element={<UseIdExample />} />
                        <Route path="/use-deferred-value" element={<UseDeferredValueExample />} />
                        <Route path="/use-transition" element={<UseTransitionExample />} />
                        <Route path="/use-sync-external-store" element={<UseSyncExternalStoreExample />} />

                        <Route path="*" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

const Home: React.FC = () => (
    <div>
        <h3>Выберите хук из меню слева</h3>
    </div>
);

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
    },
    nav: {
        width: "200px",
        padding: "20px",
        background: "#f0f0f0",
    },
    ul: {
        listStyle: "none",
        padding: 0,
    },
    li: {
        margin: "10px 0",
    },
    main: {
        flex: 1,
        padding: "20px",
    },
};

export default App;
