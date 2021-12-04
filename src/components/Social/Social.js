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
        <div className='social'>
          <a href="https://www.linkedin.com/in/julie-yudowitch-041645208/"
          className="linkedIn" target='blank'>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/JulieYudowitch"
          className="github" target='blank'>
          <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://julieyudowitch.medium.com/"
          className="medium" target='blank'>
          <FontAwesomeIcon icon={faMedium} size="2x" />
          </a>
          <a href="https://julieyudowitch.blogspot.com/"
          className="blogger" target='blank'>
          <FontAwesomeIcon icon={faBlogger} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@julieyudowitch?"
          className="tiktok" target='blank'>
          <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="https://www.pinterest.com/julieyudowitch/_saved/"
          className="pinterest" target='blank'>
          <FontAwesomeIcon icon={faPinterest} size="2x" />
          </a>
          <a href="https://www.facebook.com/Julieyudowitch"
          className="facebook" target='blank'>
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com/YudowitchJulie"
          className="twitter" target='blank'>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com/julieyudowitch/"
          className="instagram" target='blank'>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
    )
}

export default Social;