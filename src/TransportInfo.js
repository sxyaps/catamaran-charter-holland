import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TransportInfo() {
  const { t } = useTranslation();
  const carTimes = ['09:00 - 10:00', '10:00 - 11:00', '11:00 - 12:00'];
  const trainTimes = ['09:15', '10:15', '11:15'];
  const groupOptions = ['Bus', 'Trein', 'Vliegtuig'];
  const partners = ['Partner 1', 'Partner 2', 'Partner 3'];
  const important = [
    { label: t('transportInfo.label1'), value: t('transportInfo.value1') },
    { label: t('transportInfo.label2'), value: t('transportInfo.value2') },
    { label: t('transportInfo.label3'), value: t('transportInfo.value3') },
  ];

  return (
    <div className="catamaran-section-block">
      <h2>{t('transportInfo.title')}</h2>
      <p className="section-subtitle">{t('transportInfo.subtitle')}</p>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
        {/* By Car */}
        <div className="transport-card">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <i className="fas fa-car" style={{fontSize: '2rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
            <h3>{t('transportInfo.byCar')}</h3>
          </div>
          <div>
            <p><strong>{t('transportInfo.address')}:</strong><br/>Parkhaven 3, 8242 PE Lelystad</p>
            <p><strong>{t('transportInfo.times')}:</strong></p>
            <ul>
              {carTimes.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p><strong>{t('transportInfo.parking')}:</strong><br/>{t('transportInfo.parkingInfo')}</p>
            <p style={{marginTop: '1rem'}}>
              <a href="https://maps.google.com/search/Parkhaven+3+8242+PE+Lelystad" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{fontSize: '0.9rem', padding: '0.5rem 1rem'}}>
                <i className="fas fa-map-marker-alt" style={{marginRight: '0.5rem'}}></i>
                {t('transportInfo.viewOnMap')}
              </a>
            </p>
          </div>
        </div>
        {/* Public Transport */}
        <div className="transport-card">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <i className="fas fa-train" style={{fontSize: '2rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
            <h3>{t('transportInfo.publicTransport')}</h3>
          </div>
          <div>
            <p><strong>{t('transportInfo.trainStation')}:</strong><br/>{t('transportInfo.stationLelystad')}</p>
            <p><strong>{t('transportInfo.connections')}:</strong><br/>{t('transportInfo.directConnections')}</p>
            <p><strong>{t('transportInfo.howToMarina')}:</strong></p>
            <ul>
              {['Bus 1', 'Bus 2', 'Trein 3'].map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p><strong>{t('transportInfo.departureTimes')}:</strong></p>
            <ul>
              {trainTimes.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </div>
        </div>
        {/* Group Transport */}
        <div className="transport-card">
          <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
            <i className="fas fa-shuttle-van" style={{fontSize: '2rem', color: 'var(--primary)', marginRight: '1rem'}}></i>
            <h3>{t('transportInfo.groupTransport')}</h3>
          </div>
          <div>
            <p><strong>{t('transportInfo.forWho')}:</strong><br/>{t('transportInfo.groupsOf10OrMore')}</p>
            <p><strong>{t('transportInfo.options')}:</strong></p>
            <ul>
              {groupOptions.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p><strong>{t('transportInfo.partners')}:</strong></p>
            <ul>
              {partners.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p style={{marginTop: '1rem'}}>
              <em>{t('transportInfo.contactUsForGroupTransport')}</em>
            </p>
          </div>
        </div>
      </div>
      {/* Additional Info */}
      <div style={{marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--light-bg)', borderRadius: 'var(--radius-md)'}}>
        <h3 style={{marginBottom: '1rem'}}>
          <i className="fas fa-info-circle" style={{color: 'var(--primary)', marginRight: '0.5rem'}}></i>
          {t('transportInfo.importantInfo')}
        </h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
          {important.map((item, idx) => <div key={idx}><p><strong>{item.label}</strong><br/>{item.value}</p></div>)}
        </div>
      </div>
    </div>
  );
}
