import React, { Component } from 'react';
import Home from './../Home/index'
import Work from './../Work/index'
import Portfolio from './../Potfolio/index'
import Profile from './../Profile/index'
import About from './../About/index'
import Social from './../SocialMedia/index'
import Footer  from './../Footer/index'
class Index extends Component {
  render(){

    return (
      <div className="App">
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <Social/>
        <Footer/>
      </div>
    );
  }
}

export default Index;
