import React from 'react';
import {Button} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <Button color="blue">Click me!</Button>
      <Button>Don't click me!</Button>
      <Button>Third button</Button>
    </div>
  );
}

export default App;
