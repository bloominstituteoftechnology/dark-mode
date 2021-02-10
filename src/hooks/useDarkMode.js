import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [localStorage, SetLocalStorage] = useLocalStorage("darkMode");
  return [localStorage, SetLocalStorage];
};
