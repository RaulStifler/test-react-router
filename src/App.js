import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home';
import Catalogo from './components/products/Catalogo';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/catalogo" component={Catalogo}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>          
        </Router>
      </div>
    );
  }
}

export default App;
