import React from 'react';
import { useDropDown } from '../hooks/useDropDown';

const DropDown = props => {
    const [items, setItems] = useDropDown(props.dropItems);
    //console.log(props.dropItems)
    return(
        <select>
            {items.map(item => (
                <option key={item.id}>{item.id}</option>
            ))}
        </select>
    );
}

export default DropDown;