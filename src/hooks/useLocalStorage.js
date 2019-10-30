import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    console.log(item)
    return item ? JSON.parse(item) : initialValue;

  })

  const setValue = value => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue]
}