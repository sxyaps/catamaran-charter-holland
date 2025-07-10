import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// SVG Icons voor betere performance
const AnchorIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83V9h2a1 1 0 0 1 0 2h-2v7a7 7 0 0 1-7-7h2a5 5 0 0 0 5 5v-7H9a1 1 0 0 1 0-2h2V7.83A3.001 3.001 0 0 1 12 2z"/>
  </svg>
);

const IslandIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.42L12 10.41l3.71-3.7a1 1 0 0 0 0-1.42l-3-3zM8 12a4 4 0 0 1 8 0c0 4.42-4 10-4 10s-4-5.58-4-10z"/>
  </svg>
);

const StarIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const LockIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const FlashIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
  </svg>
);

const CameraIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5zM17.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const ShipIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78L20 10h-3V7c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3H4l-1.89 1.54c-.11.24-.13.52-.06.78L3.95 19z"/>
  </svg>
);

export default function PageCatamaran() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Optimized image loading - from public folder
  const heroImage = '/bali-photos/0E2A7009_B_RVB.webp';
  
  const galleryImages = [
    { src: '/bali-photos/0E2A7009_B_RVB.webp', alt: 'Bali Catsmart catamaran luxe huren IJsselmeer', title: 'Exterior View', subtitle: 'Stunning catamaran on the water' },
    { src: '/bali-photos/230322_Catsmart_Nav_054-New-1-scaled.webp', alt: 'Bali Catsmart navigatie', title: 'Navigation Area', subtitle: 'Professional navigation equipment' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_001-New-scaled.webp', alt: 'Bali Catsmart salon', title: 'Main Salon', subtitle: 'Spacious and comfortable interior' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_003-New-scaled.webp', alt: 'Bali Catsmart keuken', title: 'Galley', subtitle: 'Fully equipped kitchen' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_004-New-scaled.webp', alt: 'Bali Catsmart eethoek', title: 'Dining Area', subtitle: 'Perfect for group meals' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_007-New-scaled.webp', alt: 'Bali Catsmart slaapvertrek', title: 'Master Bedroom', subtitle: 'Comfortable sleeping quarters' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_009-New-scaled.webp', alt: 'Bali Catsmart badkamer', title: 'Bathroom', subtitle: 'Modern facilities' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_010-New-scaled.webp', alt: 'Bali Catsmart zithoek', title: 'Lounge Area', subtitle: 'Relaxing space' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_012-New-scaled.webp', alt: 'Bali Catsmart buitenruimte', title: 'Outdoor Space', subtitle: 'Enjoy the fresh air' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_013-New-scaled.webp', alt: 'Bali Catsmart lounge', title: 'Deck Lounge', subtitle: 'Perfect for sunbathing' },
    { src: '/bali-photos/230310_Catsmart_Interieur_HD_019-New-scaled.webp', alt: 'Bali Catsmart zithoek buiten', title: 'Outdoor Seating', subtitle: 'Al fresco dining' },
    { src: '/bali-photos/DSC_2614_C_RVB-scaled.webp', alt: 'Bali Catsmart op het water', title: 'Under Sail', subtitle: 'Experience pure sailing' },
    { src: '/bali-photos/WhatsApp Image 2025-05-22 at 10.57.11 AM.webp', alt: 'Bali Catsmart recente foto', title: 'Recent Photo', subtitle: 'Latest updates' },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // Booking widget initialization
  useEffect(() => {
    if (window.$ && typeof window.$.fn.ready === 'function') {
      window.$(document).ready(function() {
        if (window.makeBO2) {
          try {
            window.makeBO2('divBO');
          } catch (err) {
            const el = document.getElementById('divBO');
            if (el) el.innerHTML = '<div style="color:red;text-align:center;">Boekingswidget kon niet worden geladen. Probeer het later opnieuw.</div>';
          }
        }
      });
    } else {
      let initialized = false;
      let retries = 0;
      const maxRetries = 10;
      function tryInitWidget() {
        const el = document.getElementById('divBO');
        if (window.makeBO2 && el && el.offsetParent !== null) {
          if (!initialized) {
            try {
              window.makeBO2('divBO');
              initialized = true;
            } catch (err) {
              el.innerHTML = '<div style="color:red;text-align:center;">Boekingswidget kon niet worden geladen. Probeer het later opnieuw.</div>';
            }
          }
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(tryInitWidget, 700);
        } else if (el && !initialized) {
          el.innerHTML = '<div style="color:red;text-align:center;">Boekingswidget niet beschikbaar.</div>';
        }
      }
      tryInitWidget();
      return () => {
        const el = document.getElementById('divBO');
        if (el) el.innerHTML = '';
      };
    }
  }, []);

  // Translation data
  const specs = t('baliCatsmartPage.specs', { returnObjects: true });
  const onBoard = t('baliCatsmartPage.onBoard', { returnObjects: true });
  const features = t('baliCatsmartPage.features', { returnObjects: true });
  const destinations = t('baliCatsmartPage.destinations', { returnObjects: true });

  return (
    <main className="main-content">
      {/* PREMIUM HERO SECTION */}
      <section 
        className="catamaran-hero-section"
        style={{
          minHeight: '20vh',
          marginTop: '-80px',
          paddingTop: '120px'
        }}
      >
        <div className="catamaran-hero-content">
          <div className="catamaran-hero-text">
            <h1 className="catamaran-hero-title">{t('baliCatsmartPage.heroTitle')}</h1>
            <p className="catamaran-hero-subtitle">{t('baliCatsmartPage.heroSubtitle')}</p>
            
            <div className="catamaran-hero-features">
              <div className="catamaran-hero-feature">
                <AnchorIcon className="catamaran-hero-feature-icon" />
                <span>8 personen</span>
              </div>
              <div className="catamaran-hero-feature">
                <IslandIcon className="catamaran-hero-feature-icon" />
                <span>IJsselmeer</span>
              </div>
              <div className="catamaran-hero-feature">
                <StarIcon className="catamaran-hero-feature-icon" />
                <span>Luxe catamaran</span>
              </div>
            </div>

            <div className="catamaran-hero-cta">
              <a href="#booking" className="catamaran-btn-primary">
                <span>Direct boeken</span>
                <ArrowIcon />
              </a>
              <a href="#gallery" className="catamaran-btn-secondary">
                <span>Bekijk foto's</span>
                <CameraIcon />
              </a>
            </div>
          </div>
          
          <div className="catamaran-hero-visual">
            <img 
              src={heroImage} 
              alt="Bali Catsmart catamaran luxe huren" 
              className="catamaran-hero-image"
              loading="eager"
              width="600"
              height="400"
            />
            <div className="catamaran-floating-badge">
              Meest populair <StarIcon />
            </div>
            <div className="catamaran-stats-banner">
              <div className="catamaran-stat">
                <span className="catamaran-stat-number">500+</span>
                <span className="catamaran-stat-label">Happy guests</span>
              </div>
              <div className="catamaran-stat">
                <span className="catamaran-stat-number">4.9</span>
                <span className="catamaran-stat-label">Rating</span>
              </div>
              <div className="catamaran-stat">
                <span className="catamaran-stat-number">100%</span>
                <span className="catamaran-stat-label">Veilig</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO CONTENT */}
      <section className="section catamaran-section-block">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
          <p style={{fontSize: '1.2rem', lineHeight: 1.7}}>{t('baliCatsmartPage.introText1')}</p>
          <blockquote className="catamaran-highlight">
            "{t('baliCatsmartPage.quote')}"
          </blockquote>
          <p style={{fontSize: '1.1rem'}}>{t('baliCatsmartPage.introText2')}</p>
        </div>
      </section>

      {/* PREMIUM GALLERY */}
      <section id="gallery" className="catamaran-gallery-premium">
        <div className="container">
          <div className="catamaran-gallery-header">
            <h2 className="catamaran-gallery-title">{t('baliCatsmartPage.galleryTitle')}</h2>
            <p className="catamaran-gallery-subtitle">Ontdek elke hoek van deze prachtige catamaran</p>
          </div>
          
          <div className="catamaran-gallery-grid-premium">
            {galleryImages.slice(0, 5).map((img, idx) => (
              <div key={idx} className="catamaran-gallery-item-premium" onClick={() => openModal(idx)}>
                <img 
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <div className="catamaran-gallery-overlay-premium">
                  <div className="catamaran-gallery-overlay-title">{img.title}</div>
                  <div className="catamaran-gallery-overlay-subtitle">{img.subtitle}</div>
                </div>
              </div>
            ))}
            {galleryImages.length > 5 && (
              <div className="catamaran-gallery-item-premium catamaran-gallery-more" onClick={() => openModal(5)}>
                <span>+{galleryImages.length - 5} meer foto's</span>
              </div>
            )}
          </div>
        </div>

        {modalOpen && (
          <div className="gallery-modal" onClick={closeModal} style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.9)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button onClick={closeModal} style={{position: 'absolute', top: 30, right: 40, fontSize: '2rem', color: 'white', background: 'var(--blue-light)', border: 'none', borderRadius: '50%', width: 50, height: 50, boxShadow: 'var(--shadow-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}} aria-label="Sluiten">×</button>
            <button onClick={prevImage} style={{position: 'absolute', left: 40, top: '50%', fontSize: '2rem', color: 'white', background: 'rgba(21,91,119,0.8)', border: 'none', borderRadius: '50%', width: 50, height: 50, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}} aria-label="Vorige">‹</button>
            <div style={{textAlign: 'center'}}>
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt} 
                style={{maxWidth: '85vw', maxHeight: '75vh', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)'}}
                loading="lazy"
              />
              <div style={{marginTop: '1rem', color: 'white'}}>
                <div style={{fontSize: '1.2rem', fontWeight: 600}}>{galleryImages[currentImageIndex].title}</div>
                <div style={{fontSize: '1rem', opacity: 0.8}}>{galleryImages[currentImageIndex].subtitle}</div>
                <div style={{fontSize: '0.9rem', opacity: 0.6, marginTop: '0.5rem'}}>{currentImageIndex + 1} / {galleryImages.length}</div>
              </div>
            </div>
            <button onClick={nextImage} style={{position: 'absolute', right: 40, top: '50%', fontSize: '2rem', color: 'white', background: 'rgba(21,91,119,0.8)', border: 'none', borderRadius: '50%', width: 50, height: 50, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}} aria-label="Volgende">›</button>
          </div>
        )}
      </section>

      {/* PREMIUM BOOKING SECTION */}
      <section id="booking" className="catamaran-booking-section">
        <div className="container">
          <div className="catamaran-booking-header">
            <h2 className="catamaran-booking-title">Boek nu je onvergetelijke zeilervaring</h2>
            <div className="catamaran-trust-signals">
              <div className="catamaran-trust-signal">
                <LockIcon className="catamaran-trust-icon" />
                <span>100% veilig boeken</span>
              </div>
              <div className="catamaran-trust-signal">
                <CheckIcon className="catamaran-trust-icon" />
                <span>Gecertificeerde verhuurder</span>
              </div>
              <div className="catamaran-trust-signal">
                <FlashIcon className="catamaran-trust-icon" />
                <span>Directe bevestiging</span>
              </div>
            </div>
          </div>
          <div id="divBO" style={{minHeight: '400px', width: '100%', background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: '2rem', position: 'relative', zIndex: 2}}></div>
        </div>
      </section>

      {/* PREMIUM SPECS */}
      <section className="section">
        <div className="container">
          <h2 className="catamaran-gallery-title" style={{textAlign: 'center', marginBottom: '3rem'}}>{t('baliCatsmartPage.specsTitle')}</h2>
          <div className="catamaran-specs-premium">
            {Array.isArray(specs) && specs.map((item, idx) => {
              const IconComponent = [AnchorIcon, IslandIcon, StarIcon, LockIcon, CheckIcon, FlashIcon][idx] || StarIcon;
              return (
                <div key={idx} className="catamaran-spec-card">
                  <div className="catamaran-spec-icon">
                    <IconComponent />
                  </div>
                  <div className="catamaran-spec-title">{item.label}</div>
                  <div className="catamaran-spec-value">{item.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section catamaran-section-block">
        <h2 className="catamaran-title" style={{fontSize: '2rem', textAlign: 'center'}}>{t('baliCatsmartPage.featuresTitle')}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem'}}>
          <div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem'}}>{t('baliCatsmartPage.onBoardTitle')}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {Array.isArray(onBoard) && onBoard.map((item, idx) => (
                <li key={idx} style={{padding: '0.5rem 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <span style={{color: 'var(--gold)', fontSize: '1.2rem'}}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem'}}>Kenmerken</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {Array.isArray(features) && features.map((item, idx) => (
                <li key={idx} style={{padding: '0.5rem 0', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <span style={{color: 'var(--gold)', fontSize: '1.2rem'}}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section catamaran-section-block">
        <h2 className="catamaran-title" style={{fontSize: '2rem', textAlign: 'center'}}>{t('baliCatsmartPage.destinationsTitle')}</h2>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.1rem'}}>{t('baliCatsmartPage.destinationsText')}</p>
        <div className="catamaran-destinations-grid">
          {Array.isArray(destinations) && destinations.map((dest, idx) => (
            <div key={idx} className="destination-card" style={{padding: '2rem', transition: 'all var(--transition-normal)'}}>
              <div className="destination-info">
                <div className="destination-name" style={{fontSize: '1.4rem', marginBottom: '1rem'}}>{dest.name}</div>
                <p style={{lineHeight: 1.6, color: 'var(--off-white)'}}>{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE */}
      <section className="section catamaran-section-block" style={{textAlign: 'center'}}>
        <h2 className="catamaran-title" style={{fontSize: '2rem'}}>{t('baliCatsmartPage.serviceTitle')}</h2>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
          <p style={{fontSize: '1.1rem', lineHeight: 1.7}}>{t('baliCatsmartPage.serviceText1')}</p>
          <p style={{fontSize: '1.1rem', lineHeight: 1.7}}>{t('baliCatsmartPage.serviceText2')}</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="catamaran-booking-section" style={{marginTop: '4rem'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="catamaran-booking-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('baliCatsmartPage.ctaTitle')}</h2>
          <p style={{fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'var(--off-white)'}}>{t('baliCatsmartPage.ctaText')}</p>
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#booking" className="catamaran-btn-primary" style={{fontSize: '1.2rem', padding: '1.2rem 3rem'}}>
              <span>{t('baliCatsmartPage.ctaButton')}</span>
              <ShipIcon />
            </a>
            <a href="tel:+31612345678" className="catamaran-btn-secondary" style={{fontSize: '1.2rem', padding: '1.2rem 3rem'}}>
              <span>Bel direct</span>
              <PhoneIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}