import React, { useReducer } from 'react';

type Action = { type: 'increment' } | { type: 'decrement' };

type State = { count: number };

function counterReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error('Unknown action');
    }
}

const Counter: React.FC = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};

export default Counter;
