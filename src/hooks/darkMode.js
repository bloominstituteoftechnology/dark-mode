import { useState } from 'react';

export const darkMode = () => {
    const [dark, setDark] = useState(false);

    const setDarkValue = value => {
        setDark(value)
    }
    return [dark, setDarkValue]
}