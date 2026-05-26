import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    event: '',
    guests: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className={`contact ${visible ? 'contact--visible' : ''}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact__inner">
        {/* Left info */}
        <div className="contact__info">
          <p className="contact__label">Get in Touch</p>
          <h2 className="contact__title">
            Let's make your
            <br />
            <em>event legendary.</em>
          </h2>
          <p className="contact__body">
            Fill in the form and Ben will get back to you within 24 hours to 
            discuss your event, menu options, and pricing.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span className="contact__detail-value">Aspen, Colorado</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Availability</span>
              <span className="contact__detail-value">Weekends + select weekdays</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Min. Group</span>
              <span className="contact__detail-value">20 guests</span>
            </div>
          </div>

 
        </div>

        {/* Right form */}
        <div className="contact__form-wrapper">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">🌿</span>
              <h3>Nice one!</h3>
              <p>
                Ben got your message. Expect a reply within 24 hours.
                <br />
                <em>Good things take a little time.</em>
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="event">Event Type</label>
                  <select
                    id="event"
                    name="event"
                    value={form.event}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select type…</option>
                    <option>Private Party</option>
                    <option>Corporate Event</option>
                    <option>Wedding</option>
                    <option>Garden Gathering</option>
                    <option>Festival / Market</option>
                    <option>Bar / Venue Night</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="contact__field">
                  <label htmlFor="guests">Guest Count</label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    placeholder="e.g. 60"
                    value={form.guests}
                    onChange={handleChange}
                    min="20"
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Tell Ben about your event</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Date, location, vibe, any special requests…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="contact__submit">
                Send it through
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
