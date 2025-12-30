import { useState, useEffect } from 'react';

export const useCSRF = () => {
    const [csrfToken, setCsrfToken] = useState<string>('');

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await fetch('/api/csrf');
                if (res.ok) {
                    const data = await res.json();
                    setCsrfToken(data.token);
                }
            } catch (error) {
                console.error('Failed to fetch CSRF token', error);
            }
        };
        fetchToken();
    }, []);

    return csrfToken;
};
