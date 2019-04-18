import React, { Component, Fragment } from 'react';
import headerimg from '../assets/top.jpg';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <img src = {headerimg} alt = 'header' style = {{width: '85%'}}/>
      </Fragment>
    );
  }
}

export default Header;
