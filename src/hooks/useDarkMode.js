import React from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = ( key, initialValue ) => {

    const [ darkmode, setDarkmode ] = useLocalStorage( key, initialValue )
    setDarkmode(true);
    return [ darkmode, setDarkmode ];
}