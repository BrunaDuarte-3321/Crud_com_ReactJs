import './Logo.css';
import React from 'react';
import logo from '../assets/img/logo-cod3r.png';

export default (props) => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} />
    </a>
  </aside>
);
