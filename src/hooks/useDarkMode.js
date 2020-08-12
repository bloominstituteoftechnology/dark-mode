import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (initialValue, cb) => {

const [nightTime, setNightTime] = useLocalStorage('key')




useEffect(() => {
if (useLocalStorage === 'true') {
    return document.body.classList.add("dark-mode")
} else {
    return document.body.classList.remove('dark-mode')
});





return [nightTime]
};