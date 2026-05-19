import { useState } from 'react'
import logoImg from './assets/logo.jpg'
import foodFlyerImg from './assets/food-flyer.jpg'
import restaurantFlyerImg from './assets/restaurant-flyer.jpg'
import scentsFlyerImg from './assets/scents-flyer.jpg'
import './index.css'

const PORTFOLIO_ITEMS = [
  { id: 1,  category: 'flyers',      title: 'Food & Confectionary Flyer', desc: 'Vibrant food flyer for Amy\'s bite Cake & Confectionary showcasing their services, cakes, and contact details.', image: foodFlyerImg },
  { id: 2,  category: 'flyers',      title: 'Restaurant Food Service Flyer', desc: 'Bold restaurant flyer promoting delicious food service with pricing, free delivery offer, and contact details.', image: restaurantFlyerImg },
  { id: 3,  category: 'flyers',      title: 'Jessy Scents Promo Flyer',      desc: 'Elegant product flyer for Jessy Scents & More showcasing premium perfumes, home decor, and fashion pieces.',  image: scentsFlyerImg },
  { id: 4,  category: 'cards',       title: 'Executive Business Card',   desc: 'Sleek minimalist card with gold foil accents for a premium corporate first impression.',             gradient: 'linear-gradient(135deg,#2d2d2d 0%,#D4AF37 100%)' },
  { id: 5,  category: 'cards',       title: 'Creative Studio Card',      desc: 'Bold business card for a photography studio with gradient overlay and clean type hierarchy.',        gradient: 'linear-gradient(135deg,#1a1a2e 0%,#f5a623 100%)' },
  { id: 6,  category: 'invitations', title: 'Luxury Wedding Invitation', desc: 'Elegant wedding invite with floral motifs, gold lettering, and premium textured feel.',             gradient: 'linear-gradient(135deg,#f8e1e7 0%,#d4a5c9 100%)' },
  { id: 7,  category: 'invitations', title: 'Birthday Celebration',      desc: 'Vibrant birthday invitation with confetti graphics and a joyful festive colour palette.',           gradient: 'linear-gradient(135deg,#fce38a 0%,#f38181 100%)' },
  { id: 8,  category: 'branding',    title: 'Corporate Brand Identity',  desc: 'Full brand identity package — logo, colour palette, typography guide, and usage mockups.',          gradient: 'linear-gradient(135deg,#0f3460 0%,#16213e 100%)' },
  { id: 9,  category: 'branding',    title: 'Startup Brand Design',      desc: 'Modern identity for a tech startup with dynamic logo, icon set, and brand guidelines.',             gradient: 'linear-gradient(135deg,#e94560 0%,#533483 100%)' },
  { id: 10, category: 'letterhead',  title: 'Corporate Letterhead',      desc: 'Professional letterhead with polished header, footer, and clean official document formatting.',     gradient: 'linear-gradient(135deg,#f0f0f0 0%,#c8c8c8 100%)' },
  { id: 11, category: 'letterhead',  title: 'Executive Letterhead',      desc: 'Premium letterhead with embossed logo placement, gold accent lines, and formal executive layout.',  gradient: 'linear-gradient(135deg,#1a1a2e 0%,#D4AF37 100%)' },
  { id: 12, category: 'banners',     title: 'Social Media Banner',       desc: 'Scroll-stopping Facebook & Instagram banner with trend-driven aesthetics and clear messaging.',     gradient: 'linear-gradient(135deg,#4158d0 0%,#c850c0 100%)' },
  { id: 13, category: 'banners',     title: 'Pull-Up Event Banner',      desc: 'Large-format pull-up banner for trade shows with high-impact visuals and bold typography.',         gradient: 'linear-gradient(135deg,#0f9b58 0%,#00bf8f 100%)' },
  { id: 14, category: 'banners',     title: 'Digital Billboard',         desc: 'Wide-format digital billboard for outdoor advertising with strong CTA and striking imagery.',       gradient: 'linear-gradient(135deg,#f5a623 0%,#e94560 100%)' },
]

const CATEGORIES = [
  { key: 'all',         label: 'All Work'       },
  { key: 'flyers',      label: 'Flyers'         },
  { key: 'cards',       label: 'Business Cards' },
  { key: 'invitations', label: 'Invitations'    },
  { key: 'branding',    label: 'Branding'       },
  { key: 'letterhead',  label: 'Letterhead'     },
  { key: 'banners',     label: 'Banners'        },
]

const SERVICES = [
  { icon: '✦', title: 'Flyer Design',      desc: 'Promotional, event, and product flyers that demand attention and drive results.'         },
  { icon: '◈', title: 'Business Cards',    desc: 'First impressions that last — elegant cards for professionals and creatives.'            },
  { icon: '✉', title: 'Invitation Cards',  desc: 'Bespoke wedding, birthday, and event invitations crafted with a luxurious touch.'        },
  { icon: '❋', title: 'Brand Identity',    desc: 'Full brand packages: logo, colours, typography, and usage guidelines.'                  },
  { icon: '▦', title: 'Letterhead Design', desc: 'Official and professional letterheads that reinforce your corporate image.'             },
  { icon: '⬛', title: 'Banner Design',     desc: 'Social media, pull-up, and billboard banners that make your message heard.'             },
]

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [menuOpen, setMenuOpen]         = useState(false)

  const filtered = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => scrollTo('home')} role="button" tabIndex={0}>
          <img src={logoImg} alt="KIENGXZ GRAPHICS logo" className="nav-logo-img" />
          <span className="logo-text">KIENGXZ <em>GRAPHICS</em></span>
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {['home','about','services','portfolio','contact'].map(s => (
            <li key={s}>
              <button onClick={() => scrollTo(s)}>{s[0].toUpperCase() + s.slice(1)}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">Premium Creative Design Studio</p>
          <h1>KIENGXZ<br /><span>GRAPHICS</span></h1>
          <p className="hero-sub">
            We craft visual identities that speak before words. From flyers to full brand
            packages — your vision, our craft.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('portfolio')}>View Our Work</button>
            <button className="btn-outline"  onClick={() => scrollTo('contact')}>Get In Touch</button>
          </div>
        </div>
        <button className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">↓</button>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">Design That <span>Speaks</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                KIENGXZ GRAPHICS is a forward-thinking creative studio built on one principle:
                every brand deserves visuals that make an impact. We combine artistic precision
                with strategic thinking to deliver designs that don't just look good — they work.
              </p>
              <p>
                From startup founders to established corporations, we've helped clients across
                industries build identities that stand out. Our work spans flyers, branding,
                invitations, banners, and everything in between.
              </p>
            </div>
            <div className="about-stats">
              {[['500+','Projects Delivered'],['200+','Happy Clients'],['5+','Years Experience'],['98%','Client Satisfaction']].map(([n,l]) => (
                <div key={l} className="stat">
                  <span className="stat-num">{n}</span>
                  <span className="stat-label">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <p className="section-eyebrow">Our Work</p>
          <h2 className="section-title">Recent <span>Projects</span></h2>
          <div className="portfolio-filters">
            {CATEGORIES.map(c => (
              <button
                key={c.key}
                className={`filter-btn${activeFilter === c.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(c.key)}
              >{c.label}</button>
            ))}
          </div>
          <div className="portfolio-grid">
            {filtered.map(item => (
              <div key={item.id} className="portfolio-card">
                <div
                  className="portfolio-img"
                  style={item.image ? {} : { background: item.gradient }}
                >
                  {item.image && (
                    <img src={item.image} alt={item.title} className="portfolio-real-img" />
                  )}
                  <span className="portfolio-cat">
                    {CATEGORIES.find(c => c.key === item.category)?.label}
                  </span>
                </div>
                <div className="portfolio-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <p className="section-eyebrow">Reach Us</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-intro">
                Ready to start a project? Reach out via phone or email and let's bring your
                vision to life.
              </p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-label">Phone</div>
                    <a href="tel:07063153554">07063153554</a><br />
                    <a href="tel:08123470664">08123470664</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div>
                    <div className="contact-label">Email</div>
                    <a href="mailto:abramada3554@gmail.com">abramada3554@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={e => { e.preventDefault(); alert("Message sent! We'll be in touch soon.") }}
            >
              <input  type="text"  placeholder="Your Name"                   required />
              <input  type="email" placeholder="Your Email"                  required />
              <input  type="text"  placeholder="Subject"                     required />
              <textarea            placeholder="Tell us about your project…" rows={5} required />
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo-k">K</span>
              <span className="logo-text">KIENGXZ <em>GRAPHICS</em></span>
            </div>
            <p>Premium creative design studio delivering visual excellence across all media.</p>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} KIENGXZ GRAPHICS. All rights reserved.</p>
            <div className="footer-nav">
              {['home','about','services','portfolio','contact'].map(s => (
                <button key={s} onClick={() => scrollTo(s)}>{s[0].toUpperCase() + s.slice(1)}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
