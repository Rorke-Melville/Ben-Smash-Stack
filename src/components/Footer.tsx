import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__script">Ben's</span>
          <span className="footer__wordmark">Smash Shack</span>
          <p className="footer__tagline">
            Handcrafted burgers &amp; private catering.<br />Aspen, Colorado
          </p>
        </div>

        <nav className="footer__nav">
          <p className="footer__nav-label">Navigate</p>
          {[
            { id: 'hero', label: 'Home' },
            { id: 'story', label: 'The Story' },
            { id: 'burger', label: 'The Menu' },
            { id: 'catering', label: 'Catering' },
            { id: 'contact', label: 'Contact' },
          ].map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="footer__contact">
          <p className="footer__nav-label">Reach out</p>
          <a href="mailto:ben@smashshack.com">ben@smashshack.com</a>
          <a href="tel:+6421000000">+64 21 000 000</a>
          <div className="footer__socials">
            {['Instagram', 'Facebook', 'TikTok'].map((s) => (
              <a key={s} href="#" className="footer__social">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Ben's Smash Shack. All rights reserved.</span>
        <span className="footer__vibe">Made with 🌿 and good vibes.</span>
      </div>
    </footer>
  );
};

export default Footer;
