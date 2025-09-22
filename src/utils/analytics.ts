declare global {
  interface Window {
    gtag: (command: string, targetId: string, parameters?: any) => void;
  }
}

export const initializeAnalytics = () => {
  // Google Analytics 4 initialization
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID
  
  // Create script tags for GA4
  const gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  // Initialize gtag
  window.gtag = function() {
    // eslint-disable-next-line prefer-rest-params
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line prefer-rest-params
    (window as any).dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });

  // LinkedIn Insight Tag for B2B tracking
  const linkedinScript = document.createElement('script');
  linkedinScript.innerHTML = `
    _linkedin_partner_id = "XXXXXXX"; // Replace with actual LinkedIn Partner ID
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    
    (function(l) {
      if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
      window.lintrk.q=[]}
      var s = document.getElementsByTagName("script")[0];
      var b = document.createElement("script");
      b.type = "text/javascript";b.async = true;
      b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      s.parentNode.insertBefore(b, s);})(window.lintrk);
  `;
  document.head.appendChild(linkedinScript);
};

export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // LinkedIn conversion tracking for important events
  if (eventName === 'lead_submit' && typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: 'XXXXXXX' }); // Replace with actual conversion ID
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters);
  }
};

export const trackPageView = (page_path: string, page_title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', { // Replace with actual GA4 ID
      page_path,
      page_title: page_title || document.title,
    });
  }
};

// Enhanced ecommerce tracking for lead qualification
export const trackLead = (leadData: {
  email?: string;
  phone?: string;
  formation?: string;
  company?: string;
  participants?: number;
  value?: number;
}) => {
  trackEvent('lead_submit', {
    event_category: 'Leads',
    event_label: leadData.formation || 'Unknown',
    value: leadData.value || 0,
    custom_parameters: {
      formation_type: leadData.formation,
      participant_count: leadData.participants,
      has_email: !!leadData.email,
      has_phone: !!leadData.phone,
      has_company: !!leadData.company
    }
  });
};