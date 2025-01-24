import React from 'react'
import ItemList from './ItemList';

const Content2 = ({ items, handleCheck, handleDelete }) => { // the meaning of this line is to get the items, handleCheck, and handleDelete props from the App component and use them in the Content2 component.

    return (
        <main>
            {items.length ? (
                <ItemList 
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}> Your list is empty!</p>
            )}
        </main>
    )
}

export default Content2;