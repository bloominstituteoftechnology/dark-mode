import useLocalStorage from './useLocalStorage'

const useDarkMode = (initialPreference) => {
    let key = 'preference'
    const [preference, setPreference] = useLocalStorage(key, initialPreference)
    const handleToggle = (updatedPreference) => {
        setPreference(updatedPreference)
    }
    return [preference, setPreference, handleToggle]
}

export default useDarkMode