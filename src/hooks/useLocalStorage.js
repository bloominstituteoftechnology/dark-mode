import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {

  const [value, setStateValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    }
    else {
      localStorage.setItem(key, JSON.stringify(initialValue))
      return initialValue;
    }
  })

  const setValue = (newValue) => {
    setStateValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setValue]

}