import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content2 from './Content2';
import Footer from './Footer';
import React, { useState , useEffect } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []); 
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items)); // UseEffect is a async function, It cheack the dependecy and when it is updated or chage it calls and if we don't give any dependency here it should run for every task we do in our application and if we give only blank dependency it should run for every load of our application.
  },[items]);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return; // Ensure no empty or whitespace-only items
    addItem(newItem);
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
