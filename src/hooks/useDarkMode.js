import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkModeOn, setDarkModeOn] = useLocalStorage('on');
}