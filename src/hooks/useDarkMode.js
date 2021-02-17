import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = initialMode => {

    const [mode, setMode] = useLocalStorage(initialMode);
    
    return [mode, setMode]
}