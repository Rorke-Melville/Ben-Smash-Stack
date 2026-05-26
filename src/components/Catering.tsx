import React, { useEffect, useRef, useState } from 'react';
import './Catering.css';

const ServiceIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    private: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M22 14c2.21 0 4 1.79 4 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M10 14c-2.21 0-4 1.79-4 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    corporate: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="10" width="24" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M11 10V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 18h24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M13 18v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M19 18v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    garden: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28V14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M16 14c0-4-3-7-3-7s-1 5 3 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 18c0-4 3-6 3-6s1 4-3 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 28h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M4 28h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M26 28h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    wedding: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 26L6 16a6 6 0 0 1 8.485-8.485L16 9l1.515-1.485A6 6 0 0 1 26 16L16 26z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M20 8l1.5-2.5L23 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 5h-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    festival: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 26L12 8l4 8 4-5 8 15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4 28h24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    bar: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 6h12l-2 12H12L10 6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M8 6h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M14 18v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M18 18v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M11 28h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M18 12l2-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  };
  return <span className="catering-card__icon">{icons[type]}</span>;
};

const services = [
  {
    icon: 'private',
    title: 'Private Parties',
    desc: 'Birthdays, anniversaries, casual get-togethers. Ben brings the griddle to you — up to 80 guests.',
  },
  {
    icon: 'corporate',
    title: 'Corporate Events',
    desc: 'Team lunches, client events, office celebrations. Professional setup with zero fuss.',
  },
  {
    icon: 'garden',
    title: 'Garden Gatherings',
    desc: 'Weekend backyard vibes. Outdoor setup, mellow music, smash burgers under open sky.',
  },
  {
    icon: 'wedding',
    title: 'Weddings & Engagements',
    desc: 'Late-night burger bar, cocktail hour bites, or full reception catering. Unforgettable.',
  },
  {
    icon: 'festival',
    title: 'Events & Festivals',
    desc: 'Pop-up stalls, market days, live music events. High-volume, consistent quality.',
  },
  {
    icon: 'bar',
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
              <ServiceIcon type={s.icon} />
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
          <path d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,80 L0,80 Z" fill="var(--cream-dark)" />
        </svg>
      </div>
    </section>
  );
};

export default Catering;