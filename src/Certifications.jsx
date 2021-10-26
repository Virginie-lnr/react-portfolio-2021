import React from 'react'
import { Link } from "react-router-dom";
import MyCV from './images/Virginie_Lenoir_web_developer.pdf'
import Footer from "./components/Footer/Footer"
import './certifications.css'

function Certifications() {
  return (
    <div>
      <div className="container">
        <div className="main-content-wrapper mb-60">
          <div id="certifications">
            <h2>Certifications</h2>
            <div className="flex-items">
              <Link to={MyCV} target="_blank" download className="btn btn-green">Download CV</Link>
              <Link to="/my-work" className="btn btn-outline-green btn-contact">See my work</Link>
            </div>
            <div className="list-of-experiences">
              <div className="first-experience">
                <span className="xp-title magical-underline clr-yellow">
                  <h3><span className="xp-date">2020</span> Fullstack Development | Doranco Higher Schools of Creative Technologies</h3>
                  <p>Remote Paris | September 2020 - December 2020</p>
                </span>
                <ul className="xp-ul">
                  <li>Build dynamic websites in PHP/Symfony & MySQL</li>
                  <li>Build interactive and responsive websites</li>
                  <li>Write the specifications, prototype using Figma, mock-up integration </li>
                  <li>Initiation to Wordpress, Photoshop and SEO</li>                
                </ul>
              </div>

              <div className="first-experience">
                <span className="xp-title magical-underline clr-purple">
                  <h3><span className="xp-date">2020</span> Fullstack Development | The Hacking Project Bootcamp</h3>
                  <p>Remote Paris | March 2020 - June 2020</p>
                </span>
                <ul className="xp-ul">
                  <li>Front-end development with HTML5 / CSS3 / Bootstrap / Javascript / AJAX</li>
                  <li>Back-end development with object-oriented programming (Ruby on Rails)</li>
                  <li>Team work with Git and Github / Agile methods / Kanban using Trello</li>
                  <li>Web design (Atomic Design, Kit UI)</li>
                </ul>
              </div>

              <div className="first-experience">
                <span className="xp-title magical-underline clr-green">
                  <h3><span className="xp-date">2014</span> Bachelor's Degree in Project Developement & Social Intervention | UPEC Créteil</h3>
                  <p>Paris | 2014 - 2015</p>
                </span>
                <ul className="xp-ul">
                  <li>Identify and analyse individual and collective needs for different public</li>
                  <li>Design and coordinate projects that meet the needs of public</li>
                  <li>Understand the socio-economic context and its different actors</li>
                </ul>
              </div>

              <div className="first-experience">
                <span className="xp-title magical-underline clr-yellow">
                  <h3><span className="xp-date">2012</span> Higher National Diploma in Animation, Social and Sociocultural | IUT Paris Descartes</h3>
                  <p>Paris |  2012 -  2014</p>
                </span>
                <ul className="xp-ul">
                  <li>Social Sciences : Psychology, Sociology, Ethnology & Anthopology</li>
                  <li>In-depth analysis of context, publics and ressources</li>
                  <li>Implement projects to facilitate the socialization, expression and creativity of individuals</li>
                </ul>
              </div>

            </div>
            {/* end list of experiences  */}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Certifications;