import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const leafRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      leafRefs.current.forEach((el, i) => {
        if (!el) return;
        const factor = (i + 1) * 4;
        el.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      {/* Background botanical elements */}
      <div className="hero__botanicals">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            ref={(el) => { leafRefs.current[i] = el; }}
            className={`hero__leaf hero__leaf--${i}`}
            viewBox="0 0 80 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 110 C40 110 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 110 40 110Z"
              fill="currentColor"
              opacity="0.18"
            />
            <line x1="40" y1="110" x2="40" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
            <line x1="40" y1="60" x2="20" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
            <line x1="40" y1="70" x2="60" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
            <line x1="40" y1="80" x2="18" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            <line x1="40" y1="85" x2="62" y2="70" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
          </svg>
        ))}
      </div>

      {/* Decorative rings */}
      <div className="hero__ring hero__ring--1" />
      <div className="hero__ring hero__ring--2" />

      <div className="hero__content">

        <div className="hero__title-block">
          <h1 className="hero__title">
            <span className="hero__title-script">Ben's</span>
            <span className="hero__title-main">Smash</span>
            <span className="hero__title-main hero__title-main--indent">Shack</span>
          </h1>
        </div>

        <p className="hero__tagline">
          Handcrafted smash burgers &amp; private event catering —<br />
          <em>made with love, served with soul.</em>
        </p>

        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={() => scrollTo('burger')}>
            Explore the Shack
          </button>
          <button className="hero__btn hero__btn--ghost" onClick={() => scrollTo('catering')}>
            Private Events
          </button>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="var(--cream-dark)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
