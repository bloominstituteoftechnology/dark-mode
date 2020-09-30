import react, {useState} from 'react';
import UseLocalStorage from './useLocalStorage';

export const UsedarkMode = (initvalue) =>{
    const [darkmode, Setdarkmode] = UseLocalStorage('darkmode', initvalue);

    return [darkmode, Setdarkmode]
}

export default UsedarkMode;