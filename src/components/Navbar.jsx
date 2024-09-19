import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">𝕱𝖔𝖔𝖉𝖎𝖊𝕳𝖚𝖇</Link> {/* Replace with your app's name */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>          
          <li><button to="/button" >Log in</button></li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
