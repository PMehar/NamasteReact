import Profile from "./ProfileClass";
import ProfileFC from "./Profile";
import { Outlet } from "react-router-dom";
import { Component } from "react";

class About extends Component{
  constructor(props){
    super(props);
    
    //console.log(" Parent-Constructor");
  }

 componentDidMount(){
    //API call
    //console.log("Parent-ComponentDidMount");
  }
  render(){
    //console.log("Parent-render");
    return(
      <div>
        <h1>About Us</h1>
        <p>Hii This is Developer Puja </p>
        {/* <Profile name ={"1st "} xyz="abc"/> */}
        <ProfileFC name ={"Puja"}/>
        {/* <Outlet/> */}
     </div>
    );
  };
};

export default About;
