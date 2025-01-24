// This all about functional component, clickEvents and useStateHook in React

import { React, useState } from 'react';

const Content = () => {

  const [name , setName] = useState('Dipan');
  const [count , setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Dipan' , 'Arina' , 'Tubai' , 'Sayan'];
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  }

  // Event Handler Function 
    const handleClick = () => {
        console.log('Button Clicked');
    }

    const handleClick2 = (name) => {
        console.log(`${name} was Clicked`);
    }

    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }

    const handleClick4 = () => {
        setCount(count + 1);
    }

  return (
    <main>
        <p onDoubleClick={handleClick}> 
            Hello {name};
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={() => handleClick2(name)}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
        <button onClick={handleClick4}>Click me {count}</button>
    </main>
  )
}

export default Content