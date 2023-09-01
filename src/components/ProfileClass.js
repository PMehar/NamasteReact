import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state ={
          userInfo :{
            name: "Dummy name",
            location:"Dummy Location",
          },
        };
        console.log(this.props.name+"Child-Constructor");
    }

    async componentDidMount(){
        //API calls
        // const data  = await fetch("https://api.github.com/users/akshaymarch7");
        // const json = await data.json();
        // console.log(json);

        // this.setState({
        //   userInfo:json,
        // });

        this.timer = setInterval(()=>{
          console.log("Namaste React OP");
        },1000);

        console.log(this.props.name+"Child-ComponentDidMount");
    } 

    componentDidUpdate(){
      console.log("componentDidUpdate");
    }

    componentWillUnmount(){
      clearInterval(this.timer);
      console.log("ComponentWillUnmount");
    }

  render() {
    console.log(this.props.name +"Child-render");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name : {this.state.userInfo.name}</h2>
        <h2>location : {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
