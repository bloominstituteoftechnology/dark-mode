import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('key', false)
    const toggleDarkMode = () => {
        setSomeValue(!someValue)
    }

    return [someValue, toggleDarkMode]
}