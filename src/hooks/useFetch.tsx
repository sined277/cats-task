import React from "react";
import { CatData, LoadingType } from "../interfaces";

export const useFetch = () => {
    const [data, setData] = React.useState<CatData[]>([]);
    const [loadingStatus, setLoadingStatus] = React.useState<LoadingType>(false);
    const [error, setError] = React.useState(null);
    const API_KEY = "live_EMnAJQrf7PFlTPBEmYWxck19z7mDImQEeD2yLF8AAC0NMLBiKmqg19z1mHuJfZ04";
    const URL = `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=${API_KEY}`;

    const fetchData = React.useCallback(async () => {
        setLoadingStatus(true);
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cats: CatData[] = await response.json();
            const catsWithFavorites = cats.map(cat => ({
                ...cat,
                isFavorite: false
            }));
            setData(catsWithFavorites);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            if (error instanceof Error) {
                setError(error as Error);
            }
        } finally {
            setLoadingStatus(false);
        }
    }, [URL]);

    React.useEffect(() => {
        fetchData();
    }, [URL, fetchData]);

    const onToggleFavorite = (id: string) => {
        const toggle = data.map(cat => {
            if (cat.id === id) {
                return {
                    ...cat,
                    isFavorite: !cat.isFavorite
                };
            }
            return cat;
        });
        setData(toggle);
    };

    return {
        data,
        loadingStatus,
        error,
        onToggleFavorite
    };
};
