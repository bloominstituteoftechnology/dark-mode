import useLocalStorage from './useLocalStorage';
import useUserPreference from './useUserPreference';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode-enabled")
  const userPreference = useUserPreference();
  const enabled = typeof darkMode !== 'undefined' ? darkMode : userPreference;
  return [enabled, setDarkMode]
}

export default useDarkMode;


