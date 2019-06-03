import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import AboutMe from './AboutMe/about-me.js'
import ToDoList from './ToDoList/to-do-list.js'
import Animation from './Animation/animation.js'
import ParentChildComponent from './ParentChildCommunication/parent-child-communication.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {<Animation />}

        {<AboutMe />}

        {<ParentChildComponent />}

      </div>
    );
  }
}
