import React from 'react';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem 
                    key={item.id} // the meaning of this line is to assign the id of the item as the key of the LineItem component to make it unique and avoid the warning message in the console 
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList;