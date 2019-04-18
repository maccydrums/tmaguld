import React, { Component } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


class Nav extends Component {
  render() {
    return (
      <div className = 'nav'>
      <Route>
        <NavLink to = '/' activeClassName="my-class">Hem</NavLink>
        <NavDropdown title="Våra smycken" id="nav-dropdown" style={{marginTop: '-8px'}}>
        <NavDropdown.Item eventKey="4.1">Förlovnings- och vigselringar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Fantasiringar och solitärer</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Collier, kedjor och örhängen</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Smycken designade av Carl Fabergé</NavDropdown.Item>
        </NavDropdown>
        <NavLink to = '/about' activeClassName="my-class" style={{marginRight: '30px'}}>Om oss</NavLink>
        <NavLink to = '/contact' activeClassName="my-class">Kontakt</NavLink>
      </Route>
      </div>
    );
  }
}

export default Nav;
