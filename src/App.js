import React, { Component } from 'react';
import Contact from './components/Contact/index'
import Navbar from './components/Navbar/index'
import Index from './components/Index';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render(){

    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Index}/>
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;
