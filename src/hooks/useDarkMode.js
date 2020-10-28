import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (initialValues) => {
const [ value, setValue ] = useLocalStorage("form", initialValues);
// darkMode ? "dark-mode App" : "App"
const handleChanges = e => {
    console.log(value);
    setValue(!value);
    console.log(value);
};
return([value, handleChanges]);
}