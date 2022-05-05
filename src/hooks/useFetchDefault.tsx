import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";
import router from "next/router";

export function useFetchDefault() {
    const [isLoading, setIsLoading] = useState(null);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const fetch = useCallback(async (url) => {
        setIsLoading(true);
        const res = await api.get(url, {
            headers: {
                'X-Requested-Uri': `${router.asPath}`
            }
        }).then(res => {
            setIsLoading(false);
            setValue(res.data);
            return res.data;
        }).catch(() => setError(true))
        setIsLoading(false);
        return res;
    }, []);
    return {
        fetch,
        value,
        isLoading,
        error
    }
}