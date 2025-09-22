import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Shield, Award, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SEFOSA</h3>
                <p className="text-sm text-gray-400">Sensibiliser • Former • Sauver</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Formateur indépendant spécialisé dans le secourisme et la sécurité incendie.
              Interventions en Vendée et départements limitrophes.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/p/SEFOSA-61552012141723/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Formations</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Secourisme</h5>
                <div className="space-y-2">
                  <Link to="/formations/secourisme/sst" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    SST
                  </Link>
                  <Link to="/formations/secourisme/mac-sst" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    MAC SST
                  </Link>
                  <Link to="/formations/secourisme/psc1" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    PSC1
                  </Link>
                  <Link to="/formations/secourisme/gestes-qui-sauvent" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    Gestes Qui Sauvent
                  </Link>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Incendie</h5>
                <div className="space-y-2">
                  <Link to="/formations/incendie/epi" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    EPI
                  </Link>
                  <Link to="/formations/incendie/extincteur" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    Manipulation extincteur
                  </Link>
                  <Link to="/formations/incendie/evacuation" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    Évacuation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Zone d'intervention</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Vendée (85)</h5>
                <div className="space-y-2">
                  <Link to="/vendee/la-roche-sur-yon" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    La Roche-sur-Yon
                  </Link>
                  <Link to="/vendee/les-sables-d-olonne" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    Les Sables-d'Olonne
                  </Link>
                  <Link to="/vendee/challans" className="block text-gray-400 hover:text-white text-sm transition-colors">
                    Challans
                  </Link>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2">Départements limitrophes</h5>
                <div className="space-y-2">
                  <span className="block text-gray-400 text-sm">Loire-Atlantique (44)</span>
                  <span className="block text-gray-400 text-sm">Maine-et-Loire (49)</span>
                  <span className="block text-gray-400 text-sm">Deux-Sèvres (79)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Certifications */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+33672128440" className="text-gray-300 hover:text-white transition-colors">
                    06 72 12 84 40
                  </a>
                  <div className="text-xs text-gray-500 mt-1">Lundi - Vendredi : 8h-18h</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@sefosa85.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@sefosa85.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Vendée et départements limitrophes
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <h5 className="text-sm font-medium text-gray-300">Garanties</h5>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Assurance RC Professionnelle</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Award className="w-4 h-4 text-green-500" />
                <span>Formateur certifié</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Reviews Widget Placeholder */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Avis clients Google</h4>
            <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-gray-300 font-medium">4.9/5</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Basé sur 47 avis clients
              </p>
              <Link 
                to="/avis" 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Voir tous les avis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex flex-wrap items-center gap-6">
              <span>© 2024 SEFOSA. Tous droits réservés.</span>
              <Link to="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Gestion des cookies
              </Link>
            </div>
            <div className="text-center md:text-right">
              <span>SIRET: 123 456 789 00012</span><br />
              <span className="text-xs">N° déclaration d'activité: 52850123456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;