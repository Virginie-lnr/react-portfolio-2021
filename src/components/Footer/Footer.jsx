import './footer.css'
import React from 'react'
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="flex-items-footer">
          <p>Copyright 2021. Website created by Virginie Lenoir 🐨 </p>
          <div className="social-icons-footer">
            <ExternalLink href="https://www.linkedin.com/in/virginie-lenoir/">
              <FontAwesomeIcon icon={faLinkedinIn} class="iconLinkedin-footer iconLinkedin-hover icon-footer" />
            </ExternalLink>
            <ExternalLink href="https://github.com/Virginie-lnr">
              <FontAwesomeIcon icon={faGithubAlt} class="iconGithub-footer iconGithub-hover icon-footer" />
            </ExternalLink>
            <ExternalLink href="https://www.behance.net/virginielenoir">
              <FontAwesomeIcon icon={faBehance} class="iconBehance-footer iconBehance-hover icon-footer" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

