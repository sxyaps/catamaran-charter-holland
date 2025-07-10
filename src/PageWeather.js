import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

export default function PageWeather() {
  const { t } = useTranslation();
  return (
    <div className="page-weather">
      {/* Hero Section */}
      <section className="hero-section weather-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{t('weather.heroTitle')}</h1>
            <p className="hero-subtitle">{t('weather.heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Weather Content */}
      <section className="weather-content">
        <div className="container">
          <div className="weather-intro">
            <h2>{t('weather.introTitle')}</h2>
            <p>{t('weather.introText')}</p>
          </div>

          {/* Weather Widgets Grid */}
          <div className="weather-widgets-grid">            {/* Rain Radar Widget */}
            <div className="weather-widget">
              <div className="widget-header">
                <h3>{t('weather.radarTitle')}</h3>
                <p>{t('weather.radarDesc')}</p>
              </div>              <div className="widget-container">
                <iframe
                  src="https://embed.windy.com/embed2.html?lat=52.685&lon=5.294&detailLat=52.685&detailLon=5.294&width=650&height=500&zoom=8&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Rain Radar - Windy"
                  loading="lazy"
                  style={{
                    display: 'block',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Windy Widget */}
            <div className="weather-widget">
              <div className="widget-header">
                <h3>{t('weather.windTitle')}</h3>
                <p>{t('weather.windDesc')}</p>
              </div>              <div className="widget-container">
                <iframe
                  src="https://embed.windy.com/embed2.html?lat=52.685&lon=5.294&detailLat=52.685&detailLon=5.294&width=650&height=500&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Windy IJsselmeer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Weather Info Section */}
          <div className="weather-info">
            <div className="weather-tips">
              <h3>{t('weather.tipsTitle')}</h3>
              <ul>
                <li>{t('weather.tip1')}</li>
                <li>{t('weather.tip2')}</li>
                <li>{t('weather.tip3')}</li>
                <li>{t('weather.tip4')}</li>
              </ul>
            </div>
            
            <div className="weather-contact">
              <h3>{t('weather.contactTitle')}</h3>
              <p>{t('weather.contactText')}</p>
              <a href="/contact" className="btn btn-primary">{t('weather.contactButton')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
