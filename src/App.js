import React, { Component } from 'react';
import './App.scss';
import Routes from './routes';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}