import {useLocalStorage } from './useLocalStorage'

export const useDarkMode =(key, initialValues) =>{
const [someValue, setSomeValue] = useLocalStorage(key, initialValues)

const handleChange = (e) => {
    // setSomeValue(e)
}
    // const clearMode =(e)=>{
    //     e.preventdefault();
    //    setSomeValue(initialValues)
    

return [ handleChange]
}