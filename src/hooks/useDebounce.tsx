import React from "react";

function useDebounce(value: string, delay: number) {

    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(
        () => {
            const t = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(t);
            };
        },
        [value, delay]
    );
    return debouncedValue;
}

export default useDebounce;