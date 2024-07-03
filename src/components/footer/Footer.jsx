import React from 'react';
import { CiLinkedin   } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa"; import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container grid'>
        <div className='footer__socials'>
        <a
              href='https://www.linkedin.com/in/anusha-chiruvolu'
              target='_blank'
              className='home__social-link'
            >
              <CiLinkedin/>
            </a>

            <a
              href='https://github.com/AnushaChiruvolu2909'
              target='_blank'
              className='home__social-link'
            >
              <FaGithub  />
            </a>
        </div>

        <p className='footer__copyright text-cs'>
          &copy;  All Rights Reserved
        </p>

        <p className='footer__copyright text-cs'>
          Developed By <span>Anusha Chiruvolu</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
