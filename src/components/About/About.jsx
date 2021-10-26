import React from 'react'
import { Link } from "react-router-dom";
import MyCV from '../../images/Virginie_Lenoir_web_developer.pdf'
import tools from '../../images/tools-blob-white3.svg'
import smile from '../../images/smile-blob-white.svg'
import image from '../../images/image.svg'
import code from '../../images/code.svg'
import vl from "../../images/vl.png";
import './about.css'

const About = () => {
	return (
		<div id="about-me">
			<div className="container">
				<div className="main-content-wrapper">
					<div className="col-left">
						<h2>Creative, <br />Passionate, <br />Team player</h2>
						<p>
							I am a Web developer & Designer also interested in nocode technologies.
							I enjoy to create ergonomic user interfaces and dynamic websites that inspire and provide great user experience.
						</p>
						<p>I am currently working as a Web developer at Raketech and have been recently working with those technologies : Wordpress, Laravel and React.</p>
					</div>
					<div className="col-right">
						<img src={vl} alt="virginie lenoir" id="vl-picture" />
						<div class="blob"></div>
					</div>
				</div>
				{/* <div className="flex-items" id="footer-line">
		<hr className="separator-line footer-line-light" />
	</div> */}
				<div id="experiences">
					<h2>My experiences</h2>
					<div className="flex-items">
						<Link to={MyCV} target="_blank" download className="btn btn-green">Download CV</Link>
						<Link to="/my-work" className="btn btn-outline-green btn-contact">See my work</Link>
					</div>
					<div className="list-of-experiences">
						<div className="first-experience">
							<span className="xp-title magical-underline clr-yellow">
								<h3><span className="xp-date">2021</span> Web developer & Integrator | Raketech</h3>
								<p>Remote | May 2021 - Present</p>
							</span>
							<ul className="xp-ul">
								<li>Participate to the rebuild of the website</li>
								<li>Integrate the new designs of the prototype</li>
								<li>Add Frontend and Backend features</li>
								<li>Identify the causes of reported issues and implement the respective fixes</li>
								<li>Coordinate in an Agile environment with Product Owner, UX/UI designers, developers and test engineers</li>
							</ul>
						</div>

						<div className="first-experience">
							<span className="xp-title magical-underline clr-purple">
								<h3><span className="xp-date">2021</span> Web developer | 12p5</h3>
								<p>Paris | January 2021 - March 2021</p>
							</span>
							<ul className="xp-ul">
								<li>Build Frontend pages and prototype using Figma</li>
								<li>Add new Backend functionalities in Ruby on Rails</li>
								<li>Improve UX Design and SEO</li>
							</ul>
						</div>

						<div className="first-experience">
							<span className="xp-title magical-underline clr-green">
								<h3><span className="xp-date">2019</span> Operations Specialist | REKKI</h3>
								<p>London | February 2019 - March 2020</p>
							</span>
							<ul className="xp-ul">
								<li>Management of the operations internal system </li>
								<li>Collaboration with Product Manager and developer to improve our system/ add new functionalities / report and fix minor bugs </li>
								<li>Test new version before the release and report to the Product Manager </li>
								<li>Management of the french operations and Quality Control</li>
							</ul>
						</div>
					</div>
					{/* end list of experiences  */}
				</div>
			</div>
			<div className="skills">
				<div className="container-skills">
					<h2 id="skills-title">my skills</h2>
					<div className="flex-items mt-30">
						<img src={code} alt="Code icon" className="skills-icon" />
						<h3 className="skills-item">development</h3>
					</div>
					<p className="skills-items">HTML, CSS, SASS, Bootstrap, React, PHP/Symfony, Wordpress & Laravel Bedrock</p>
					<p>Learning No-Code with Bubble</p>

					<div className="flex-items mt-30">
						{/* <p><FontAwesomeIcon icon={faTools} class="skills-icon" /></p> */}
						<img src={tools} alt="Tools icon" className="skills-icon" />
						<h3 className="skills-item">tools</h3>
					</div>
					<p className="skills-items">Visual Studio Code, versioning control with Git, Github/GitLab, Trello, Jira, Slack</p>

					<div className="flex-items mt-30">
						<img src={image} alt="Image icon" className="skills-icon" />
						<h3 className="skills-item">Design</h3>
					</div>
					<p className="skills-items">UX Design (Understand, Research, Analyze, Design, Iterate)</p>
					<p>UI Design (Prototyping with Figma, Sketch or Adobe XD)</p>
					<p>Photoshop</p>

					<div className="flex-items mt-30">
						<img src={smile} alt="Smile icon" className="skills-icon" />
						<h3 className="skills-item">Soft skills</h3>
					</div>
					<p className="skills-items">Communivative, attention to details, passionate, self-motivated, organised and curious</p>
				</div>
			</div>

			<div className="container my-story">
				<h2>Want to know more about my <span className="underline-magical--purple">story</span>?</h2>
				<p>I studied social sciences and project development during three years. After that I decided to travel the world to create my own human story. </p>
				<p>During that time I alternated work and travel and visited different countries: Australia, Vietnam, Thailand, Malaysia, Indonesia, Slovenia... </p>
				<p>When I got back from my travels, I wanted to keep improving my english so I went to London and worked in a tech start-up where I discovered a new environment and met many developers and designers along the way. </p>
				<p>That’s where I developed a new passion for technologies and started to learn by myself the basic of web development. </p>
				<p className="mb-50">If you want to learn more about me don’t hesitate to get in touch below :)</p>
				<span className="contact-btn"><Link to="/contact">get in touch</Link></span>
			</div>
		</div>
	)
}

export default About;