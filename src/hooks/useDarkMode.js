import React from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
const [mode, setStateMode] = useLocalStorage(() => {
if(localStorage.getItem(key)) {
    return JSON.parse(localStorage.getITem(key))
}
else {
    localStorage.setItem(key, JSON.stringify(initialValue))
    return initialValue
}
});
const setMode = (modeValue) => {
    setStateMode(modeValue);
    localStorage.setItem(key, JSON.stringify(modeValue))
}
return [ mode, setMode ]
}