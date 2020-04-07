import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => (
  <nav className="column is-2 menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <NavLink to="/games" activeClassName="active-link">
        Games
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
    </ul>
    {props.children}
  </nav>
);

export default NavBar;
