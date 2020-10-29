import React, { useState } from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage'

export const useDarkMode = (key) => {
    const [darkValue, setDarkValue] = useLocalStorage(key, false)
    const toggleDarkMode = () => {
        setDarkValue(!darkValue)
    }

    return [darkValue, toggleDarkMode]
}
