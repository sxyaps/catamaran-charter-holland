import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Premium SVG Icons
const CheckIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

const AnchorIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a3 3 0 0 1 3 3c0 1.31-.84 2.42-2 2.83V9h2a1 1 0 0 1 0 2h-2v7a7 7 0 0 1-7-7h2a5 5 0 0 0 5 5v-7H9a1 1 0 0 1 0-2h2V7.83A3.001 3.001 0 0 1 12 2z"/>
  </svg>
);

export default function PageContact() {
  const { t } = useTranslation();
  
  // Local state management for the form
  const [form, setForm] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', form);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setForm({
        naam: '',
        email: '',
        telefoon: '',
        onderwerp: '',
        bericht: ''
      });
      setSubmitted(false);
    }, 3000);
  };

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
            <h1 className="catamaran-hero-title">{t('contact.heroTitle')}</h1>
            <p className="catamaran-hero-subtitle" style={{maxWidth: '900px', margin: '0 auto', fontSize: '1.3rem'}}>{t('contact.heroSubtitle')}</p>
            
            <div className="catamaran-hero-features" style={{justifyContent: 'center', marginTop: '2rem'}}>
              <div className="catamaran-hero-feature">
                <CheckIcon className="catamaran-hero-feature-icon" />
                <span>24/7 Support</span>
              </div>
              <div className="catamaran-hero-feature">
                <PhoneIcon className="catamaran-hero-feature-icon" />
                <span>Direct Contact</span>
              </div>
              <div className="catamaran-hero-feature">
                <AnchorIcon className="catamaran-hero-feature-icon" />
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with proper container */}
      <main className="main-content">
        {/* PREMIUM CONTACT SECTION */}
      <section className="section">
        <div className="container">
          {/* CONTACT FORM - FULL WIDTH */}
          <div style={{
            background: 'var(--glass-bg)',
            borderRadius: 'var(--radius-xl)',
            padding: '3rem',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '4rem'
          }}>
            <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '4px', background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%)'}}></div>
            
            <h2 style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--white)', textAlign: 'center'}}>{t('contact.formTitle')}</h2>
            <p style={{textAlign: 'center', color: 'var(--blue-light)', marginBottom: '2.5rem', fontSize: '1.1rem'}}>{t('contact.formSubtitle')}</p>
            
            {submitted && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(40,167,69,0.2), rgba(40,167,69,0.4))',
                border: '1px solid rgba(40,167,69,0.5)',
                borderRadius: 'var(--radius-lg)',
                padding: '1rem',
                marginBottom: '2rem',
                color: 'var(--white)',
                textAlign: 'center'
              }}>
                <CheckIcon style={{color: 'var(--gold)', marginRight: '0.5rem'}} />
                {t('contact.thankYouMessage')}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{display: 'grid', gap: '1.5rem'}}>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div>
                  <label htmlFor="naam" style={{display: 'block', marginBottom: '0.8rem', color: 'var(--gold)', fontWeight: 600, fontSize: '1rem'}}>{t('contact.nameLabel')}*</label>
                  <input 
                    type="text" 
                    id="naam" 
                    name="naam" 
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      background: 'rgba(21,91,119,0.2)',
                      border: '2px solid var(--glass-border)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--white)',
                      fontSize: '1rem',
                      transition: 'all var(--transition-normal)',
                      fontFamily: 'var(--font-body)'
                    }}
                    value={form.naam} 
                    onChange={handleChange} 
                    required 
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>
                
                <div>
                  <label htmlFor="telefoon" style={{display: 'block', marginBottom: '0.8rem', color: 'var(--gold)', fontWeight: 600, fontSize: '1rem'}}>{t('contact.phoneLabel')}</label>
                  <input 
                    type="tel" 
                    id="telefoon" 
                    name="telefoon" 
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      background: 'rgba(21,91,119,0.2)',
                      border: '2px solid var(--glass-border)',
                      borderRadius: 'var(--radius-lg)',
                      color: 'var(--white)',
                      fontSize: '1rem',
                      transition: 'all var(--transition-normal)',
                      fontFamily: 'var(--font-body)'
                    }}
                    value={form.telefoon} 
                    onChange={handleChange}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" style={{display: 'block', marginBottom: '0.8rem', color: 'var(--gold)', fontWeight: 600, fontSize: '1rem'}}>{t('contact.emailLabel')}*</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: 'rgba(21,91,119,0.2)',
                    border: '2px solid var(--glass-border)',
                    borderRadius: 'var(--radius-lg)',
                    color: 'var(--white)',
                    fontSize: '1rem',
                    transition: 'all var(--transition-normal)',
                    fontFamily: 'var(--font-body)'
                  }}
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div>
                <label htmlFor="onderwerp" style={{display: 'block', marginBottom: '0.8rem', color: 'var(--gold)', fontWeight: 600, fontSize: '1rem'}}>{t('contact.subjectLabel')}*</label>
                <input 
                  type="text" 
                  id="onderwerp" 
                  name="onderwerp" 
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: 'rgba(21,91,119,0.2)',
                    border: '2px solid var(--glass-border)',
                    borderRadius: 'var(--radius-lg)',
                    color: 'var(--white)',
                    fontSize: '1rem',
                    transition: 'all var(--transition-normal)',
                    fontFamily: 'var(--font-body)'
                  }}
                  value={form.onderwerp} 
                  onChange={handleChange} 
                  required 
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <div>
                <label htmlFor="bericht" style={{display: 'block', marginBottom: '0.8rem', color: 'var(--gold)', fontWeight: 600, fontSize: '1rem'}}>{t('contact.messageLabel')}*</label>
                <textarea 
                  id="bericht" 
                  name="bericht" 
                  rows="6"
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: 'rgba(21,91,119,0.2)',
                    border: '2px solid var(--glass-border)',
                    borderRadius: 'var(--radius-lg)',
                    color: 'var(--white)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    minHeight: '150px',
                    transition: 'all var(--transition-normal)',
                    fontFamily: 'var(--font-body)'
                  }}
                  value={form.bericht} 
                  onChange={handleChange} 
                  required 
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />
              </div>

              <button 
                type="submit" 
                className="catamaran-btn-primary"
                style={{
                  width: '100%', 
                  justifyContent: 'center', 
                  fontSize: '1.2rem', 
                  padding: '1.3rem 2rem',
                  marginTop: '1rem'
                }}
                disabled={submitted}
              >
                <span>{submitted ? t('contact.sending') : t('contact.submitButton')}</span>
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="section catamaran-section-block">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 className="catamaran-title" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>{t('contact.howItWorksTitle')}</h2>
          <p style={{fontSize: '1.2rem', color: 'var(--blue-light)', maxWidth: '700px', margin: '0 auto'}}>{t('contact.howItWorksSubtitle')}</p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
          <div className="catamaran-spec-card" style={{textAlign: 'center', padding: '2.5rem'}}>
            <div style={{
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: 'var(--near-black)',
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 8px 25px rgba(252,191,142,0.4)'
            }}>
              1
            </div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('contact.step1Title')}</h3>
            <p style={{color: 'var(--off-white)', lineHeight: 1.7, fontSize: '1rem'}}>{t('contact.step1Description')}</p>
          </div>
          
          <div className="catamaran-spec-card" style={{textAlign: 'center', padding: '2.5rem'}}>
            <div style={{
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: 'var(--near-black)',
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 8px 25px rgba(252,191,142,0.4)'
            }}>
              2
            </div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('contact.step2Title')}</h3>
            <p style={{color: 'var(--off-white)', lineHeight: 1.7, fontSize: '1rem'}}>{t('contact.step2Description')}</p>
          </div>
          
          <div className="catamaran-spec-card" style={{textAlign: 'center', padding: '2.5rem'}}>
            <div style={{
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: 'var(--near-black)',
              fontSize: '2rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 8px 25px rgba(252,191,142,0.4)'
            }}>
              3
            </div>
            <h3 style={{color: 'var(--gold)', fontSize: '1.3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)'}}>{t('contact.step3Title')}</h3>
            <p style={{color: 'var(--off-white)', lineHeight: 1.7, fontSize: '1rem'}}>{t('contact.step3Description')}</p>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}