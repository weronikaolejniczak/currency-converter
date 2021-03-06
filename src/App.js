import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components';
import Calculator from './pages/Calculator/Calculator';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
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
        <Header pages={pages} />

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
