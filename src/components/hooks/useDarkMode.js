import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    console.log('from DM');

    const body = document.getElementsByTagName('body');

    useEffect(() => {
        if (window.localStorage.getItem(key) === 'true') { (body[0].classList.add('dark-mode')) }
        else { body[0].classList.remove('dark-mode') }
    }, [someValue]);

    return [someValue, setSomeValue];
}