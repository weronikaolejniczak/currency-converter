import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Menu} from './components';
import Calculator from './pages/Calculator';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  let pages = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'Contact', path: '/contact'}
  ];

  return (
    <div className="App">
      <Router>
        <Menu pages={pages} />

        <Switch>
          <Route path="/" exact>
            <Calculator />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
