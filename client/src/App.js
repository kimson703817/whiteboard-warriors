import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/WarriorNav';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Route exact path="/" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>;
