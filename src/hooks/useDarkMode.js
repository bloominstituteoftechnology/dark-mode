import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkMode = () => {
	const [ isDark, setIsDark ] = useLocalStorage('true');
	useEffect(
		() => {
			if (isDark === true) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		},
		[ isDark ]
	);
	return isDark, setIsDark;
};

export default useDarkMode;
