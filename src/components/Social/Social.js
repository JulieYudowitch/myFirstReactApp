import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok
} from "@fortawesome/free-brands-svg-icons";

function Social() {
    return (
        <div className='social'>
          <a href="https://www.linkedin.com/in/julie-yudowitch-041645208/"
          className="linkedIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/JulieYudowitch"
          className="github">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.facebook.com/Julieyudowitch"
          className="facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@julieyudowitch?"
          className="tiktok">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="https://twitter.com/YudowitchJulie"
          className="twitter">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/julieyudowitch/"
          className="instagram">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
    )
}

export default Social;