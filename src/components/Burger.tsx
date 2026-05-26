import React, { useEffect, useRef, useState } from 'react';
import './Burger.css';

interface MenuItem {
  name: string;
  description: string;
  note: string;
  tag?: string;
  image: string;
}

const menu: MenuItem[] = [
  {
    name: 'The Classic Stack',
    description: 'Two 4oz smash patties, American cheese, caramelised onions, fresh lettuce, ripe tomato, and the legendary special sauce — all on a soft potato bun.',
    note: 'The one that started it all.',
    tag: 'Signature',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80',
  },
  {
    name: 'The Green Vibes',
    description: 'Single smash, smashed avocado, pickled jalapeño, herb aioli, fresh tomato, cos lettuce.',
    note: 'Chill but still hits hard.',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&auto=format&fit=crop&q=80',
  },
  {
    name: 'The Smoke Ring',
    description: 'Smoked brisket & smash blend, chipotle BBQ, crispy shallots, coleslaw, smoky cheddar.',
    note: 'Low and slow energy, high and fast flavour.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=80',
  },
  {
    name: 'The Caramel Crown',
    description: 'Double smash, caramelised onions, aged gruyère, Dijon mustard, truffle mayo, rocket.',
    note: 'Slow-cooked patience, fast satisfaction.',
    tag: 'Chef\'s Pick',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&auto=format&fit=crop&q=80',
  },
];

const BurgerCard: React.FC<{ item: MenuItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`burger-card ${visible ? 'burger-card--visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {item.tag && <span className="burger-card__tag">{item.tag}</span>}
      <div className="burger-card__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="burger-card__number">0{index + 1}</div>
      <h3 className="burger-card__name">{item.name}</h3>
      <p className="burger-card__desc">{item.description}</p>
      <p className="burger-card__note">
        <em>"{item.note}"</em>
      </p>
      <div className="burger-card__line" />
    </div>
  );
};

const Burger: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.3 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="burger" id="burger">
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
        className={`burger__header ${titleVisible ? 'burger__header--visible' : ''}`}
        ref={titleRef}
      >
        <p className="burger__label">The Menu</p>
        <h2 className="burger__title">
          Every Stack, a
          <br />
          <em>small masterpiece.</em>
        </h2>
        <p className="burger__subtitle">
          Available for private events, pop-ups & bookings.
          <br />
          All patties freshly ground, pressed and smashed to order.
        </p>
      </div>

      <div className="burger__grid">
        {menu.map((item, i) => (
          <BurgerCard key={item.name} item={item} index={i} />
        ))}
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