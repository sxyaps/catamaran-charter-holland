import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Premium SVG Icons
const AnchorIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83V9h2a1 1 0 0 1 0 2h-2v7a7 7 0 0 1-7-7h2a5 5 0 0 0 5 5v-7H9a1 1 0 0 1 0-2h2V7.83A3.001 3.001 0 0 1 12 2z"/>
  </svg>
);

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

export default function PageBoats() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      {/* PREMIUM HERO SECTION - Full Width */}
      <section 
        className="catamaran-hero-section" 
        style={{
          minHeight: '20vh',
          marginTop: '-80px',
          paddingTop: '120px'
        }}
      >
        <div className="catamaran-hero-content" style={{gridTemplateColumns: '1fr', textAlign: 'center', gap: '2rem'}}>
          <div className="catamaran-hero-text">
            <h1 className="catamaran-hero-title">{t('boats.heroTitle')}</h1>
            <p className="catamaran-hero-subtitle" style={{maxWidth: '800px', margin: '0 auto'}}>{t('boats.heroSubtitle')}</p>
            
            <div className="catamaran-hero-features" style={{justifyContent: 'center'}}>
              <div className="catamaran-hero-feature">
                <ShipIcon className="catamaran-hero-feature-icon" />
                <span>Premium vloot</span>
              </div>
              <div className="catamaran-hero-feature">
                <AnchorIcon className="catamaran-hero-feature-icon" />
                <span>IJsselmeer</span>
              </div>
              <div className="catamaran-hero-feature">
                <StarIcon className="catamaran-hero-feature-icon" />
                <span>2 catamarans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with proper container */}
      <main className="main-content">
        {/* PREMIUM BOAT CARDS */}
        <section className="section">
        <div className="container" style={{paddingTop: '3rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem', marginTop: '2rem', padding: '1rem 0 0 0'}}>
            
            {/* Bali Catsmart Premium Card */}
            <div className="catamaran-spec-card" style={{padding: '2.5rem', cursor: 'pointer', transition: 'all var(--transition-normal)', position: 'relative', marginTop: '1rem'}} 
                 onClick={() => navigate('/catamaran')}
                 onMouseEnter={(e) => e.target.style.transform = 'translateY(-8px)'}
                 onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                 role="button" 
                 tabIndex={0}>
              
              <div className="catamaran-floating-badge">
                Nieuw 2025 <StarIcon />
              </div>
              
              <div style={{position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem'}}>
                <img 
                  src="/bali-photos/0E2A7009_B_RVB.webp" 
                  alt="Bali Catsmart premium catamaran" 
                  style={{width: '100%', height: '300px', objectFit: 'cover'}}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(15px)',
                  padding: '0.8rem 1.2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--gold)',
                  fontWeight: 600
                }}>
                  Sporty & Modern
                </div>
              </div>
              
              <h2 style={{fontSize: '2rem', color: 'var(--gold)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)'}}>{t('boats.baliCatsmart.title')}</h2>
              <div style={{color: 'var(--blue-light)', fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-body)'}}>{t('boats.baliCatsmart.subtitle')}</div>
              
              <p style={{fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', color: 'var(--off-white)'}}>
                <strong style={{color: 'var(--gold)'}}>{t('boats.baliCatsmart.descriptionBold')}</strong> {t('boats.baliCatsmart.description')}
              </p>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.length')}:</span>
                  <span style={{color: 'var(--white)'}}>11,32m</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.dayCharter')}:</span>
                  <span style={{color: 'var(--white)'}}>12 pers</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.sleepingPlaces')}:</span>
                  <span style={{color: 'var(--white)'}}>6 pers</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.yearBuilt')}:</span>
                  <span style={{color: 'var(--white)'}}>2025</span>
                </div>
              </div>
              
              <button 
                className="catamaran-btn-primary" 
                style={{width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '1rem 2rem'}}
                onClick={(e) => {e.stopPropagation(); navigate('/catamaran');}}
              >
                <span>{t('boats.viewDetails')}</span>
                <ArrowIcon />
              </button>
            </div>

            {/* Lagoon 40 Premium Card */}
            <div className="catamaran-spec-card" style={{padding: '2.5rem', cursor: 'pointer', transition: 'all var(--transition-normal)', position: 'relative', marginTop: '1rem'}} 
                 onClick={() => navigate('/lagoon40')}
                 onMouseEnter={(e) => e.target.style.transform = 'translateY(-8px)'}
                 onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                 role="button" 
                 tabIndex={0}>
              
              <div className="catamaran-floating-badge">
                Luxe & Ruim <StarIcon />
              </div>
              
              <div style={{position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '2rem'}}>
                <img 
                  src="/lagoon-photos/Catamaran-40-Avesenza-1.webp" 
                  alt="Lagoon 40 premium catamaran" 
                  style={{width: '100%', height: '300px', objectFit: 'cover'}}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(15px)',
                  padding: '0.8rem 1.2rem',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--gold)',
                  fontWeight: 600
                }}>
                  Spacious & Luxury
                </div>
              </div>
              
              <h2 style={{fontSize: '2rem', color: 'var(--gold)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)'}}>{t('boats.lagoon40.title')}</h2>
              <div style={{color: 'var(--blue-light)', fontSize: '1.1rem', marginBottom: '1rem', fontFamily: 'var(--font-body)'}}>{t('boats.lagoon40.subtitle')}</div>
              
              <p style={{fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', color: 'var(--off-white)'}}>
                <strong style={{color: 'var(--gold)'}}>{t('boats.lagoon40.descriptionBold')}</strong> {t('boats.lagoon40.description')}
              </p>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.length')}:</span>
                  <span style={{color: 'var(--white)'}}>11,74m</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.dayCharter')}:</span>
                  <span style={{color: 'var(--white)'}}>12 pers</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.sleepingPlaces')}:</span>
                  <span style={{color: 'var(--white)'}}>10 pers</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', background: 'rgba(21,91,119,0.3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)'}}>
                  <span style={{color: 'var(--gold)', fontWeight: 600}}>{t('boats.yearBuilt')}:</span>
                  <span style={{color: 'var(--white)'}}>2023</span>
                </div>
              </div>
              
              <button 
                className="catamaran-btn-primary" 
                style={{width: '100%', justifyContent: 'center', fontSize: '1.1rem', padding: '1rem 2rem'}}
                onClick={(e) => {e.stopPropagation(); navigate('/lagoon40');}}
              >
                <span>{t('boats.viewDetails')}</span>
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA SECTION */}
      <section className="catamaran-booking-section" style={{marginTop: '4rem'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 className="catamaran-booking-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('boats.contactTitle')}</h2>
          <p style={{fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2rem auto', color: 'var(--off-white)'}}>{t('boats.contactSubtitle')}</p>
          <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button 
              className="catamaran-btn-primary" 
              style={{fontSize: '1.2rem', padding: '1.2rem 3rem'}}
              onClick={() => navigate('/catamaran')}
            >
              <span>{t('boats.viewBaliCatsmart')}</span>
              <ShipIcon />
            </button>
            <button 
              className="catamaran-btn-secondary" 
              style={{fontSize: '1.2rem', padding: '1.2rem 3rem'}}
              onClick={() => navigate('/lagoon40')}
            >
              <span>{t('boats.viewLagoon40')}</span>
              <ShipIcon />
            </button>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
