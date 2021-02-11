import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = () => {
   const [someValue, setSomeValue] = useLocalStorage('');

   return [someValue, setSomeValue];
}