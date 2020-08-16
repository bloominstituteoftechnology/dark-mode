import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode(initialValues) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValues);

    return [darkMode, setDarkMode];
}

export default useDarkMode;