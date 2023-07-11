import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = ()=>(
  <div className="title">
    <h1>Hii there</h1>
    <h2>This is react element</h2>
    <h3>And it is using JSX</h3>
  </div>
);

//React Component
//Functional component (New way of writing code)
const HeaderComponent = ()=>
  (<div >
    <TitleComponent/>
    <h1>Namaste React functional component</h1>
    <h4>using JSX</h4>
  </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>); //paasing multiple child using container inside the root (takes in react element and modifies the dom)
