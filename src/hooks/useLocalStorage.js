import { useState } from 'react'

// To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(window.localStorage.getItem(key)) : initialValue
  })

  const setValue = value => {
    setStoredValue(value);

    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue]
}

export default useLocalStorage;