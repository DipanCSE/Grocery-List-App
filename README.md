Grocery List App 🛒
A React-based Grocery List App built using functional components, useState hooks, React forms, and prop drilling. This app offers a seamless user experience for managing grocery items, with dynamic updates, persistent storage using localStorage, and a modular file structure.


Features ✨
-Add Items: Add new grocery items to your shopping list using a React form.
-Search Items: Dynamically filter and search items.
-Mark as Purchased: Use a checkbox to toggle the status of items.
-Delete Items: Remove items you no longer need.
-Persistent Data: Retains the shopping list across sessions using localStorage.
-Interactive UI: Built using functional components and click events.


Technologies Used 🛠️
-React.js: Core library for building UI components.
-React Functional Components: Ensures a modular and reusable codebase.
-React Hooks (useState): Manages component states effectively.
-Prop Drilling: Passes data and methods to child components.
-LocalStorage: Ensures data persistence across browser sessions.


Components Breakdown 🧩
1. Header
  -Displays the title of the application: Grocery List.
2. AddItem
  -Contains a form to add new items to the list.
  -Handles input changes and form submissions using controlled components.
3. SearchItem
  -Provides a search bar to filter grocery items in real-time.
  -Controlled input with dynamic filtering.
4. Content2
  -Displays the list of items.
  -Handles:
      .Check events: Toggles the checked state of an item.
      .Delete events: Removes an item.
5. Footer
  -Displays the total number of items in the list dynamically.


Key React Concepts Used 💡
1.React Functional Components
  -Simplifies the component structure for better readability and maintenance.
2.React Hooks (useState)
  -Manages items, newItem, and search states effectively.
3.List and Keys
  -Renders a list of items efficiently using unique key props for each list element.
4.Prop Drilling
  -Passes functions (handleCheck, handleDelete, etc.) and data (items, search) to child components.
5.Click Events
  -Adds interactivity to buttons and checkboxes for various functionalities.


File Structure 📂
src  
├── components  
│   ├── AddItem.js        // Component for adding items  
│   ├── Content2.js       // Component for displaying and managing the list of items  
│   ├── Footer.js         // Footer with item count  
│   ├── Header.js         // Displays app title  
│   ├── SearchItem.js     // Search bar for filtering items  
├── App.js                // Main React component with state and logic  
├── index.js              // Entry point for the app  
├── styles.css            // (Optional) Styles for the app  
public  
├── favicon.ico           // App icon  
├── index.html            // Main HTML file  


Preview 🚀
Add new items dynamically.
Filter items through the search bar.
Mark purchased items with a checkbox.
Remove unnecessary items.

Author 👨‍💻
  -Developed by [Dipan Majumder].
Connect with me on: 
  -GitHub : https://github.com/DipanCSE
  -LinkedIn : https://www.linkedin.com/in/dipan-majumder-a62760301/


-for start the app use this command in terminal "npm run"
