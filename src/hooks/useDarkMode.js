import React, {useState, useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";
import { isJSDocUnknownType, setConstantValue } from "typescript";

export const useDarkMode= (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        //if the Navbar is set to true (darkMode) then active darkMode
        if ( darkMode === true) {
            return document.querySelector('body').classList.add("dark-mode");
        } else {
            return document.querySelector('body').classList.remove("dark-mode");
        }
    }, [darkMode])

    // const handleChanges = event => {
    //     setDarkMode(event.target.value);
    // }; 

    return [darkMode, setDarkMode]
}