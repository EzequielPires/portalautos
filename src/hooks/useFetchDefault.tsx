import { useCallback, useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetchDefault() {
    const [isLoading, setIsLoading] = useState(null);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const fetch = useCallback(async (url) => {
        setIsLoading(true);
        const res = await api.get(url).then(res => {
            setIsLoading(false);
            setValue(res.data);
            return res.data;
        }).catch(() => {
            setIsLoading(false);
            setError(true);
        })
        return res;
    }, []);

    return {
        fetch,
        value,
        isLoading,
        error
    }
}