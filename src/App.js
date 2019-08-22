import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {

    return (
      <div className="App">
        <Navbar />
        {Routes}
      </div>
    );
  }
}