import {useState} from 'react';
import { expression } from '@babel/template';

const useLocalStorage = (key, initVal) => {
const [storedVal, setStoredVal] = useState(()=>{
    const item = window. localStorage.getItem(key);
    // if(item){
    //     return JSON.parse(item);
    // } else {
    //     return initVal;
    // }
    // return expression ? true branch: false branch;
    return item ? JSON.parse(item) : initVal;
});
const setVal = value => {
    setStoredVal(value);
    window.localStorage.setItem(key, JSON.stringify(value))
}
return [storedVal, setVal];
};

export default useLocalStorage;