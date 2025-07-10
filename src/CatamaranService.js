import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatamaranService() {
  const { t } = useTranslation();
  return (
    <div className="catamaran-section-block">
      <section className="catamaran-service">
        <h3>{t('catamaranService.title')}</h3>
        <p>{t('catamaranService.description')}</p>
      </section>
    </div>
  );
}
