import { useState } from 'react';
import useLocalStorage from './useLocalStaorage';

const useDarkMode = (theme) => {
    const [value, setvalue] = useLocalStorage('mode', theme);
    const handleToggle = (newTheme) => {
        setvalue(newTheme)
    }
    return [value, setvalue, handleToggle]
}

export default useDarkMode;