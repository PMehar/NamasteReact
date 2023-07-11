import React from "react";
import ReactDOM from "react-dom/client";

const header =(
  <div className="title">
    <h1>Namaste React</h1>
    <h2>Namaste React</h2>
    <h3>Namaste React</h3>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header); //paasing multiple child using container inside the root (takes in react element and modifies the dom)
