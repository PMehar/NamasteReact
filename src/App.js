import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter ,RouterProvider , Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import InstaMart from "./components/InstaMart";

const InstaMart = lazy(()=>import("./components/InstaMart"));

const AppLayout = () => {
  const [user, setUser] =  useState({
    name: "Puja Mehar",
    email: "pujamehar05@gmail.com",
  });


  return (
    <UserContext.Provider value= {{user:user, setUser:setUser,}}>
      <Header />
      <Outlet/> 
     
      <Footer />
   
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children :[
      {
        path: "/",
        element:<Body user={{
          name : "Namaste React",
          email: "support@namastedev.com",
        }}/>,
      },
      {
        path: "/about",
        element:<About/>,
        children:[
          {
            path:"profile", 
            element:<Profile/>,
          },
        ],
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path: "/instamart",
        element:<Suspense fallback= {<Shimmer/>}><InstaMart/></Suspense>,
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />); 
