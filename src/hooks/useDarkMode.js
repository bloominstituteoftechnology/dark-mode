import useLocalStorage from './useLocalStorage';
import usePrefersDarkMode from './usePrefersDarkMode';
import {useEffect} from 'react';

const useDarkMode=(initialValue)=>{
    //Note-useLocalStorage retuns storedValue,setValue
    const [darkModeStatus,setDarkModeStatus]=useLocalStorage('darkmode-status',initialValue)

// See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook  
  const prefersDarkMode = usePrefersDarkMode();
  console.log('prefersDarkMode returned from useMedia=',prefersDarkMode)
  // If darkModeStatus state is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof darkModeStatus !== 'undefined' ? darkModeStatus : prefersDarkMode;

// Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = 'dark-mode';
      const element = window.document.body;
      if (enabled) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabled] // Only re-call effect when value changes
  );


    return [enabled,setDarkModeStatus]

}
export default useDarkMode;