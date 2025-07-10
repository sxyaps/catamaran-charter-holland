import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatamaranDestinations() {
  const { t } = useTranslation();
  return (
    <div className="catamaran-section-block">
      <section className="catamaran-destinations">
        <h3>{t('catamaranDestinations.title')}</h3>
        <p>{t('catamaranDestinations.subtitle')}</p>
      </section>
    </div>
  );
}
