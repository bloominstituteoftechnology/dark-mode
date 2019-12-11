import { useEffect }from 'react';
import  useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkmode');
    // const body = document.querySelector('body');

    // const toggleOn = e => {
    //     e.preventDefault();
    //     setValue(!value);
    // }

    useEffect(() => {
      
        if(value) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode');
        }
    }, [value]);

    return [value, setValue];
}

export default useDarkMode;