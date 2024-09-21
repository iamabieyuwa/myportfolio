// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/navbar.css'; 

const Navbar = () => {
    
  return (
      <div className="navbar__container">
          <div className="header__right">
              <h3>Abieyuwa</h3>
          </div>

          <div className="header__left">
              <ul>
                  <li>
                  <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
                  </li>
                  <li>
                  <NavLink
            to="/about"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
                      </NavLink>
                      
          </li>
          <li>
                  <NavLink
            to="/skills"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Skills
          </NavLink>
                  </li>
                  <li>
                  <NavLink
            to="/projects"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Projects
          </NavLink>
                  </li>
                  <li>
                <NavLink
            to="/contact"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
          </li>
              </ul>
          </div>
    </div>
  )
};

export default Navbar;
