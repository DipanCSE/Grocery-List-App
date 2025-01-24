import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content2 from './Content2';
import Footer from './Footer';
import React, { useState } from 'react';

function App() {
  // Ensure items is always an array, even if localStorage is empty or invalid
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppinglist');
    return savedItems ? JSON.parse(savedItems) : []; // Fallback to an empty array
  });
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return; // Ensure no empty or whitespace-only items
    addItem(newItem.trim());
    setNewItem('');
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search ={search}
        setSearch={setSearch}
      />
      <Content2
        items={items.filter(item => ((item.item).toLowerCase()).includes
        (search.toLowerCase()))} // Pass items array to Content2
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} /> {/* Pass the length of items */}
    </div>
  );
}

export default App;
