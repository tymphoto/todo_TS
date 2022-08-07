import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue darken-4 px1">
      <Link to="/" className="brand-logo">To-do list</Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">Список дел</Link></li>
        <li><Link to="/about">Информация</Link></li>
      </ul>
    </div>
  </nav>
);
