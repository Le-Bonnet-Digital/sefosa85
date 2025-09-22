import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

const StickyDevisCTA = () => {
  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'sticky_cta' });
    window.location.href = 'tel:+33672128440';
  };

  const handleDevisClick = () => {
    trackEvent('devis_click', { location: 'sticky_cta' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white border-t-2 border-gray-200 px-4 py-3 shadow-lg">
        <div className="flex gap-3">
          <button
            onClick={handlePhoneClick}
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Appeler</span>
          </button>
          <Link
            to="/devis-et-calendrier"
            onClick={handleDevisClick}
            className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
          >
            <FileText className="w-5 h-5" />
            <span>Devis</span>
          </Link>
        </div>
        
        <div className="text-center mt-2">
          <p className="text-xs text-gray-600">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            Réponse garantie sous 24h
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyDevisCTA;