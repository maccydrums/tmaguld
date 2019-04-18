import React, { Component } from 'react';
import tma from '../assets/autograf.gif';
import egg from '../assets/f006c.gif'


class Footer extends Component {
  render() {
    return (
      <div className = 'footer'>
        <div className = 'section-one'>
          <h2>Välkommen in till vår butik och låt dig inspireras!</h2>
          <img src = {tma} alt = 'autograf' style = {{width: '70%'}}/>
          <br/>
          <p>Tomas Martinsson</p>
          <p style ={{marginTop: '-18px'}}>Guldsmed</p>
        </div>
        <div className = 'section-two'>
          <img src = {egg} alt = 'egg' style = {{width: '20%'}}/>
          <p>Originaldesign av <strong>Carl Fabergé</strong> -<br/>för vackra för att inte återskapas.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
