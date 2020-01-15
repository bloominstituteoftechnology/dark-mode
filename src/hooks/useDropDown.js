import { useState } from 'react';

export const useDropDown = value => {
    const [ dropDownItems, setDropDownItems ] = useState(value)
    console.log('test')
    if (JSON.stringify(dropDownItems) != JSON.stringify(value)){
        setDropDownItems(value);
    }
    return [dropDownItems, setDropDownItems];
}