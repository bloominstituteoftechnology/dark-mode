import React from 'react';
import useLocalStorage from './useLocalStorage';

function UseDarkMode (initialValue) {

const [darkValue, setDarkValue] = useLocalStorage("dark-mode", initialValue)

if(darkValue){
    document.body.classList.add('dark-mode');
}else {

    document.body.classList.remove('darkmode');

}


}


export default UseDarkMode;