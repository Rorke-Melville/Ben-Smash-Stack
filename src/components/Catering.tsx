import React, { useEffect, useRef, useState } from 'react';
import './Catering.css';

const services = [
  {
    icon: '🎉',
    title: 'Private Parties',
    desc: 'Birthdays, anniversaries, casual get-togethers. Ben brings the griddle to you — up to 80 guests.',
  },
  {
    icon: '💼',
    title: 'Corporate Events',
    desc: 'Team lunches, client events, office celebrations. Professional setup with zero fuss.',
  },
  {
    icon: '🌿',
    title: 'Garden Gatherings',
    desc: 'Weekend backyard vibes. Outdoor setup, mellow music, smash burgers under open sky.',
  },
  {
    icon: '💍',
    title: 'Weddings & Engagements',
    desc: 'Late-night burger bar, cocktail hour bites, or full reception catering. Unforgettable.',
  },
  {
    icon: '🎵',
    title: 'Events & Festivals',
    desc: 'Pop-up stalls, market days, live music events. High-volume, consistent quality.',
  },
  {
    icon: '🍺',
    title: 'Bar & Venue Nights',
    desc: 'Residencies and one-off nights. Pair with craft beer, natural wine, or whatever flows.',
  },
];

const Catering: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      className={`catering ${visible ? 'catering--visible' : ''}`}
      id="catering"
      ref={sectionRef}
    >
      {/* Top wave */}
      <div className="catering__wave-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,0 L0,0 Z" fill="var(--cream)" />
        </svg>
      </div>

      <div className="catering__inner">
        <div className="catering__header">
          <p className="catering__label">Private Catering</p>
          <h2 className="catering__title">
            Bring the Stack
            <br />
            <em>to your world.</em>
          </h2>
          <p className="catering__intro">
            Ben is available for private events across Aspen and beyond. Whether 
            it's an intimate dinner party or a 200-person festival, the smash stack 
            travels with its full quality intact.
          </p>
        </div>

        <div className="catering__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="catering-card"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="catering-card__icon">{s.icon}</span>
              <h3 className="catering-card__title">{s.title}</h3>
              <p className="catering-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="catering__cta-strip">
          <div className="catering__cta-text">
            <h3>Ready to chat?</h3>
            <p>Every event is bespoke. Let's build something together.</p>
          </div>
          <button
            className="catering__cta-btn"
            onClick={() => scrollTo('contact')}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="catering__wave-bottom">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="var(--cream)" />
        </svg>
      </div>
    </section>
  );
};

export default Catering;
