import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { Route } from 'react-router-dom'

import Navbar from './navbar'
import Home from './Home'
import Aboutus from './aboutus'
import services from './services'

class App extends Component {
  render() {
    return (
    
     <div className="App">
      <Navbar/>
        <Route
          exact path="/"
          component={Home} />
        <Route
          exact path="/aboutus"
          component={Aboutus} />
        <Route
          exact path="/services"
          component={services} />
      </div>
      
  
    );
  }
}

export default App;
