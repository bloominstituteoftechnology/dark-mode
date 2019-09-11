import { useState } from 'react'

export const useDarkMode = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = JSON.parse(localStorage.getItem(key))
    return item ? item : initialValue
  })

  const setValue = value => {
    setStoredValue(!storedValue)
    localStorage.setItem(key, JSON.stringify(!storedValue))
    console.log('set value, useLocal', value)
  }

  return [storedValue, setValue]
}

