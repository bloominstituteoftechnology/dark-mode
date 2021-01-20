import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [values, setValues] = useLocalStorage('darkmode')

    return [values, setValues];
    };

export default useDarkMode;