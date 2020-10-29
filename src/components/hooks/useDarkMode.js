import React, { useState } from 'react';
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [darkValue, setDarkValue] = useLocalStorage(key, initialValue)
    const toggleDarkMode = () => {
        setDarkValue(!darkValue)
    }

    return [darkValue, toggleDarkMode]
}
