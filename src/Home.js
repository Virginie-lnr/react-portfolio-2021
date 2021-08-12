import React from 'react'
import {Link} from 'react-router-dom'
import arrow from "./images/arrow-right.svg";
import computer from "./images/home-picture.png";
import behanceIcon from "./images/behance.png";
import linkedinIcon from "./images/linkedin.png";
import githubIcon from "./images/github.png";
import "./home.css"

function Home() {
  return (
    <div>
      <div className="main-content-wrapper">
        <div className="col-left">
          <p>Hi ! My name is Virginie</p>
          <h1>Web developer & UI/UX Designer </h1>
          <p>Currently based in Geneva, I am a french web developer with a preference for Frontend development and UI/UX Design.            </p>
          <Link to="my-work" className="btn-main">
            See my work
            <span><img src={arrow} alt="arrow"/></span>
          </Link>
        </div>
        <div className="col-right">
          <img src={computer} alt="home picture computer" id="home-picture"/>
        </div>
      </div>
      <div className="flex-items" id="footer-line"> 
        <hr className="separator-line" />
        <div className="flex-items">
          <img src={linkedinIcon} alt="icon linkedin" class="iconLinkedin"/>
          <img src={githubIcon} alt="icon linkedin" class="iconGithub"/>
          <img src={behanceIcon} alt="icon linkedin" class="iconBehance"/>
        </div>
      </div>
    </div>
  )
}

export default Home;