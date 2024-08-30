import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/patrimoine">Patrimoine</Link></li>
        <li><Link to="/possession">Possessions</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
