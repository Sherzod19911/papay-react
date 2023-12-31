    //  @ts-nocheck

 import React, { useState, Component } from "react"
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    };

    componentDidCatch() {
        console.log("run componentDidMount");
        // run after first render  RETRIEVE DATA FROM BACKGROUND SERVER
    }

    componentWillUnmount() {
        console.log("run componentwillUnMount");
         // run after component unmount
         }

         componentDidUpdate() {
            
             
         }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }


  export default Car;