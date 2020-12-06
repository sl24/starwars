import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div>Hello World</div>
    </div>
  );
};

export default App;
