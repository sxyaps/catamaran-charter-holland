import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Premium SVG Icons
const StarIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
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

const AnchorIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83V9h2a1 1 0 0 1 0 2h-2v7a7 7 0 0 1-7-7h2a5 5 0 0 0 5 5v-7H9a1 1 0 0 1 0-2h2V7.83A3.001 3.001 0 0 1 12 2z"/>
  </svg>
);

export default function PagePrijzen() {
  const { t } = useTranslation();

  useEffect(() => {
    // Zet de variabelen als globals
    window.bo_base_url = 'https://boeken.brug-jachtverhuur.nl/';
    window.bo_lang = 'nl';
    window.bo_groep = '3';
    window.bo_object = '';
    window.bo_hide_groep = true;

    // Laad BO3.js dynamisch als hij nog niet bestaat
    if (!window.makeBO2) {
      const script = document.createElement('script');
      script.src = 'https://boeken.brug-jachtverhuur.nl/BO3.js';
      script.async = true;
      script.onload = () => {
        if (window.makeBO2) window.makeBO2('divBO');
      };
      document.body.appendChild(script);
    } else {
      window.makeBO2('divBO');
    }
    // Cleanup: widget verwijderen bij unmount
    return () => {
      const el = document.getElementById('divBO');
      if (el) el.innerHTML = '';
    };
  }, []);

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
            <h1 className="catamaran-hero-title">{t('prijzen.title')}</h1>
            <p className="catamaran-hero-subtitle" style={{maxWidth: '800px', margin: '0 auto'}}>{t('prijzen.subtitle')}</p>
            
            <div className="catamaran-hero-features" style={{justifyContent: 'center'}}>
              <div className="catamaran-hero-feature">
                <ShipIcon className="catamaran-hero-feature-icon" />
                <span>Dagcharters</span>
              </div>
              <div className="catamaran-hero-feature">
                <AnchorIcon className="catamaran-hero-feature-icon" />
                <span>Bareboat</span>
              </div>
              <div className="catamaran-hero-feature">
                <StarIcon className="catamaran-hero-feature-icon" />
                <span>Catering pakketten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with proper container */}
      <main className="main-content">
        {/* PREMIUM CHARTER PRICING */}
        <section className="section">
        <div className="container" style={{paddingTop: '2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="catamaran-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('prijzen.charter.title')}</h2>
            <p style={{fontSize: '1.2rem', color: 'var(--blue-light)', maxWidth: '700px', margin: '0 auto'}}>{t('prijzen.charter.subtitle')}</p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', padding: '1rem 0 0 0', maxWidth: '800px', margin: '0 auto', alignItems: 'stretch'}}>
            {/* Half Day Charter Card */}
            <div className="catamaran-spec-card" style={{position: 'relative', padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%'}}>
              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('prijzen.charter.halveDag.title')}</h3>
                <div style={{fontSize: '3rem', fontWeight: 800, color: 'var(--white)', fontFamily: 'var(--font-heading)'}}>€600</div>
                <div style={{color: 'var(--blue-light)', fontSize: '1.1rem', marginTop: '0.5rem'}}>3 uur</div>
              </div>
              
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', flex: 1}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.halveDag.feature1')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.halveDag.feature2')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.halveDag.feature3')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.halveDag.feature4')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.halveDag.feature5')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.halveDag.feature6')}</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open('mailto:info@catamarancharterholland.nl?subject=Halve%20dag%20charter%20aanvraag&body=Ik%20wil%20graag%20een%20halve%20dag%20charter%20boeken.%20Datum:%20%5Bdatum%5D%20Aantal%20personen:%20%5Baantal%5D')} 
                className="catamaran-btn-primary"
                style={{width: '100%', justifyContent: 'center', fontSize: '1.1rem', marginTop: 'auto'}}
              >
                <span>Neem Contact Op</span>
                <ArrowIcon />
              </button>
            </div>

            {/* Full Day Charter Card */}
            <div className="catamaran-spec-card" style={{position: 'relative', padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%'}}>
              <div className="catamaran-floating-badge">
                Populair <StarIcon />
              </div>
              
              <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h3 style={{color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('prijzen.charter.volleDag.title')}</h3>
                <div style={{fontSize: '3rem', fontWeight: 800, color: 'var(--white)', fontFamily: 'var(--font-heading)'}}>€1100</div>
                <div style={{color: 'var(--blue-light)', fontSize: '1.1rem', marginTop: '0.5rem'}}>7 uur</div>
              </div>
              
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', flex: 1}}>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.volleDag.feature1')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.volleDag.feature2')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.volleDag.feature3')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.volleDag.feature4')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0', borderBottom: '1px solid var(--glass-border)'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.volleDag.feature5')}</span>
                </li>
                <li style={{display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 0'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span>{t('prijzen.charter.volleDag.feature6')}</span>
                </li>
              </ul>
              
              <button 
                onClick={() => window.open('mailto:info@catamarancharterholland.nl?subject=Hele%20dag%20charter%20aanvraag&body=Ik%20wil%20graag%20een%20hele%20dag%20charter%20boeken.%20Datum:%20%5Bdatum%5D%20Aantal%20personen:%20%5Baantal%5D')} 
                className="catamaran-btn-primary"
                style={{width: '100%', justifyContent: 'center', fontSize: '1.1rem', marginTop: 'auto'}}
              >
                <span>Neem Contact Op</span>
                <ArrowIcon />
              </button>
            </div> {/* End Full Day Charter Card */}
          </div> {/* End grid of charter cards */}
        </div> {/* End container for charter section */}
      </section>

      {/* CATERING PACKAGES - moved directly under day charter */}
      <section className="section catamaran-section-block">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="catamaran-title" style={{fontSize: '2.5rem'}}>{t('prijzen.catering.title')}</h2>
            <p style={{fontSize: '1.2rem', color: 'var(--blue-light)'}}>{t('prijzen.catering.subtitle')}</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
            {/* Catering Package 1 */}
            <div className="catamaran-spec-card" style={{padding: '2rem', textAlign: 'center'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem'}}>{t('prijzen.catering.pakket1.title')}</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem'}}>€15</div>
              <div style={{color: 'var(--blue-light)', marginBottom: '1.5rem'}}>{t('prijzen.catering.perPersoon')}</div>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket1.feature1')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket1.feature2')}
                </li>
              </ul>
            </div>
            
            {/* Catering Package 2 */}
            <div className="catamaran-spec-card" style={{padding: '2rem', textAlign: 'center'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem'}}>{t('prijzen.catering.pakket2.title')}</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem'}}>€30</div>
              <div style={{color: 'var(--blue-light)', marginBottom: '1.5rem'}}>{t('prijzen.catering.perPersoon')}</div>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket2.feature1')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket2.feature2')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket2.feature3')}
                </li>
              </ul>
            </div>
            
            {/* Catering Package 3 */}
            <div className="catamaran-spec-card" style={{padding: '2rem', textAlign: 'center'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem'}}>{t('prijzen.catering.pakket3.title')}</h3>
              <div style={{fontSize: '2.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem'}}>€45</div>
              <div style={{color: 'var(--blue-light)', marginBottom: '1.5rem'}}>{t('prijzen.catering.perPersoon')}</div>
              <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem'}}>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket3.feature1')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket3.feature2')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket3.feature3')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket3.feature4')}
                </li>
                <li style={{padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.catering.pakket3.feature5')}
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{textAlign: 'center', padding: '1.5rem', background: 'rgba(252,191,142,0.1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gold)'}}>
            <strong style={{color: 'var(--gold)'}}>{t('prijzen.catering.glutenvrijToeslag')}: €7,-</strong>
          </div>
        </div>
      </section>

      {/* BOEKINGSWIDGET DAGCHARTER GROEP 3 */}
      <section className="section catamaran-section-block">
        <div className="container">
          <h2 className="catamaran-title" style={{fontSize: '2rem', textAlign: 'center', marginBottom: '2rem'}}>Direct boeken dagcharter</h2>
          <div id="divBO" style={{minHeight: '400px', width: '100%', background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', padding: '2rem', position: 'relative', zIndex: 2}}></div>
        </div>
      </section>

      {/* NEW: What to Expect Section */}
      <section className="section catamaran-section-block">
        <div className="container">
          {/* Additional descriptive content */}
          <div style={{marginTop: '4rem', textAlign: 'center', maxWidth: '900px', margin: '4rem auto 0 auto'}}>
            <h3 style={{color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)'}}>{t('prijzen.charter.whyChoose.title')}</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem'}}>
              <div style={{padding: '1.5rem', background: 'rgba(21,91,119,0.2)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)'}}>
                <ShipIcon style={{color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem'}} />
                <h4 style={{color: 'var(--white)', marginBottom: '1rem'}}>{t('prijzen.charter.whyChoose.premiumFleet.title')}</h4>
                <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>{t('prijzen.charter.whyChoose.premiumFleet.description')}</p>
              </div>
              <div style={{padding: '1.5rem', background: 'rgba(21,91,119,0.2)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)'}}>
                <AnchorIcon style={{color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem'}} />
                <h4 style={{color: 'var(--white)', marginBottom: '1rem'}}>{t('prijzen.charter.whyChoose.experiencedCrew.title')}</h4>
                <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>{t('prijzen.charter.whyChoose.experiencedCrew.description')}</p>
              </div>
              <div style={{padding: '1.5rem', background: 'rgba(21,91,119,0.2)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)'}}>
                <StarIcon style={{color: 'var(--gold)', fontSize: '2rem', marginBottom: '1rem'}} />
                <h4 style={{color: 'var(--white)', marginBottom: '1rem'}}>{t('prijzen.charter.whyChoose.allInclusive.title')}</h4>
                <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>{t('prijzen.charter.whyChoose.allInclusive.description')}</p>
              </div>
            </div>
            <p style={{fontSize: '1.1rem', color: 'var(--off-white)', lineHeight: 1.7, marginBottom: '2rem'}}>
              {t('prijzen.charter.whyChoose.conclusion')}
            </p>
          </div>
        </div>
      </section>

      {/* NEW: What to Expect Section */}
      <section className="section catamaran-section-block">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 className="catamaran-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('whatToExpect.title')}</h2>
            <p style={{fontSize: '1.2rem', color: 'var(--blue-light)', maxWidth: '700px', margin: '0 auto'}}>{t('whatToExpect.subtitle')}</p>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
            <div className="catamaran-spec-card" style={{padding: '2rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(45deg, var(--gold), #f4c674)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <ShipIcon style={{color: 'var(--dark)', fontSize: '1.5rem'}} />
                </div>
                <h3 style={{color: 'var(--gold)', fontSize: '1.4rem', margin: 0}}>{t('whatToExpect.modernCatamaran.title')}</h3>
              </div>
              <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>
                {t('whatToExpect.modernCatamaran.description')}
              </p>
            </div>

            <div className="catamaran-spec-card" style={{padding: '2rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(45deg, var(--gold), #f4c674)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <AnchorIcon style={{color: 'var(--dark)', fontSize: '1.5rem'}} />
                </div>
                <h3 style={{color: 'var(--gold)', fontSize: '1.4rem', margin: 0}}>{t('whatToExpect.safetyFirst.title')}</h3>
              </div>
              <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>
                {t('whatToExpect.safetyFirst.description')}
              </p>
            </div>

            <div className="catamaran-spec-card" style={{padding: '2rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(45deg, var(--gold), #f4c674)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <StarIcon style={{color: 'var(--dark)', fontSize: '1.5rem'}} />
                </div>
                <h3 style={{color: 'var(--gold)', fontSize: '1.4rem', margin: 0}}>{t('whatToExpect.uniqueRoutes.title')}</h3>
              </div>
              <p style={{color: 'var(--off-white)', lineHeight: 1.6}}>
                {t('whatToExpect.uniqueRoutes.description')}
              </p>
            </div>
          </div>

          <div style={{background: 'linear-gradient(135deg, rgba(21,91,119,0.3), rgba(252,191,142,0.1))', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)', textAlign: 'center'}}>
            <h3 style={{color: 'var(--gold)', fontSize: '1.6rem', marginBottom: '1rem'}}>{t('whatToExpect.perfectForEveryOccasion.title')}</h3>
            <p style={{fontSize: '1.1rem', color: 'var(--off-white)', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto'}}>
              {t('whatToExpect.perfectForEveryOccasion.description')}
            </p>
          </div>
        </div>
      </section>

      {/* NEW: IJsselmeer Information Section */}
      <section className="section">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
            <div>
              <h2 className="catamaran-title" style={{fontSize: '2.2rem', marginBottom: '1.5rem'}}>{t('ijsselmeerInfo.title')}</h2>
              <p style={{fontSize: '1.1rem', color: 'var(--off-white)', lineHeight: 1.7, marginBottom: '2rem'}}>
                {t('ijsselmeerInfo.description')}
              </p>
              
              <div style={{display: 'grid', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span style={{color: 'var(--off-white)'}}>{t('ijsselmeerInfo.features.sheltered')}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span style={{color: 'var(--off-white)'}}>{t('ijsselmeerInfo.features.historic')}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span style={{color: 'var(--off-white)'}}>{t('ijsselmeerInfo.features.conditions')}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <CheckIcon style={{color: 'var(--gold)', fontSize: '1.2rem'}} />
                  <span style={{color: 'var(--off-white)'}}>{t('ijsselmeerInfo.features.sunsets')}</span>
                </div>
              </div>
            </div>
            
            <div style={{background: 'rgba(21,91,119,0.2)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)'}}>
              <h3 style={{color: 'var(--gold)', fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center'}}>{t('ijsselmeerInfo.destinations.title')}</h3>
              <div style={{display: 'grid', gap: '1rem'}}>
                <div style={{padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius)', border: '1px solid var(--glass-border)'}}>
                  <strong style={{color: 'var(--white)'}}>{t('ijsselmeerInfo.destinations.enkhuizen.name')}</strong>
                  <p style={{color: 'var(--off-white)', fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>{t('ijsselmeerInfo.destinations.enkhuizen.description')}</p>
                </div>
                <div style={{padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius)', border: '1px solid var(--glass-border)'}}>
                  <strong style={{color: 'var(--white)'}}>{t('ijsselmeerInfo.destinations.urk.name')}</strong>
                  <p style={{color: 'var(--off-white)', fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>{t('ijsselmeerInfo.destinations.urk.description')}</p>
                </div>
                <div style={{padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius)', border: '1px solid var(--glass-border)'}}>
                  <strong style={{color: 'var(--white)'}}>{t('ijsselmeerInfo.destinations.volendam.name')}</strong>
                  <p style={{color: 'var(--off-white)', fontSize: '0.9rem', margin: '0.5rem 0 0 0'}}>{t('ijsselmeerInfo.destinations.volendam.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFORMATION */}
      <section className="section catamaran-section-block">
        <h2 className="catamaran-title">{t('prijzen.additionalInfo.title')}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          <div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem'}}>{t('prijzen.additionalInfo.dagcharterInbegrepen')}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.professioneleSchipper')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.brandstof')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.verzekering')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.schoonmaak')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.gebruikFaciliteiten')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.reddingsvesten')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.veiligheidsuitrusting')}</li>
            </ul>
          </div>
          <div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem'}}>{t('prijzen.additionalInfo.bareboatMeerdaags')}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.volledigUitgerusteCatamaran')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.zeilbrevetEnErvaringVereist')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.uitgebreideBriefing')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.support')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.cateringMogelijk')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.teambuildingProgrammas')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.flexibeleRoutes')}</li>
            </ul>
          </div>
          <div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem'}}>{t('prijzen.additionalInfo.praktischeInformatie')}</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.seizoen')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.opstapplaats')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.adres')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.gratisParkeren')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.dagcharterMaximaal')}</li>
              <li style={{padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem'}}><CheckIcon style={{color: 'var(--gold)', fontSize: '1rem'}} />{t('prijzen.additionalInfo.bareboatSlaapplaatsen')}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}