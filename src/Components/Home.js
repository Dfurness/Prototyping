import React, { Component } from 'react';
import '../CSS/Home.css';
import Image1 from "../Images/prototyping3";

class App extends Component {
  render() {
    return (
      <div>
      <h2>An Introduction to Prototyping</h2>
      <img src={Image1} class="center"/>
      </div>
    );
  }
}

export default App;
