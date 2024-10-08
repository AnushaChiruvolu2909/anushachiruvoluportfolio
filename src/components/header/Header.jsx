import React, { useEffect, useState } from 'react';
import shapeOne from '../../assets/shape-1.png';
import { CiLinkedin   } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa"; 
import { BsSun, BsMoon } from 'react-icons/bs';
import { links } from '../../Data';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import './header.css';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());
  const [scrollNav, setScrollNav] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);

  return (
    <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
      <nav className='nav'>
        <Link to='/' onClick={scrollTop} className='nav__logo text-cs'>
          Anusha
        </Link>

        <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
          <div className='nav__data'>
            <ul className='nav__list'>
              {links.map(({ name, path }, index) => {
                return (
                  <li className='nav__item' key={index}>
                    <Link
                      className='nav__link text-cs'
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className='header__socials'>
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
          </div>

          <div className='section__deco header__deco deco__left'>
            <img src={shapeOne} alt='' className='shape' />
          </div>
        </div>

        <div className='nav__btns'>
          <div className='theme__toggler' onClick={toggleTheme}>
            {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className={`${
              showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'
            }`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
