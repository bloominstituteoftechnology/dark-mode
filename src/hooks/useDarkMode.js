import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
const [ value, setValue ] = useLocalStorage(key, initialValue);

const handleChanges = updatedValue =>{
    setValue(updatedValue);
};

useEffect(() => {
    if(value==true){
        document.querySelector('body').classList.add('dark-mode')
    } else {
        document.querySelector('body').classList.remove('dark-mode')
    }
}, [value]);

    return [value, setValue, handleChanges]

};


