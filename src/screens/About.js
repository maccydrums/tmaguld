import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

class About extends Component {
  render() {
    return (
      <div className = 'wrapper'>
        <Header/>
        <Nav/>
        <h1 style = {{marginBottom: '50px'}}>About</h1>
        <Footer/>
      </div>
    );
  }
}

export default About;
