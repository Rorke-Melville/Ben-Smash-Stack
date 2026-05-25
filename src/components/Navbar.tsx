import React, { useState, useEffect } from 'react';
import './Navbar.css';
import navbarLogo from './navbar-logo.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo" onClick={() => scrollTo('hero')}>
        <img
          src={navbarLogo}
          alt="Ben's Smash Stack burger character"
          className="navbar__logo-img"
        />
        <div className="navbar__logo-text">
          <span className="navbar__logo-script">Ben's</span>
          <span className="navbar__logo-serif">Smash Stack</span>
        </div>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {['story', 'burger', 'catering', 'contact'].map((id) => (
          <li key={id}>
            <button onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
        <li>
          <button className="navbar__cta" onClick={() => scrollTo('contact')}>
            Book an Event
          </button>
        </li>
      </ul>

      <button
        className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default Navbar;