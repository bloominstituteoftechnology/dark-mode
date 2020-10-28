import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', initialValue)

    return [isDarkMode, setIsDarkMode]
}