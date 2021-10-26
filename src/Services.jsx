import React from 'react'
import Footer from './components/Footer/Footer'
import './services.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faSketch } from '@fortawesome/free-brands-svg-icons'
import bubbleIcon from "./images/bubble.png";
import iconFigma from "./images/figma.svg";
import iconPs from "./images/photoshop.png";
import { ExternalLink } from 'react-external-link';
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import servicesImg from "./images/services.svg"

function Services() {
  return (
    <div>
      <div className="container">
        <div className="main-content-wrapper--services">
          <div className="col-left">
            <h2>Web development <br />Web design <br />No Code</h2>
          </div>
          <div className="col-right">
            <img src={servicesImg} alt="Services image" className="servicesImg" />
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
        <div className="container-flex-column">
          <h2 className="underline--magical-yellow">Services</h2>
          <div className="my-services">
            <div className="webdev">
              <h3>Web development</h3>
              <div className="icons d-flex">
                <FontAwesomeIcon icon={faHtml5} class="iconHtml" />
                <FontAwesomeIcon icon={faCss3Alt} class="iconSize iconCss" />
                <FontAwesomeIcon icon={faJsSquare} class="iconJs" />
                <FontAwesomeIcon icon={faReact} class="iconReact" />
                <FontAwesomeIcon icon={faPhp} class="iconPhp" />
              </div>
              <p>Turn web designs prototypes into real websites - build responsive, ergonomic and interactive web applications</p>
            </div>
            <div className="design">
              <h3>UI/UX Design</h3>
              <div className="icons d-flex">
                <img src={iconFigma} alt="icon Figma" className="iconFigma"/>
                <FontAwesomeIcon icon={faSketch} class="iconSketch" />
                <img src={iconPs} alt="icon Photoshop" className="iconPs"/>
              </div>
              <p>Analyze the project - Create personas, user flow - Turn ideas into wireframes and prototypes - User testing -  Iterate process</p>
            </div>
            <div className="nocode">
              <h3>No Code</h3>
              <img src={bubbleIcon} alt="Bubble icon" className="iconBubble"/>
              <p>Learning how to develop web applications using Bubble</p>
            </div>
            <div className="whatido">
              <p className="dash-before-content uppercase-12px no-margin">what I do</p>
              <h3 className="underline--magical-purple">My Services</h3>
              <p>I am a web developer oriented Frontend development and UI/UX design. Coming from social sciences studies I like to analyse interactions between users and a product.</p><br />
              <p>I build showcase sites using Wordpress or React</p>
              <a href="/my-work" class="btn-filled btn-purple">My work</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;