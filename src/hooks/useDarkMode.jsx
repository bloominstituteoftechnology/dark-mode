import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage('darkMode')
  const body = document.querySelector('body')

  useEffect(() => {
    if (value === true) {
        return body.classList.add('dark-mode')
    } else {
        return body.classList.remove('dark-mode')
    }
  }, [value, body.classList])

  return [value, setValue]
}