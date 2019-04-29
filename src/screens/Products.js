import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ProductSlider from '../components/ProductSlider';

class Products extends Component {
  render() {
    return (
      <div className = 'wrapper'>
        <Header/>
        <Nav/>
        <ProductSlider/>
        <Footer/>
      </div>
    );
  }
}

export default Products;
