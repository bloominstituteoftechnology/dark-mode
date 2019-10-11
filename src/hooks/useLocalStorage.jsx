import {useState} from "react"
import { parse } from "@babel/core";

export const useLocalStorage = (key,initialValue) => {
    const [storedValue , setStoredValue] = useState(() => {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = updateValue => {
        setStoredValue(updateValue)
        localStorage.setItem(key,JSON.stringify(updateValue))
    }
    return [storedValue ,setValue ]
}
