import useLocalStorage from "./useLocalStorage"

function useDarkMode(){
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled')

  return [enabledState, setEnabledState]





  

}

export default useDarkMode