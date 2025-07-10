import React, { Suspense, lazy } from 'react';
import './App.css';
import './Mobile.css';
import './i18n';
import PageHome from './PageHome';
import LanguageSwitcher from './LanguageSwitcher';
import PirateChatbot from './components/PirateChatbot';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';

const PageBoats = lazy(() => import('./PageBoats'));
const PageCatamaran = lazy(() => import('./PageCatamaran'));
const PageLagoon40 = lazy(() => import('./PageLagoon40'));
const PagePrijzen = lazy(() => import('./PagePrijzen'));
const PageWeather = lazy(() => import('./PageWeather'));
const PageContact = lazy(() => import('./PageContact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  // Wrapper component to inject navigation into PageHome
  function HomeWrapper() {
    const navigate = useNavigate();
    const handleBookNow = (page) => navigate(`/${page}`);
    return <PageHome onBookNow={handleBookNow} />;
  }
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? 'auto' : 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="site-bg">
        <header className={`navbar`}>
          <div className="navbar-logo">
            <Link to="/" style={{display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none'}} onClick={closeMobileMenu}>
              <img
                src={process.env.PUBLIC_URL + '/logocnWhite.png'}
                alt={t('header.logoAlt')}
                style={{height: '60px', width: '60px', marginRight: '0.7rem'}}
                width={60}
                height={60}
                loading="eager"
              />
              <span style={{fontWeight: 700, fontSize: '1.5rem', letterSpacing: '0.04em', color: 'var(--white)'}}>{t('header.brand')}</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="navbar-menu">
            <Link to="/" className={({ isActive }) => isActive ? 'active' : ''}>{t('header.nav.home')}</Link>
            <Link to="/boats" className={({ isActive }) => isActive ? 'active' : ''}>{t('header.nav.boats')}</Link>
            <Link to="/prijzen" className={({ isActive }) => isActive ? 'active' : ''}>{t('header.nav.pricing')}</Link>
            <Link to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>{t('header.nav.contact')}</Link>
          </nav>
          
          {/* Weather Button & Language Switcher */}
          <div className="navbar-right">
            <Link to="/weather" className="weather-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3z"/>
              </svg>
              {t('header.nav.weather')}
            </Link>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Hamburger Button */}
          <button 
            className={`mobile-hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </header>
        
        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <button className="mobile-close-btn" onClick={closeMobileMenu} aria-label="Sluit menu">
              <span>×</span>
            </button>
            <Link to="/" onClick={closeMobileMenu}>{t('header.nav.home')}</Link>
            <Link to="/boats" onClick={closeMobileMenu}>{t('header.nav.boats')}</Link>
            <Link to="/prijzen" onClick={closeMobileMenu}>{t('header.nav.pricing')}</Link>
            <Link to="/contact" onClick={closeMobileMenu}>{t('header.nav.contact')}</Link>
            <div className="mobile-lang-section">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
        <main>
          <Suspense fallback={<div className="loader"><div className="loader-spinner" /></div>}>
            <Routes>
              <Route path="/" element={<HomeWrapper />} />
              <Route path="/boats" element={<PageBoats />} />
              <Route path="/catamaran" element={<PageCatamaran />} />
              <Route path="/lagoon40" element={<PageLagoon40 />} />
              <Route path="/prijzen" element={<PagePrijzen />} />
              <Route path="/weather" element={<PageWeather />} />
              <Route path="/contact" element={<PageContact />} />
              <Route path="*" element={<PageHome />} />
            </Routes>
          </Suspense>
          <div id="bo_widget"></div>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-column">
              <h3 className="footer-title">{t('footer.brandTitle')}</h3>
              <p>{t('footer.brandDesc')}</p>
              <div className="footer-social">
                <a href="https://www.facebook.com/catamarancharterholland/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/catamarancharterholland" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">{t('footer.catamaranTitle')}</h3>
              <ul className="footer-links">
                <li><Link to="/catamaran">{t('footer.catamaran.bali')}</Link></li>
                <li><Link to="/lagoon40">{t('footer.catamaran.lagoon')}</Link></li>
                <li><Link to="/prijzen">{t('footer.catamaran.pricing')}</Link></li>
                <li><Link to="/contact">{t('footer.catamaran.availability')}</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-title">{t('footer.areaTitle')}</h3>
              <ul className="footer-links">
                <li>{t('footer.area.ijsselmeer')}</li>
                <li>{t('footer.area.markermeer')}</li>
                <li>{t('footer.area.enkhuizen')}</li>
                <li>{t('footer.area.hoorn')}</li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Catamarancharterholland. {t('footer.copyright')}
          </div>
        </footer>
        
        {/* Pirate Chatbot - appears on all pages */}
        <PirateChatbot />
      </div>
    </Router>
  );
}
