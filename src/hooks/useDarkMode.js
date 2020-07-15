import React, {useEffect }from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = () => {

const [someValue, setSomeValue] =
 useLocalStorage('isDarkModeOn', false)



useEffect(()=>{
 const body = document.getElementsByTagName('body');    
JSON.parse(window.localStorage.getItem('isDarkModeOn')) === true ?
(body[0].classList.add('dark-mode')):
body[0].classList.remove('dark-mode')
},[someValue])
return[someValue,setSomeValue]
};
 
