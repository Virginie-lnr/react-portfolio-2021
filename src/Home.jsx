import React from 'react'
import {Link} from 'react-router-dom'
import arrow from "./images/arrow-right.svg";
import computer from "./images/home-picture.png";
import "./home.css"
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Home() {
  return (
    <div>
      <div className="container">
        <div className="main-content-wrapper">
          <div className="col-left">
            <p>Hi ! My name is <span class="underline--magical">Virginie</span></p>
            <h1>Web developer <br /> & UI/UX designer </h1>
            <Link to="my-work" className="btn-main">
              See my work
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
              <FontAwesomeIcon icon={faLinkedinIn} class="iconLinkedin" />
            </ExternalLink>
            <ExternalLink href="https://github.com/Virginie-lnr">
              <FontAwesomeIcon icon={faGithubAlt} class="iconGithub" />
            </ExternalLink>
            <ExternalLink href="https://www.behance.net/virginielenoir">
              <FontAwesomeIcon icon={faBehance} class="iconBehance" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;