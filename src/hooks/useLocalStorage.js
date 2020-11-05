import { useState } from 'react'

export const useLocalStorage = (k, initval) => {
  const [theValue, setTheValue] = useState(() => {
    const item = window.localStorage.getItem(k)
    return item ? JSON.parse(item) : initval
  })
  const setValue = v => {
    setTheValue(v)
    localStorage.setItem(k, JSON.stringify(v))
  }

  return [theValue, setValue]
}