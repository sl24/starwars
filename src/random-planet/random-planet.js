import React, { Component } from 'react';
import s from './random-planet.css';

class RandomPlanet extends Component {
  render() {
    return (
      <div className="random-planet">
        <img className="planet-image" />
        <div>
          <h3>Planet Name</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="term"> Rotation period</span>
              <span> 18726874</span>
            </li>

            <li className="list-group-item">
              <span className="term"> Diametr</span>
              <span> 18726874</span>
            </li>

            <li className="list-group-item">
              <span className="term"> Population</span>
              <span> 100</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
