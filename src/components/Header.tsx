import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Top</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/column">column</Link>
      </li>
      <li>
        <Link to="/contact">contact</Link>
      </li>
      <li>
        <Link to="/mypage">mypage</Link>
      </li>
    </ul>
  </header>
);
