import { useState } from 'react'

const useLocalStorage = (key, initialPreference) => {
    const [storedPreference, setStoredPreference] = useState(() => {
        const preference = window.localStorage.getItem(key)
        return preference ? JSON.parse(preference) : initialPreference
    })
    const setPreference = (preference) => {
        setStoredPreference(preference)
        window.localStorage.setItem(key, JSON.stringify(preference))
    }
    return [storedPreference, setPreference]
}

export default useLocalStorage