import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok,
    faBlogger,
    faMedium,
    faPinterest
} from "@fortawesome/free-brands-svg-icons";

function Social() {
    return (
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/julie-yudowitch-041645208/"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/JulieYudowitch"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faGithub} size="2x" />
          </a>
          <a href="https://julieyudowitch.medium.com/"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faMedium} size="2x" />
          </a>
          <a href="https://julieyudowitch.blogspot.com/"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faBlogger} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@julieyudowitch?"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faTiktok} size="2x" />
          </a>
          <a href="https://www.pinterest.com/julieyudowitch/_saved/"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faPinterest} size="2x" />
          </a>
          <a href="https://www.facebook.com/Julieyudowitch"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/YudowitchJulie"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/julieyudowitch/"
          className="social-link" target='blank' rel="noopener noreferrer">
          <FontAwesomeIcon color='#1e1052' icon={faInstagram} size="2x" />
          </a>
        </div>
    )
}

export default Social;