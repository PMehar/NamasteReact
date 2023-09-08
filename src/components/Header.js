import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo_live.jpg";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  //API call to check authintication
  return false;
};

const Title = () => (
  <a href="/">
    <img
      className="logo w-24 p-2"
      alt="logo"
      src={Logo}
      //"https://cdn.vectorstock.com/i/preview-1x/43/01/restaurant-map-pointer-icon-food-point-pin-symbol-vector-47134301.webp"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-pink-400 shadow-lg sm:bg-blue-300 md:bg-yellow-100">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2">Cart</li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h4>Online Status :{isOnline ? "🟢" : "🔴"}</h4>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login </button>
      )}
    </div>
  );
};

export default Header;
