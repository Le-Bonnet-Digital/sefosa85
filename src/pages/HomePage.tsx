import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { getFormationTheme } from '../utils/formationThemes';
import StructuredData from '../components/SEO/StructuredData';

const HomePage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('cta_click', { location });
  };

  const handleFormationClick = (formation: string) => {
    trackEvent('formation_click', { formation, location: 'homepage' });
  };

  const sstTheme = getFormationTheme('sst');
  const psc1Theme = getFormationTheme('psc1');
  const macSstTheme = getFormationTheme('mac-sst');
  const epiTheme = getFormationTheme('epi');
  const gqsTheme = getFormationTheme('gestes-qui-sauvent');
  const pse1Theme = getFormationTheme('pse1');
  const extincteurTheme = getFormationTheme('extincteur');

  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          name: "SEFOSA",
          description: "Formateur indépendant spécialisé en secourisme et sécurité incendie en Vendée",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"],
          address: {
            addressRegion: "Vendée",
            addressCountry: "FR"
          }
        }}
      />
      
      <div className="pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="block">Formations</span>
                  <span className="block text-red-400">Secourisme</span>
                  <span className="block">& Incendie</span>
                </h1>
                
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-xl lg:text-2xl text-blue-100">
                    Vendée & départements limitrophes
                  </p>
                </div>

                <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  <strong>SEFOSA</strong>, formateur indépendant certifié, accompagne les professionnels et particuliers aux gestes
                  qui sauvent. Intervention sur site, formations certifiantes SST, PSC1, EPI.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/devis-et-calendrier"
                    onClick={() => handleCTAClick('hero_primary')}
                    className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-all transform hover:-translate-y-1 hover:shadow-xl font-semibold text-lg inline-flex items-center justify-center gap-2"
                  >
                    Devis en moins d'1 minute
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+33672128440"
                    onClick={() => handleCTAClick('hero_phone')}
                    className="bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-semibold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    06 72 12 84 40
                  </a>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Intervention sur site</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">Pourquoi choisir SEFOSA ?</h3>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {'★'.repeat(5)}
                      </div>
                      <span className="font-semibold">4.9/5</span>
                      <span className="text-blue-200">(47 avis)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Formateur certifié</h4>
                        <p className="text-sm text-blue-100">15+ ans d'expérience, habilitations à jour</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Intra & Inter-entreprise</h4>
                        <p className="text-sm text-blue-100">Formations sur site ou en centre</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Assurance RC Pro</h4>
                        <p className="text-sm text-blue-100">Couverture complète, conformité garantie</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Réactivité</h4>
                        <p className="text-sm text-blue-100">Intervention sous 48-72h, devis express</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nos formations certifiantes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des formations pratiques et théoriques pour acquérir les compétences essentielles 
                en secourisme et prévention incendie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SST */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${sstTheme.gradient} flex items-center justify-center`}>
                  <Shield className="w-24 h-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Formation SST
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sauveteur Secouriste du Travail - 14h de formation initiale, MAC 7h tous les 24 mois.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">Durée: 14h (initial)</span>
                      <span className="block">Validité: 24 mois</span>
                    </div>
                    <Link
                      to="/formations/secourisme/sst"
                      onClick={() => handleFormationClick('SST')}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 ${sstTheme.button}`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* PSC1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${psc1Theme.gradient} flex items-center justify-center`}>
                  <Users className="w-24 h-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Formation PSC1
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Prévention et Secours Civiques niveau 1 - Formation citoyenne aux premiers secours.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">Durée: 7h</span>
                      <span className="block">Public: Tous</span>
                    </div>
                    <Link
                      to="/formations/secourisme/psc1"
                      onClick={() => handleFormationClick('PSC1')}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 ${psc1Theme.button}`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* EPI */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${epiTheme.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl">🔥</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Formation EPI
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Équipier de Première Intervention - Lutte contre l'incendie et évacuation.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">Durée: 3h30</span>
                      <span className="block">Pratique + théorie</span>
                    </div>
                    <Link
                      to="/formations/incendie/epi"
                      onClick={() => handleFormationClick('EPI')}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 ${epiTheme.button}`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gestes Qui Sauvent */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${gqsTheme.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl">💚</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Gestes Qui Sauvent
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Formation courte aux gestes d'urgence - Accessible à tous, sans prérequis.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">Durée: 2h</span>
                      <span className="block">Formation express</span>
                    </div>
                    <Link
                      to="/formations/secourisme/gestes-qui-sauvent"
                      onClick={() => handleFormationClick('GQS')}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 ${gqsTheme.button}`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* PSE1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${pse1Theme.gradient} flex items-center justify-center`}>
                  <Award className="w-24 h-24 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Formation PSE1
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Premiers Secours en Équipe niveau 1 - Formation approfondie pour secouristes.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">Durée: 35h</span>
                      <span className="block">Niveau avancé</span>
                    </div>
                    <Link
                      to="/formations/secourisme/pse1"
                      onClick={() => handleFormationClick('PSE1')}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 ${pse1Theme.button}`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Extincteur */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${extincteurTheme.gradient} flex items-center justify-center`}>
                  <div className="text-white text-6xl">🧯</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Manipulation d'extincteur
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Apprentissage pratique de l'utilisation des extincteurs sur feu réel.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="block">Durée: 1h30</span>
                      <span className="block">Pratique sur feux réels</span>
                    </div>
                    <Link
                      to="/formations/incendie/extincteur"
                      onClick={() => handleFormationClick('Extincteur')}
                      className={`px-4 py-2 rounded-lg transition-colors font-medium inline-flex items-center gap-2 ${extincteurTheme.button}`}
                    >
                      Découvrir
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/formations/secourisme"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Voir toutes les formations
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Notre zone d'intervention
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SEFOSA intervient en Vendée et dans les départements limitrophes pour 
                vos formations intra-entreprise sur site.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/vendee/la-roche-sur-yon"
                className={`bg-gradient-to-br ${psc1Theme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-xl font-bold mb-2">La Roche-sur-Yon</h3>
                <p className="text-white/80">Préfecture de la Vendée</p>
                <div className="mt-4 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Vendée (85)</span>
                </div>
              </Link>

              <Link
                to="/vendee/les-sables-d-olonne"
                className={`bg-gradient-to-br ${gqsTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-xl font-bold mb-2">Les Sables-d'Olonne</h3>
                <p className="text-white/80">Station balnéaire</p>
                <div className="mt-4 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Vendée (85)</span>
                </div>
              </Link>

              <Link
                to="/vendee/challans"
                className={`bg-gradient-to-br ${pse1Theme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-xl font-bold mb-2">Challans</h3>
                <p className="text-white/80">Nord Vendée</p>
                <div className="mt-4 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Vendée (85)</span>
                </div>
              </Link>

              <Link
                to="/vendee"
                className={`bg-gradient-to-br ${macSstTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-xl font-bold mb-2">+ Toute la Vendée</h3>
                <p className="text-white/80">& départements limitrophes</p>
                <div className="mt-4 flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>44, 49, 79, 85</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className={`py-16 bg-gradient-to-r ${sstTheme.gradient} text-white`}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prêt à former vos équipes ?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Obtenez votre devis personnalisé en moins d'une minute. 
              Réponse garantie sous 24h.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${sstTheme.text}`}
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+33672128440"
                className={`px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${sstTheme.button}`}
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 - 47 avis Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-white/80" />
                <span>Assurance RC Pro</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;