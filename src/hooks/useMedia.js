import {useState} from "react";

const useMedia = (queries, values, defaultValue) => {
	const mediaQueryList = queries.map(q => { return window.matchMedia(q)});

	const getValue = () => {
		const index = mediaQueryList.findIndex(mql => mql.matches);
		return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
	};
	//test
	const value  = useState(getValue);
	return value;
};

export default useMedia;