import useLocalStorage from './useLocalStorage'




const useDarkMode = (param) => {

    const [value, setValue] = useLocalStorage ('Dark Mode',param);

    const setDarkMode = ()=>{
        setValue(!value);
    }
    return [value, setDarkMode]
}

export default useDarkMode