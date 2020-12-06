import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <h3>
        <a href="#">DB Starwars project</a>
      </h3>
      <ul className="sub-header">
        <li>
          <a hfer="#">Planets</a>
        </li>
        <li>
          <a hfer="#">People</a>
        </li>
        <li>
          <a hfer="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
