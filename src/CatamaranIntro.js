import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatamaranIntro() {
  const { t } = useTranslation();
  return (
    <div className="catamaran-section-block">
      <section className="catamaran-intro">
        <h2>{t('catamaranIntro.title')}</h2>
        <p className="catamaran-thuis">{t('catamaranIntro.welcome')}</p>
        <p>{t('catamaranIntro.text')}</p>
        <div className="catamaran-highlight">
          {t('catamaranIntro.highlights')}
        </div>
      </section>
    </div>
  );
}
