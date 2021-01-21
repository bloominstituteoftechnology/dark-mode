import React from 'react';
import useStorage from './useStorage';

const useDarkMode = () => {
    const [values, setValues] = useStorage('darkmode')

    return [values, setValues];
};

export default useDarkMode; 