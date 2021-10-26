import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import logo from '../../images/logovl40px.svg';

function Navbar() {
  return(
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link to ="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className="navigation-bar">
              <ul>
                <li><Link to="/" id="about">Home</Link></li>
                <li><Link to="/services" id="services">services</Link></li>
                <li><Link to="/my-work" id="work">my work</Link></li>
                <li><Link to="/certifications" id="certifications">certifications</Link></li>
              </ul>
            </div>
            <span className="contact-btn navbar-btn"><Link to="/contact">get in touch</Link></span>
            {/* toggle bar */ }
            <div className="toggle-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
          </div>
      </header>
  )
}

export default Navbar