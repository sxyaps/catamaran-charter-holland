import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Premium SVG Icons
const AnchorIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83V9h2a1 1 0 0 1 0 2h-2v7a7 7 0 0 1-7-7h2a5 5 0 0 0 5 5v-7H9a1 1 0 0 1 0-2h2V7.83A3.001 3.001 0 0 1 12 2z"/>
  </svg>
);

// IslandIcon not used in PageHome - removed to clean up ESLint warning

const StarIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

const ShipIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78L20 10h-3V7c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v3H4l-1.89 1.54c-.11.24-.13.52-.06.78L3.95 19z"/>
  </svg>
);

const CameraIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5zM17.5 9c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
  </svg>
);

export default function PageHome({ onBookNow }) {
  const { t } = useTranslation();
  
  // Hook to detect mobile screens for responsive background behavior
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <>
      {/* PREMIUM HERO SECTION - Full Width */}
      <section 
        className="catamaran-hero-section" 
        style={{
          minHeight: '100vh', // Full viewport height
          backgroundImage: `url('/bali-photos/DSC_2614_C_RVB-scaled.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'scroll', // Changed to scroll for better performance
          marginTop: '-80px', // Offset the main padding to go truly full-width
          paddingTop: '120px', // Add padding to account for header height
          willChange: 'auto' // Remove will-change to improve performance
        }}
      >
        <div className="catamaran-hero-content" style={{gridTemplateColumns: '1.2fr 1fr', textAlign: 'left', gap: '4rem', alignItems: 'center'}}>
          <div className="catamaran-hero-text">
            <h1 className="catamaran-hero-title" style={{fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textAlign: 'left'}}>
              {t('hero.title1')}<br/>
              <span style={{color: 'var(--gold)'}}>{t('hero.title2')}</span>
            </h1>
            <p className="catamaran-hero-subtitle" style={{maxWidth: '600px', margin: '0', fontSize: '1.3rem', textAlign: 'left'}}>{t('hero.subtitle')}</p>
            
            <div className="catamaran-hero-features" style={{justifyContent: 'flex-start', margin: '2rem 0'}}>
              <div className="catamaran-hero-feature">
                <ShipIcon className="catamaran-hero-feature-icon" />
                <span>{t('hero.features.premiumFleet')}</span>
              </div>
              <div className="catamaran-hero-feature">
                <AnchorIcon className="catamaran-hero-feature-icon" />
                <span>{t('hero.features.sailingAreas')}</span>
              </div>
              <div className="catamaran-hero-feature">
                <StarIcon className="catamaran-hero-feature-icon" />
                <span>{t('hero.features.luxuryCharters')}</span>
              </div>
            </div>

            <div className="catamaran-hero-cta">
              <button 
                onClick={() => window.open('/catamaran', '_self')} 
                className="catamaran-btn-primary"
                style={{fontSize: '1.3rem', padding: '1.3rem 3.5rem'}}
              >
                <span>{t('hero.bookNow')}</span>
                <ArrowIcon />
              </button>
              <button 
                onClick={() => onBookNow('boats')} 
                className="catamaran-btn-secondary"
                style={{fontSize: '1.3rem', padding: '1.3rem 3.5rem'}}
              >
                <span>{t('hero.discoverMore')}</span>
                <CameraIcon />
              </button>
            </div>
          </div>
          
          <div className="catamaran-hero-visual">
            {/* Stats banner positioned properly within hero section */}
            <div className="catamaran-stats-banner">
              <div className="catamaran-stat">
                <span className="catamaran-stat-number">2</span>
                <span className="catamaran-stat-label">Premium Catamarans</span>
              </div>
              <div className="catamaran-stat">
                <span className="catamaran-stat-number">800+</span>
                <span className="catamaran-stat-label">Happy guests</span>
              </div>
              <div className="catamaran-stat">
                <span className="catamaran-stat-number">4.9</span>
                <span className="catamaran-stat-label">Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with proper container */}
      <main className="main-content">
        {/* INTRODUCTION SECTION */}
        <section className="section catamaran-section-block">
        <div style={{textAlign: 'center', maxWidth: '900px', margin: '0 auto'}}>
          <h2 className="catamaran-title" style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>{t('intro.title')}</h2>
          <p className="catamaran-thuis" style={{fontSize: '1.3rem', marginBottom: '2rem'}}>{t('intro.subtitle')}</p>
          <p style={{fontSize: '1.1rem', lineHeight: 1.7, color: 'var(--off-white)'}}>{t('intro.text')}</p>
        </div>
      </section>

      {/* ABOUT THE CATAMARAN */}
      <section className="section">
        <div className="container" style={{paddingTop: '2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center'}}>
            <div>
              <h2 className="catamaran-title" style={{fontSize: '2.5rem', textAlign: 'left', marginBottom: '1.5rem'}}>{t('about.title')}</h2>
              <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--off-white)'}}>{t('about.text1')}</p>
              <p style={{fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', color: 'var(--off-white)'}}>{t('about.text2')}</p>
              <button 
                onClick={() => onBookNow('boats')} 
                className="catamaran-btn-primary"
                style={{fontSize: '1.2rem', padding: '1.2rem 2.5rem'}}
              >
                <span>{t('about.viewBoats')}</span>
                <ShipIcon />
              </button>
            </div>
            <div style={{position: 'relative', padding: '2rem 1rem 0 0'}}>
              <img 
                src="/bali-photos/230322_Catsmart_Nav_054-New-1-scaled.webp" 
                alt="Bali Catsmart catamaran premium charter" 
                style={{width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)'}}
                width="600"
                height="400"
                loading="eager"
              />
              <div className="catamaran-floating-badge">
                Premium <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="section catamaran-section-block">
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 className="catamaran-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('destinations.title')}</h2>
          <p style={{fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--blue-light)'}}>{t('destinations.subtitle')}</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          <div className="catamaran-spec-card" style={{overflow: 'hidden', padding: 0}}>
            <img 
              src="/vaargebied/jpg_gemeentehuizen-enkhuizen_51105.jpg" 
              alt="Enkhuizen destination" 
              style={{width: '100%', height: '250px', objectFit: 'cover'}}
              width="400" 
              height="250" 
              loading="lazy" 
            />
            <div style={{padding: '2rem'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('destinations.enkhuizen.name')}</h3>
              <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>{t('destinations.enkhuizen.desc')}</p>
            </div>
          </div>
          
          <div className="catamaran-spec-card" style={{overflow: 'hidden', padding: 0}}>
            <img 
              src="/vaargebied/hoorn-bezienswaardigheden-hoorn.jpg" 
              alt="Hoorn destination" 
              style={{width: '100%', height: '250px', objectFit: 'cover'}}
              width="400" 
              height="250" 
              loading="lazy" 
            />
            <div style={{padding: '2rem'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('destinations.hoorn.name')}</h3>
              <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>{t('destinations.hoorn.desc')}</p>
            </div>
          </div>
          
          <div className="catamaran-spec-card" style={{overflow: 'hidden', padding: 0}}>
            <img 
              src="/vaargebied/43A2DAE3-A71D-4C67-ADB2-4F98233DCC12-scaled.jpeg" 
              alt="Volendam destination" 
              style={{width: '100%', height: '250px', objectFit: 'cover'}}
              width="400" 
              height="250" 
              loading="lazy" 
            />
            <div style={{padding: '2rem'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('destinations.volendam.name')}</h3>
              <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>{t('destinations.volendam.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="section">
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="catamaran-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('testimonials.title')}</h2>
          <p style={{fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem auto', color: 'var(--blue-light)'}}>{t('testimonials.subtitle')}</p>
          
          <div className="catamaran-spec-card" style={{maxWidth: '800px', margin: '0 auto', padding: '3rem', textAlign: 'center', position: 'relative'}}>
            <div style={{fontSize: '4rem', color: 'var(--gold)', lineHeight: 1, marginBottom: '1rem'}}>"</div>
            <p style={{fontSize: '1.3rem', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '2rem', color: 'var(--white)'}}>{t('testimonials.testimonial1.text')}</p>
            <div>
              <div style={{color: 'var(--gold)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)'}}>{t('testimonials.testimonial1.author')}</div>
              <div style={{color: 'var(--blue-light)', fontSize: '1rem'}}>{t('testimonials.testimonial1.role')}</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem'}}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} style={{color: 'var(--gold)', fontSize: '1.5rem'}} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM GALLERY */}
      <section className="catamaran-gallery-premium">
        <div className="container">
          <div className="catamaran-gallery-header">
            <h2 className="catamaran-gallery-title">{t('gallery.title')}</h2>
            <p className="catamaran-gallery-subtitle">{t('gallery.subtitle')}</p>
          </div>
          
          <div className="catamaran-gallery-grid-premium">
            <div className="catamaran-gallery-item-premium">
              <img 
                src="/bali-photos/0E2A7009_B_RVB.webp" 
                alt="Bali Catsmart catamaran zeilen IJsselmeer" 
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="catamaran-gallery-overlay-premium">
                <div className="catamaran-gallery-overlay-title">{t('gallery.item1')}</div>
                <div className="catamaran-gallery-overlay-subtitle">Exterior sailing</div>
              </div>
            </div>
            
            <div className="catamaran-gallery-item-premium">
              <img 
                src="/bali-photos/230310_Catsmart_Interieur_HD_001-New-scaled.webp" 
                alt="Catamaran interieur luxe charter Nederland" 
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="catamaran-gallery-overlay-premium">
                <div className="catamaran-gallery-overlay-title">{t('gallery.item2')}</div>
                <div className="catamaran-gallery-overlay-subtitle">Luxury interior</div>
              </div>
            </div>
            
            <div className="catamaran-gallery-item-premium">
              <img 
                src="/bali-photos/230310_Catsmart_Interieur_HD_007-New-scaled.webp" 
                alt="Catamaran slaapvertrek huren Nederland" 
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="catamaran-gallery-overlay-premium">
                <div className="catamaran-gallery-overlay-title">{t('gallery.item3')}</div>
                <div className="catamaran-gallery-overlay-subtitle">Comfortable cabins</div>
              </div>
            </div>
            
            <div className="catamaran-gallery-item-premium">
              <img 
                src="/bali-photos/DSC_2614_C_RVB-scaled.webp" 
                alt="Catamaran charter IJsselmeer Markermeer" 
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="catamaran-gallery-overlay-premium">
                <div className="catamaran-gallery-overlay-title">{t('gallery.item4')}</div>
                <div className="catamaran-gallery-overlay-subtitle">Perfect sailing conditions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="catamaran-booking-section" style={{marginTop: '4rem'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="catamaran-booking-title" style={{fontSize: '3rem', marginBottom: '1rem'}}>{t('cta.title')}</h2>
          <p style={{fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto 3rem auto', color: 'var(--off-white)'}}>{t('cta.desc')}</p>
          <button 
            onClick={() => window.open('https://www.brug-yachtcharter.com/boat/lagoon-40-catamaran-avesenza/', '_blank')} 
            className="catamaran-btn-primary"
            style={{fontSize: '1.4rem', padding: '1.5rem 4rem'}}
          >
            <span>{t('cta.button')}</span>
            <ShipIcon />
          </button>
        </div>
      </section>
      </main>
    </>
  );
}