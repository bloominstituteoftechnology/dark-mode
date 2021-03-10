import useLocalStorage  from './useLocalStorage';

const useTheme = () => {
  const [localStorage, setLocalStorage] = useLocalStorage("dark-mode App");
  return [localStorage, setLocalStorage]
}

export default useTheme;