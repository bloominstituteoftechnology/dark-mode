import {useLocalStorage} from './useLocalStorage'
import {useState} from 'react';



const useDarkMode = (darkmodeSetting) => {
    const [someValue, setSomeValue] = useLocalStorage('dark',darkmodeSetting )
    console.log(someValue)
    return [someValue,setSomeValue]
}   
export default useDarkMode