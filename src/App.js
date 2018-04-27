import React, { Component } from 'react';
import './App.css';
import Home from './Views/Home'
import DB from './data'

DB.init();
window.DB = DB;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
