import { useState } from "react";

const loggedInUser =()=>{
  //API call to check authintication 
  return false;
};

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://cdn.vectorstock.com/i/preview-1x/43/01/restaurant-map-pointer-icon-food-point-pin-symbol-vector-47134301.webp"
      />
    </a>
  );
   
const Header = () => {
  const[isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn?(<button onClick ={()=>setIsLoggedIn(false)}>Logout</button>)
      :<button onClick={()=>setIsLoggedIn(true)}>Login </button>}
      </div>
  );
};

export default Header;