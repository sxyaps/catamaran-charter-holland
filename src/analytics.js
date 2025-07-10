// Google Analytics 4 utilities
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  gtag('config', 'G-XXXXXXXXXX', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  gtag('event', eventName, parameters);
};

// Track specific user interactions
export const trackInteraction = {
  // Track when user clicks on boat details
  viewBoatDetails: (boatName) => {
    trackEvent('view_boat_details', {
      boat_name: boatName,
      event_category: 'engagement',
      event_label: boatName
    });
  },

  // Track contact form submissions
  contactFormSubmit: (formType) => {
    trackEvent('contact_form_submit', {
      form_type: formType,
      event_category: 'lead_generation',
      event_label: formType
    });
  },

  // Track navigation between pages
  navigateToPage: (pageName) => {
    trackEvent('page_navigation', {
      page_name: pageName,
      event_category: 'navigation',
      event_label: pageName
    });
  },

  // Track booking inquiries
  bookingInquiry: (boatType) => {
    trackEvent('booking_inquiry', {
      boat_type: boatType,
      event_category: 'conversion',
      event_label: boatType,
      value: 1
    });
  },

  // Track social media clicks
  socialMediaClick: (platform) => {
    trackEvent('social_media_click', {
      platform: platform,
      event_category: 'social_engagement',
      event_label: platform
    });
  }
};
