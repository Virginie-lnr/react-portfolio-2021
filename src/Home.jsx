import React from 'react'
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import {Link} from 'react-router-dom'
import arrow from "./images/arrow-right.svg";
import computer from "./images/home-picture.png";
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import "./home.css";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="main-content-wrapper mb-60">
          <div className="col-left">
            <p>Hi! My name is <span class="underline--magical">Virginie</span></p>
            <h1>Web developer <br /> & UI/UX designer </h1>
            <Link to="services" className="btn-main-green">
              Services
              <span id="icon-arrow"><img src={arrow} alt="arrow"/></span>
            </Link>
          </div>
          <div className="col-right">
            <img src={computer} alt="home picture computer" id="home-picture"/>
          </div>
        </div>
        <div className="flex-items" id="footer-line"> 
          <hr className="separator-line" />
          <div className="flex-items">
            <ExternalLink href="https://www.linkedin.com/in/virginie-lenoir/">
              <FontAwesomeIcon icon={faLinkedinIn} class="iconLinkedin-home iconLinkedin-hover" />
            </ExternalLink>
            <ExternalLink href="https://github.com/Virginie-lnr">
              <FontAwesomeIcon icon={faGithubAlt} class="iconGithub-home iconGithub-hover" />
            </ExternalLink>
            <ExternalLink href="https://www.behance.net/virginielenoir">
              <FontAwesomeIcon icon={faBehance} class="iconBehance-home iconBehance-hover" />
            </ExternalLink>
          </div>
        </div>
      </div>
      <About />
      <Footer />
    </div>
    
  )
}

export default Home;