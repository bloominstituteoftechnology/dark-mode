import { useState } from 'react'
export const useLocalStorage = (key, initialvalue) => {
  const [theValue, setTheValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialvalue
  })
  const setValue = value => {
    setTheValue(value)
    localStorage.setItem(key, JSON.stringify(value))
  }

  return [theValue, setValue]
}