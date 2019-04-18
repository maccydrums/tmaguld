import React, { Component, Fragment } from 'react';
import './App.css';
import Homepage from './screens/Homepage';
import About from './screens/About';
import Contact from './screens/Contact';
import Products from './screens/Products';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  Redirect = () => {
    return <Redirect to = '/'/>
  }

  render() {
    return (
      <Fragment>
      <Router>
      <Route exact path = '/' component = {Homepage} />
        <Route path = '/products' component={Products} />
        <Route path = '/about' component={About} />
        <Route path = '/contact' component={Contact} />
      </Router>
      </Fragment>
    );
  }
}

export default App;
