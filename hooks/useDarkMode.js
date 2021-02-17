import {useLocalStorage } from './useLocalStorage'

export const useDarkMode =(initialValues) =>{
const [someValue, setSomeValue] = useLocalStorage(initialValues, 'formValues')

const handleChange = (e) => {
    setSomeValue({
        ...somevalues,
        [e.target.name]: e.target.value
    })

    const clearMode =(e)=>{
        e.preventdefault();
        setsomeValues(initialValues)
    }
}
return [clearMode, someValue, handleChange]
}