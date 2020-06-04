import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (value) => {

    const [isActive, setIsActive] = useLocalStorage('isDarkModeActive', value);

    React.useEffect(() => {
        if(isActive) {
            document.getElementById('body-element').classList.add('dark-mode');
        }
        else {
            document.getElementById('body-element').classList.remove('dark-mode');
        }
    }, [isActive]);

    return [isActive, setIsActive];

}

export default useDarkMode;