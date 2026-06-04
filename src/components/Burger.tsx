import React, { useEffect, useRef, useState } from 'react';
import './Burger.css';

const featured = {
  name: 'The Classic Stack',
  description: 'Two 4oz smash patties, American cheese, caramelised onions, fresh lettuce, ripe tomato, and the legendary special sauce — all on a soft potato bun.',
  note: 'The one that started it all.',
  tag: 'Signature',
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&auto=format&fit=crop&q=80',
};

const Burger: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const makeObserver = (
      ref: React.RefObject<HTMLElement | HTMLDivElement>,
      setter: (v: boolean) => void,
      threshold = 0.2
    ) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setter(true); },
        { threshold }
      );
      if (ref.current) obs.observe(ref.current);
      observers.push(obs);
    };

    makeObserver(headerRef as React.RefObject<HTMLDivElement>, setHeaderVisible, 0.3);
    makeObserver(cardRef as React.RefObject<HTMLDivElement>, setCardVisible, 0.15);

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section className="burger" id="burger" ref={sectionRef}>
      {/* Decorative wave top */}
      <div className="burger__wave-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill="var(--cream-dark)"
          />
        </svg>
      </div>

      <div
        className={`burger__header ${headerVisible ? 'burger__header--visible' : ''}`}
        ref={headerRef}
      >
        <p className="burger__label">The Signature</p>
        <h2 className="burger__title">
          One Stack.
          <br />
          <em>Perfected.</em>
        </h2>
        <p className="burger__subtitle">
          Available for private events, pop-ups &amp; bookings.
          <br />
          Freshly ground, pressed and smashed to order.
        </p>
      </div>

      {/* Featured single card */}
      <div
        ref={cardRef}
        className={`burger-featured ${cardVisible ? 'burger-featured--visible' : ''}`}
      >
        <div className="burger-featured__image-wrap">
          <img src={featured.image} alt={featured.name} className="burger-featured__image" />
          <div className="burger-featured__image-overlay" />
          <span className="burger-featured__tag">{featured.tag}</span>
        </div>

        <div className="burger-featured__body">
          <h3 className="burger-featured__name">{featured.name}</h3>
          <div className="burger-featured__divider" />
          <p className="burger-featured__desc">{featured.description}</p>
          <p className="burger-featured__note">
            <em>"{featured.note}"</em>
          </p>
        </div>
      </div>

      {/* Bottom botanical strip */}
      <div className="burger__botanicals">
        {Array.from({ length: 7 }).map((_, i) => (
          <svg
            key={i}
            className="burger__sprig"
            viewBox="0 0 40 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              animationDelay: `${i * -1.3}s`,
              animationDuration: `${8 + i}s`,
            }}
          >
            <line x1="20" y1="80" x2="20" y2="10" stroke="var(--green-sage)" strokeWidth="1" opacity="0.4" />
            <ellipse cx="20" cy="28" rx="14" ry="20" fill="var(--green-sage)" opacity="0.2" />
            <ellipse cx="8" cy="48" rx="10" ry="14" fill="var(--green-sage)" opacity="0.15" transform="rotate(-20 8 48)" />
            <ellipse cx="32" cy="55" rx="10" ry="14" fill="var(--green-sage)" opacity="0.15" transform="rotate(20 32 55)" />
          </svg>
        ))}
      </div>
    </section>
  );
};

export default Burger;