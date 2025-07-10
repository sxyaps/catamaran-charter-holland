import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatamaranFeatures() {
  const { t } = useTranslation();
  const features = t('catamaran.catamaranFeatures.items', { returnObjects: true })
    || t('catamaranFeatures.items', { returnObjects: true });
  return (
    <div className="catamaran-section-block">
      <section className="catamaran-features">
        <h3>{t('catamaranFeatures.title')}</h3>
        <ul>
          {(Array.isArray(features) ? features : []).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
