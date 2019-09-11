import React, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = (key, initialValue) => {
    const [darkValue, setDarkValue] = useLocalStorage(key, initialValue);
    useEffect(() => {
        if (darkValue) {
            document.querySelector("body").classList.add("dark-mode")
        }
        else document.querySelector("body").classList.remove("dark-mode")
    }, [darkValue])

    return [darkValue, setDarkValue]
}