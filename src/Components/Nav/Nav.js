
import './Nav.css';
import React from 'react';
/* import {NavLink} from 'react-router-dom'; */

export function Nav() {
    return (
  <nav className="Nav">
        <button className="buttonLogin"> Metamask </button>
        <button className="buttonLogin"> About </button>
  </nav>
    );
  }

export default Nav;