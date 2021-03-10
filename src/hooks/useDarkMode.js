import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [localStorage, setLocalStorage] = useLocalStorage("darkMode");
  return [localStorage, setLocalStorage];
};
