import { useLocalStorage} from "./useLocalStorage"


export const useDarkMode = () =>{

const [someValue, setSomeValue] = useLocalStorage('dark-mode')

return [someValue, setSomeValue]





}