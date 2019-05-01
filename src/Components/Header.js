import React, { Component } from 'react';
import '../CSS/Header.css';
import Home from './Home';
import Layout from './Layout';

export default class Header extends React.Component {

  render() {

    return (
      <div class="header">
      <h1>
        Prototyping
      </h1>
      <div class="button-container">
        <button class="button" style={{cursor: 'pointer'}} onClick={() => this.props.changePage("home")}>Home</button>
        <button class="button" style={{cursor: 'pointer'}} onClick={() => this.props.changePage("concepts")}>Concepts</button>
        <button class="button" style={{cursor: 'pointer'}} onClick={() => this.props.changePage("history")}>History</button>
        <button class="button" style={{cursor: 'pointer'}} onClick={() => this.props.changePage("resources")}>Resources</button>
      </div>
      </div>
    );
  }
}
