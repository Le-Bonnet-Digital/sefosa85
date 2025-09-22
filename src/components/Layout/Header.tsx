import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const location = useLocation();

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'header' });
    window.location.href = 'tel:+33672128440';
  };

  const handleDevisClick = () => {
    trackEvent('devis_click', { location: 'header' });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Vendée & départements limitrophes</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePhoneClick}
                className="flex items-center gap-1 hover:text-blue-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">06 72 12 84 40</span>
              </button>
              <span className="hidden sm:inline text-blue-200">|</span>
              <span className="hidden sm:inline">Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SEFOSA</h1>
                <p className="text-sm text-gray-600">Sensibiliser • Former • Sauver</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div
                className="relative"
                onMouseEnter={() => setIsFormationsOpen(true)}
                onMouseLeave={() => setIsFormationsOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Formations
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isFormationsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b">Secourisme</div>
                    <Link to="/formations/secourisme/sst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      SST - Sauveteur Secouriste du Travail
                    </Link>
                    <Link to="/formations/secourisme/mac-sst" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      MAC SST - Maintien et Actualisation
                    </Link>
                    <Link to="/formations/secourisme/psc1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      PSC1 - Prévention et Secours Civiques
                    </Link>
                    <Link to="/formations/secourisme/gestes-qui-sauvent" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      GQS - Gestes Qui Sauvent
                    </Link>
                    <Link to="/formations/secourisme/pse1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      PSE1 - Premiers Secours en Équipe
                    </Link>
                    
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b border-t mt-2">Incendie</div>
                    <Link to="/formations/incendie/epi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      EPI - Équipier de Première Intervention
                    </Link>
                    <Link to="/formations/incendie/extincteur" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Manipulation d'extincteur
                    </Link>
                    <Link to="/formations/incendie/evacuation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Évacuation incendie
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/devis-et-calendrier" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/devis-et-calendrier' ? 'text-blue-600' : ''
                }`}
              >
                Calendrier & Devis
              </Link>
              <Link 
                to="/vendee" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname.includes('/vendee') ? 'text-blue-600' : ''
                }`}
              >
                Zone d'intervention
              </Link>
              <Link 
                to="/avis" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/avis' ? 'text-blue-600' : ''
                }`}
              >
                Avis clients
              </Link>
              <Link 
                to="/a-propos" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/a-propos' ? 'text-blue-600' : ''
                }`}
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === '/contact' ? 'text-blue-600' : ''
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-5">
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:border-blue-200 transition-colors font-medium"
              >
                <Phone className="w-4 h-4" />
                06 72 12 84 40
              </button>
              <Link
                to="/devis-et-calendrier"
                onClick={handleDevisClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500/90 px-5 py-2.5 text-white font-semibold transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Devis express
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 border-t mt-4">
              <div className="space-y-2">
                <div className="py-2">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Formations Secourisme</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/formations/secourisme/sst" className="block text-gray-700 hover:text-blue-600">
                      SST
                    </Link>
                    <Link to="/formations/secourisme/mac-sst" className="block text-gray-700 hover:text-blue-600">
                      MAC SST
                    </Link>
                    <Link to="/formations/secourisme/psc1" className="block text-gray-700 hover:text-blue-600">
                      PSC1
                    </Link>
                    <Link to="/formations/secourisme/gestes-qui-sauvent" className="block text-gray-700 hover:text-blue-600">
                      Gestes Qui Sauvent
                    </Link>
                  </div>
                </div>
                
                <div className="py-2">
                  <div className="text-sm font-semibold text-gray-500 mb-2">Formations Incendie</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/formations/incendie/epi" className="block text-gray-700 hover:text-blue-600">
                      EPI
                    </Link>
                    <Link to="/formations/incendie/extincteur" className="block text-gray-700 hover:text-blue-600">
                      Manipulation extincteur
                    </Link>
                    <Link to="/formations/incendie/evacuation" className="block text-gray-700 hover:text-blue-600">
                      Évacuation
                    </Link>
                  </div>
                </div>

                <Link to="/devis-et-calendrier" className="block py-3 text-gray-700 hover:text-blue-600">
                  Calendrier & Devis
                </Link>
                <Link to="/vendee" className="block py-3 text-gray-700 hover:text-blue-600">
                  Zone d'intervention
                </Link>
                <Link to="/avis" className="block py-3 text-gray-700 hover:text-blue-600">
                  Avis clients
                </Link>
                <Link to="/a-propos" className="block py-3 text-gray-700 hover:text-blue-600">
                  À propos
                </Link>
                <Link to="/contact" className="block py-3 text-gray-700 hover:text-blue-600">
                  Contact
                </Link>
                
                <div className="pt-4 space-y-2">
                  <button
                    onClick={handlePhoneClick}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-3 text-gray-700 hover:text-blue-600 hover:border-blue-200 transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    Appeler maintenant
                  </button>
                  <Link
                    to="/devis-et-calendrier"
                    onClick={handleDevisClick}
                    className="block w-full rounded-full bg-red-500/90 px-4 py-3 text-white font-semibold text-center transition-colors hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                  >
                    Devis express
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;