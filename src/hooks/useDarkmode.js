import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage(key)
}