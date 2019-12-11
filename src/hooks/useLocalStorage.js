import {useState} from "react"

const useLocalStorage = (key,initialValue) => {
    const [storedValue , setStoredValue] = useState(() => {
        localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue
    })

    const setValue = updateValue => {
        setStoredValue(updateValue)
        localStorage.setItem(key, JSON.stringify(updateValue))
    }

    return [storedValue , setValue]
}