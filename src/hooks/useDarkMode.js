import React from "react";

export default function useDarkMode() {
	const [darkMode, setDarkMode] = React.useState(getInitialMode());

	//to make the mode persistant and activate only when dark mode is in
	React.useEffect(() => {
		localStorage.setItem("dark", JSON.stringify(darkMode));
	}, [darkMode]);

	//get the dark mode from storage
	function getInitialMode() {
		const savedMode = JSON.parse(localStorage.getItem("dark"));
		return savedMode || false;
	}

	return (
		<div className='dark-mode'>
			<button onClick={() => setDarkMode((prevMode) => !prevMode)}>
				Toggle Mode
			</button>
		</div>
	);
}
