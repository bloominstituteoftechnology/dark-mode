import useLocalStorage from "./useLocalStorage"

const useModeButton = () => {
    const [darkMode, setDarkMode] = useLocalStorage("key");
    return [darkMode, setDarkMode];
}

export default useModeButton;