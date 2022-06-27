import { useCallback, useState } from "react"

const useFirebase = () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const readFirebase = useCallback(async (url, config = {}) => {
        try {
            setIsLoading(true);
            setHasError(false);
            const response = await fetch(url, config);
            const data = await response.json();
            setIsLoading(true);
        } catch (e) {
        }
    }, []);
    
}