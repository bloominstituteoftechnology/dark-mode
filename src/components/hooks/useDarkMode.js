import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);
    
    return [values];
}
