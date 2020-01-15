import { useEffect } from "react";
import {useLocalStorage} from '../hooks/useLocalStorage';

export const useDarkMode = (key, initialValue) => {
const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
useEffect(() => {
    if (someValue === true) {
        (document.querySelector('body')
        .classList.add('dark-mode'))
    } else {
        (document.querySelector('body')
        .classList.remove('dark-mode'))
    }
}, [setSomeValue, someValue])
return [someValue, setSomeValue];
}
