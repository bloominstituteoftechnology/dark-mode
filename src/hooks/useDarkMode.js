import {useEffect} from 'react'
import useLocalStorage from './useLocalStorage'
import { classBody } from '@babel/types'

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("dark-mode")

    useEffect(() => {
        useLocalStorage ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [value])

    return [value, setValue]
}