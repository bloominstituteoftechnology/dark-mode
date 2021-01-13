import useLocalStorage from "./useLocalStorage"

const useSwitchButton = () => {
    const [darkMode, setDarkMode] = useLocalStorage("key");
    return [darkMode, setDarkMode];
}

export default useSwitchButton;