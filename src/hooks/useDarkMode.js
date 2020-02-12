
import {useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode =(key, initialValue) => {

    const[values, setValues] = useLocalstorage(key, initialValue);

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValue);
    };

    const handleChanges = e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        });
    };

    return [values, clearForm, handleChanges];
};