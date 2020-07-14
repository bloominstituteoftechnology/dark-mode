import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage(initialValue);

    //     useEffect(() => {
    //         window.localStorage.value === true ? return (<body className='dark-mode' : '' >)
    // }, []);

    return [];
}