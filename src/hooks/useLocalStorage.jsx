import {useState} from "react"

export const useLocalStorage = (key,initialValue) => {
    const [storedValue , setStoredValue] = useState(() => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item): initialValue
    })

    const setValue = updateValue => {
        setStoredValue(updateValue)
        localStorage.setItem(key,JSON.stringify(updateValue))
    }
    return [storedValue ,setterFunction ]
}