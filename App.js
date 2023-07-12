import React from "react";
import ReactDOM from "react-dom/client";

/*
      Header
        -Logo
        -Nav Items(Right side)
        -cart
      Body
        -search bar
        -RestaurantList
          -RestaurantCard
            -Image
            -Name
            -Rating
            -cusines
      Footer
        -Links
        -Copyrights
    */
   //React.Fragment
   //jsx has only one parent

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://cdn.vectorstock.com/i/preview-1x/43/01/restaurant-map-pointer-icon-food-point-pin-symbol-vector-47134301.webp"
    />
  </a>
);

//composing component
const HeaderComponent = () => {
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
    </div>
  );
};
const Body = () => {
  return <h1>Body</h1>;
};

const Footer = () => {
  return <h1>Footer</h1>;
};
const styleObj ={ //as an obj
  backgroundColor : "red",
}

// const AppLayout = () => {
//   return (
//     <React.Fragment>
//       <Header />
//       <Body />
//       <Footer />
//     </React.Fragment>
//   );
// };

//React.Fragment
//jsx has only one parent
/*1 way of inline styling in react*/

const Jsx =()=>(
   <div style ={styleObj}>  
    <h1>JSX Here</h1>
  </div>
)
/**2nd way of inline styling in react*/
const jsx2 =(
  <div style ={{
    backgroundColor : "green" ,
  }}>
    {Jsx()}
    <h1>JSX Here</h1>
    <h2>h2</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsx2); //paasing multiple child using container inside the root (takes in react element and modifies the dom)
