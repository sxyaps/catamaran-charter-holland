import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import { trackEvent } from './analytics';

// Enhanced performance monitoring with Core Web Vitals
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.initializeTracking();
  }

  initializeTracking() {
    // Track Core Web Vitals
    getCLS(this.handleMetric.bind(this, 'CLS'));
    getFID(this.handleMetric.bind(this, 'FID'));
    getFCP(this.handleMetric.bind(this, 'FCP'));
    getLCP(this.handleMetric.bind(this, 'LCP'));
    getTTFB(this.handleMetric.bind(this, 'TTFB'));

    // Track custom metrics
    this.trackPageLoadTime();
    this.trackResourceLoadTimes();
    this.trackUserInteractions();
  }

  handleMetric(name, metric) {
    this.metrics[name] = metric;
    
    // Send to Google Analytics
    trackEvent('core_web_vital', {
      metric_name: name,
      metric_value: metric.value,
      metric_id: metric.id,
      metric_delta: metric.delta,
      event_category: 'performance',
      custom_parameter_1: this.getPerformanceRating(name, metric.value)
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${name}:`, metric);
    }
  }

  getPerformanceRating(metricName, value) {
    const thresholds = {
      CLS: { good: 0.1, needsImprovement: 0.25 },
      FID: { good: 100, needsImprovement: 300 },
      LCP: { good: 2500, needsImprovement: 4000 },
      FCP: { good: 1800, needsImprovement: 3000 },
      TTFB: { good: 800, needsImprovement: 1800 }
    };

    const threshold = thresholds[metricName];
    if (!threshold) return 'unknown';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  trackPageLoadTime() {
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        
        trackEvent('page_load_time', {
          load_time: loadTime,
          event_category: 'performance',
          event_label: 'full_page_load'
        });
      });
    }
  }

  trackResourceLoadTimes() {
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const resources = window.performance.getEntriesByType('resource');
        
        // Track slow resources (>1000ms)
        resources.forEach(resource => {
          if (resource.duration > 1000) {
            trackEvent('slow_resource', {
              resource_name: resource.name,
              resource_duration: Math.round(resource.duration),
              resource_type: resource.initiatorType,
              event_category: 'performance',
              event_label: 'slow_loading_resource'
            });
          }
        });
      });
    }
  }

  trackUserInteractions() {
    // Track long tasks that might affect responsiveness
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              trackEvent('long_task', {
                task_duration: Math.round(entry.duration),
                event_category: 'performance',
                event_label: 'long_task_blocking_main_thread'
              });
            }
          });
        });
        
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // PerformanceObserver not supported
        console.log('PerformanceObserver not supported');
      }
    }
  }

  // Get all metrics summary
  getMetricsSummary() {
    return this.metrics;
  }

  // Track custom business events
  trackBusinessEvent(eventName, properties = {}) {
    trackEvent(eventName, {
      ...properties,
      event_category: 'business',
      timestamp: new Date().toISOString()
    });
  }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;
export { PerformanceMonitor };
