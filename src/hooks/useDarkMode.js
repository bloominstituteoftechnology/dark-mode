
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {

const [someValue, setSomeValue] = useLocalStorage('dark-mode', false)

return [someValue, setSomeValue]

    // const [someValue, setSomeValue] = useLocalStorage(key)
    // return [ someValue, setSomeValue ]

    //     const [someValue, setSomeValue] = useLocalStorage('true');
    //     useEffect(() => {
    //         if (someValue === true){
    //             return document.body.classList.add('dark-mode'); 
    //         }
    //        return document.body.classList.remove('dark-mode')
    //     }, [someValue]);
    //     return [someValue, setSomeValue];
    // }
}

export default useDarkMode;