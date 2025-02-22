import React from 'react';
import profileImg from '../../assets/profileimagenew.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { Link } from 'react-scroll';

import { CiLinkedin   } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa";

import CV from '../../assets/Anusha Chiruvolu - Full Stack Developer.pdf';
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          <p className='home__subtitle text-cs'>
            Hello, <span>My Name Is </span>
          </p>

          <h1 className='home__title text-cs'>
            <span>Anusha</span> Ch
          </h1>

          <p className='home__job'>
            <span className='text-cs'>I Am</span> <b>Seasoned Fullstack Developer</b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img src={profileImg} alt='' className='home__profile' />
            </div>

            <p className='home__data home__data-one'>
              <span className='text-lg'>
                9 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Years of <span>Experience</span>
              </span>
            </p>

            <p className='home__data home__data-two'>
              <span className='text-lg'>9</span>

              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt='' className='shape shape__1' />
            <img src={shapeTwo} alt='' className='shape shape__2' />
            <img src={shapeTwo} alt='' className='shape shape__3' />
          </div>

          <p className='home__text'>
          Full Stack Developer with 9+ years of experience in front-end and back-end web and enterprise solutions
          </p>

          <div className='home__socials'>
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

          <div className='home__btns'>
            <a download='' href={CV} className='btn text-cs'>
              Download CV
            </a>

            
          </div>
        </div>

        <div className='section__deco deco__left'>
          <img src={shapeOne} alt='' className='shape' />
        </div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
