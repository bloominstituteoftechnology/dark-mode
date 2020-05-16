import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';



function UseDarkMode (initialValue) {

const [darkValue, setDarkValue] = useLocalStorage("dark-mode", initialValue)


useEffect(()  => {

if(darkValue){
    document.body.classList.add('dark-mode');
} else {

    document.body.classList.remove('dark-mode');

}

}, [darkValue])

return [darkValue, setDarkValue]

}


export default UseDarkMode;