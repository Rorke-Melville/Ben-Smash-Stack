import React, { useEffect, useRef, useState } from 'react';
import './Story.css';

const Story: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`story ${visible ? 'story--visible' : ''}`} id="story" ref={sectionRef}>
      <div className="story__container">
        {/* Left: decorative visual */}
        <div className="story__visual">
          <div className="story__visual-frame">
            <div className="story__visual-inner">
              <div className="story__badge">
                <span className="story__badge-script">Pure</span>
                <span className="story__badge-serif">Craft</span>
              </div>
              {/* Illustrated burger layers */}
              <svg className="story__burger-art" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
                {/* Bun top */}
                <ellipse cx="150" cy="60" rx="110" ry="45" fill="var(--brown-light)" opacity="0.85" />
                <ellipse cx="150" cy="55" rx="105" ry="40" fill="var(--brown-muted)" opacity="0.6" />
                {/* Sesame seeds */}
                <ellipse cx="130" cy="42" rx="6" ry="3.5" fill="var(--cream)" opacity="0.7" transform="rotate(-20 130 42)" />
                <ellipse cx="160" cy="36" rx="6" ry="3.5" fill="var(--cream)" opacity="0.7" transform="rotate(10 160 36)" />
                <ellipse cx="175" cy="50" rx="5" ry="3" fill="var(--cream)" opacity="0.7" transform="rotate(-15 175 50)" />
                <ellipse cx="120" cy="55" rx="5" ry="3" fill="var(--cream)" opacity="0.6" transform="rotate(25 120 55)" />
                {/* Lettuce */}
                <path d="M30 105 Q80 88 150 95 Q220 88 270 105 Q240 125 150 118 Q60 125 30 105Z" fill="var(--green-mellow)" opacity="0.7" />
                <path d="M25 108 Q75 98 150 104 Q225 98 275 108" stroke="var(--green-mellow)" strokeWidth="3" fill="none" opacity="0.4" />
                {/* Cheese */}
                <path d="M40 118 L260 118 L270 140 L30 140Z" fill="#D4A843" opacity="0.75" />
                {/* Patty */}
                <rect x="35" y="140" width="230" height="42" rx="8" fill="var(--brown-dark)" opacity="0.82" />
                <rect x="40" y="145" width="220" height="32" rx="6" fill="var(--brown)" opacity="0.5" />
                {/* Caramelised onion squiggle */}
                <path d="M55 182 Q80 175 105 182 Q130 189 155 182 Q180 175 205 182 Q230 189 255 182" stroke="var(--brown-light)" strokeWidth="4" fill="none" opacity="0.6" />
                {/* Sauce drip */}
                <path d="M90 118 Q85 130 88 145" stroke="#C0392B" strokeWidth="3" fill="none" opacity="0.5" />
                <path d="M200 118 Q205 133 202 148" stroke="#C0392B" strokeWidth="2.5" fill="none" opacity="0.4" />
                {/* Bun bottom */}
                <ellipse cx="150" cy="215" rx="120" ry="28" fill="var(--brown-muted)" opacity="0.7" />
                <ellipse cx="150" cy="210" rx="118" ry="24" fill="var(--brown-light)" opacity="0.5" />
              </svg>
            </div>
          </div>
          {/* Floating accent text */}
          <div className="story__accent story__accent--tl">
            <span>Smashed</span>
            <span>to order</span>
          </div>
          <div className="story__accent story__accent--br">
            <span>100%</span>
            <span>Wagyu Blend</span>
          </div>
        </div>

        {/* Right: copy */}
        <div className="story__copy">
          <p className="story__label">The Story</p>
          <h2 className="story__heading">
            Born from a<br />
            <em>slow afternoon</em><br />
            and a hot griddle.
          </h2>
          <div className="story__divider" />
          <p className="story__body">
            Ben didn't set out to become Aspen's most sought-after smash burger chef. 
            It started the way the best things always do — a lazy Sunday, good music, 
            and an obsession with getting something simple absolutely perfect.
          </p>
          <p className="story__body">
            Two years of experimenting with beef blends, butter ratios, and bun 
            brioche recipes later, the Smash Stack was born. Every burger is a 
            hand-pressed, single-smash patty on a toasted brioche bun — crispy edges, 
            juicy heart, layered with house-made sauces that have no business being 
            that good.
          </p>
          <p className="story__body story__body--em">
            "I just want people to close their eyes on the first bite."
          </p>

          <div className="story__stats">
            {[
              { num: '100%', label: 'Fresh daily grind' },
              { num: '2+', label: 'Years perfecting the stack' },
              { num: '∞', label: 'Napkins required' },
            ].map(({ num, label }) => (
              <div className="story__stat" key={label}>
                <span className="story__stat-num">{num}</span>
                <span className="story__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
