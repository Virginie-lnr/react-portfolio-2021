import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import logo from '../../images/logovl40px.svg';

function Navbar() {
  return(
      <header>
          <nav>
            <div className="logo">
              <Link to ="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className="navigation-bar">
              <ul>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/services">services</Link></li>
                <li><Link to="/my-work">my work</Link></li>
                <li><Link to="/certifications">certifications</Link></li>
              </ul>
            </div>
            <span className="contact-btn"><Link to="/contact">get in touch</Link></span>
            {/* toggle bar */ }
            <div className="toggle-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
      </header>
  )
}

export default Navbar