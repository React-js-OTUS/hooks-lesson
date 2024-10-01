// src/hooks/useFetchList.ts
import { useState, useEffect } from 'react';

interface UseFetchListResult<T> {
    loading: boolean;
    data: T[] | null;
    error: string | null;
}

function useFetchList<T>(url: string): UseFetchListResult<T> {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<T[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Ошибка загрузки: ${response.statusText}`);
                }
                const result: T[] = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { loading, data, error };
}

interface User {
    id: number;
    name: string;
    email: string;
}

const UseCustomExample = () => {
    const { loading, data, error } = useFetchList<User>('https://jsonplaceholder.typicode.com/users');

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: 'red' }}>Ошибка: {error}</p>;
    if (!data) return null;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Список пользователей</h2>
            <ul>
                {data.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UseCustomExample;
