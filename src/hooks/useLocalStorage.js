import { useState } from 'react'

const useLocalStorage = (key, intitialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }

        localStorage.setItem(key, JSON.stringify(intitialValue))
        return intitialValue
    })

    const setValue = value => {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}