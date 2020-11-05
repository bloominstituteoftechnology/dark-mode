import useLocalStorage from './useLocalStorage';
import usePrefersDarkMode from './usePrefersDarkMode';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode-enabled")
  const userPreference = usePrefersDarkMode();
  const enabled = typeof darkMode !== 'undefined' ? darkMode : userPreference;
  return [enabled, setDarkMode]
}

export default useDarkMode;


