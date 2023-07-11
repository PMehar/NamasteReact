import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>Object =>HTML(DOM)
const heading = React.createElement(
  "div",
  {
    class: "header",
  },
  [React.createElement(
    "h1",
    {
      class: "title",
      key:"h1",
    },
    "Namaste React.."
  ),React.createElement(
    "h2",
    {
      class: "title",
      key:"h2",
    },
    "Namaste React..",
  ),React.createElement(
    "h3",
    {
      class: "title",
      key:"h3",
    },
    "Namaste React..",
  )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //paasing multiple child using container inside the root (takes in react element and modifies the dom)
