import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Aditya Tamhane</h2>
        <p><a href="mailto:adityatamhane12@gmail.com">adityatamhane12 AT gmail DOT com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aditya, a graduate of <a href="http://www.unipune.ac.in/">SPPU</a> and an alumnus of PCET.
        I earned my BE Degree from <a href="https://www.nmiet.edu.in/">NMIET</a> college in IT field. Previously,
        I worked at {' '}<a href="https://www.hitachivantara.com/en-us/home.html">Hitachi Vantara</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aditya Tamhane <Link to="/">aditam.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
