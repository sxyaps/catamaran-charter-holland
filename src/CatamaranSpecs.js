import React from 'react';
import { useTranslation } from 'react-i18next';

export default function CatamaranSpecs() {
  const { t } = useTranslation();
  const specs = [
    { label: t('catamaranSpecs.length'), value: '10 meter' },
    { label: t('catamaranSpecs.width'), value: '5 meter' },
    { label: t('catamaranSpecs.draft'), value: '1 meter' },
    { label: t('catamaranSpecs.weight'), value: '5000 kg' },
    { label: t('catamaranSpecs.engine'), value: '2 x 30 pk' },
  ];
  
  return (
    <div className="catamaran-section-block">
      <section className="catamaran-specs">
        <h3>{t('catamaranSpecs.title')}</h3>
        <ul>
          {specs.map((item, idx) => (
            <li key={idx}><b>{item.label}</b> {item.value}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
