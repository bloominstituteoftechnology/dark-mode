import { useLocalStorage} from "./uselocalstorage"


export const useDarkMode = () =>{

const [value, setValue] = useLocalStorage(true)

return [value, setValue]





}