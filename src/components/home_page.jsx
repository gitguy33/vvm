import React from 'react';
import './home_page.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Homex = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Virata Vishwakarma Mission | Sacred Crafts of Kerala</title>
        <meta name="description" content="Join the Vishwakarma mission — empowering artisans, preserving sacred tools, and shaping the future through cosmic craftsmanship." />
        <meta name="keywords" content="Vishwakarma, Kerala artisans, temple craftsmanship, tool restoration, sacred forge, digital empowerment" />
        <meta name="author" content="Virata Vishwakarma Mission" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <header className="hero-section">
        <div className="salutation-banner">
          <h2>🙏 ॐ विश्वकर्मण्ये नमः</h2>
          <p>Welcome to the sacred forge of tradition, innovation, and cosmic craftsmanship.</p>
        </div>
        <img
          src="/assets/vishwakarma2.jpg"
          alt="Lord Vishwakarma"
          className="hero-image"
        />
        <p className="image-caption">Lord Vishwakarma — The Cosmic Artisan</p>

        <h1 className="hero-title">🔨 Virada Viswakarma Miss4</h1>
        <p className="hero-subtitle">From Forge to Future — We Shape the Sacred</p>
        <div className="hero-buttons">
          <Link to="/about" className="btn">Our Story</Link>
          {/*<Link to="/join" className="btn btn-secondary">Join the Mission</Link>*/}
        </div>
      </header>

      <section className="mission-section">
        <h2>🛠️ Our Mission</h2>
        <p>
          We are a community of creators, builders, and guardians of tradition. Rooted in the spirit of Vishwakarma—the divine architect—we empower artisans, preserve sacred crafts, and forge a future where every tool tells a story.
        </p>
      </section>

      <section className="projects-preview">
        <h2>🔥 Ongoing Projects</h2>
        <ul>
          <li>Tool Restoration Drives</li>
          <li>Skill Workshops for Youth</li>
          <li>Temple Craftsmanship & Community Builds</li>
          <li>Digital Empowerment for Artisans</li>
        </ul>
        <Link to="/location" className="btn">Explore Our Location</Link>
      </section>

      <footer className="footer">
        <p>© 2025 Virata Vishwakarma Mission | Crafted with purpose in Kerala</p>
      </footer>
    </div>
  );
};