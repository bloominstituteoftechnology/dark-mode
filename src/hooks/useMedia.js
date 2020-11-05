import { useState, useEffect } from 'react'

// using a custom Hook
const useMedia = (queries, values, initvalue) => {
  //  array containing a media query list for each query
  const mediaQueryLists = queries.map(query => window.matchMedia(query))
  console.log('useMedia: RT:', mediaQueryLists)

  // function getting values by matching media query
  const getValue = () => {
    // getting index of the first media query
    const index = mediaQueryLists.findIndex(queryList => queryList.matches)
    //  Return value or initial value if not
    return typeof values[index] !== 'undefined' ? values[index] : initvalue;
  }

  // state and setter for matched value must be defined outside to make sure it the current values
  const [value, setValue] = useState(getValue);

  useEffect(
    () => {
      // callback event listener
      const callHandler = () => setValue(getValue);
      // set listener for each media query performed
      mediaQueryLists.forEach(queryList => queryList.addListener(callHandler));
      // remove my listeners
      return () => mediaQueryLists.forEach(queryList => queryList.removeListener(callHandler));
    }, []);
  return value;
};

export default useMedia;