import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (initialValues) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValues);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
