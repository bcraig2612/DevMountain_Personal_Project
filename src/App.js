import React, { Component } from 'react';
import './App.css';
import Routes from './routes';
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    let backgroundStyle = {
      width: '100 vw',
      height: '100h',
      background: '/576399.jpg'
    };
    return (
      <div className='background' style={backgroundStyle}>
        <div className="App" style={backgroundStyle}>
          <Navbar />
          {Routes}
        </div>
      </div>
    );
  }
}