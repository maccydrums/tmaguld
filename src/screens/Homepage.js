import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainInfo from '../components/MainInfo';
import Nav from '../components/Nav';


class Homepage extends Component {
  render() {
    return (
      <div className = 'wrapper'>
        <Header/>
        <Nav/>
        <MainInfo/>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;
