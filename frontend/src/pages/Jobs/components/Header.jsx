import React from 'react'
import logo from '../../Assets/LinkedIn_icon.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <img src={logo} alt="LinkedIn" />
        </div>
        <div className="header_search">
          <input type="text" placeholder="Search by title, skill, or company" />
        </div>
        <nav className="header_nav">
          <ul className="header_nav-list">
            <li className="header_nav-item">
              <a href="#">Home</a>
            </li>
            <li className="header_nav-item">
              <a href="#">My Network</a>
            </li>
            <li className="header_nav-item">
              <a href="#">Jobs</a>
            </li>
            <li className="header_nav-item">
              <a href="#">Messaging</a>
            </li>
            <li className="header_nav-item">
              <a href="#">Notifications</a>
            </li>
            <li className="header_nav-item">
              <a href="#">Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header