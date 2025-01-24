import React from 'react'

const Footer = ({length}) => {
    // const today = new Date();

  return (
    <footer>
      {/* the meaning of "{today.getFullYear()}" is to get the current year */} 
        {/* {/* <p>Copyright &copy; {today.getFullYear()}</p>  */}
        
        <p>{length} List {length === 1 ? "Item" : "Items"}</p> {/* the meaning of this line is to display the number of items in the list and change the word "Item" to "Items" if the number of items is more than one */}
    </footer>
  )
}

export default Footer;