import React from 'react'
import logo from '../../Assets/LinkedIn_icon.jpg';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={logo} alt="LinkedIn" />
        </div>
        <div className="header_search">
          <input type="text" placeholder="Search" />
        </div>
        <nav className="header_nav">
          <ul className="header_nav-list">
            <li className="header_nav-item">
              <Link to="/Home">Home</Link>
            </li>
            <li className="header_nav-item">
              <Link to="">My Network</Link>
            </li>
            <li className="header_nav-item">
              <Link to="/Jobs">Jobs</Link>
            </li>
            <li className="header_nav-item">
              <Link to="/">Messaging</Link>
            </li>
            <li className="header_nav-item">
              <Link to="/">Notifications</Link>
            </li>
            <li className="header_nav-item">
              <Link to="/Profile">Me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header