import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';


export const useDarkMode = value => {

  const [mode, setMode] = useLocalStorage("Dmode", value);


  // const handleToggle = updatedValue => {
  //
  //   setMode
  // }
  useEffect(() =>{
    //select the body of the HTML
    let body = document.getElementsByTagName('body');

    //modify it based on what the current value is.
    if(Boolean(mode) === true){
      body[0].className = 'dark-mode';

    } else {
      body[0].className = '';
      // console.log('darkmode is false')
    }

  }, [mode]);


  return[mode, setMode];
}
