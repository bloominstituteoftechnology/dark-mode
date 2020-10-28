import {useState, useEffect} from "react";

const useMedia = (queries, values, defaultValue) => {
	const mediaQueryList = queries.map(q => { return window.matchMedia(q)});

	const getValue = () => {
		const index = mediaQueryList.findIndex(mql => mql.matches);
		return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
	};

	const [value, setValue] = useState(getValue);
	return value;

	// useEffect( () => {
	// 	const handler = () => setValue(getValue);
	// 	mediaQueryList.forEach(mql => mql.addListener(handler));
	// 	return () => mediaQueryList.forEach(mql => mql.removeListener(handler));
	// 	}, 
	// 	[]
	// );
};

export default useMedia;