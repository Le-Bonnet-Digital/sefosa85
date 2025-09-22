import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Flame, 
  CheckCircle,
  ChevronRight,
  Phone,
  FileText,
  Star,
  MapPin
} from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import StructuredData from '../../components/SEO/StructuredData';
import BreadcrumbNav from '../../components/UI/BreadcrumbNav';
import { formationThemes, getFormationTheme } from '../../utils/formationThemes';

const FormationsIncendiePage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('incendie_cta_click', { location });
  };

  const epiTheme = getFormationTheme('epi');
  const extincteurTheme = getFormationTheme('extincteur');
  const evacuationTheme = getFormationTheme('evacuation');
  const macSstTheme = getFormationTheme('mac-sst');

  const formations = [
    {
      slug: 'epi',
      title: 'EPI - Équipier de Première Intervention',
      duration: '3h30',
      renewal: 'Annuelle recommandée',
      description: 'Formation complète à la lutte contre l\'incendie et évacuation',
      participants: '4-12 personnes',
      price: 'À partir de 600€ HT',
      themeKey: 'epi',
      icon: Shield,
      mandatory: true,
      popular: true
    },
    {
      slug: 'extincteur',
      title: 'Manipulation d\'extincteur',
      duration: '1h30',
      renewal: 'Annuelle',
      description: 'Apprentissage pratique sur feux réels avec différents types d\'extincteurs',
      participants: '6-15 personnes',
      price: 'À partir de 400€ HT',
      themeKey: 'extincteur',
      icon: Flame,
      practical: true,
      popular: true
    },
    {
      slug: 'evacuation',
      title: 'Évacuation incendie',
      duration: '2h',
      renewal: 'Annuelle',
      description: 'Procédures d\'évacuation, rôle des guides et serre-files',
      participants: '8-20 personnes',
      price: 'À partir de 350€ HT',
      themeKey: 'evacuation',
      icon: Users,
      theoretical: true
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Incendie', href: '/formations/incendie' }
  ];

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Formations Incendie Vendée",
          description: "Formations sécurité incendie en Vendée : EPI, manipulation extincteur, évacuation. Intra et inter-entreprise.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"]
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className={`bg-gradient-to-br ${epiTheme.gradient} text-white py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Formations Sécurité Incendie en Vendée
                <span className="block text-2xl lg:text-3xl font-normal text-white/80 mt-2">
                  EPI • Extincteur • Évacuation
                </span>
              </h1>

              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                <strong>SEFOSA</strong> forme vos équipes à la prévention et lutte contre l'incendie
                en <strong>Vendée et départements limitrophes</strong>.
                Formations pratiques sur feux réels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/devis-et-calendrier"
                  onClick={() => handleCTAClick('hero_primary')}
                  className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${epiTheme.text}`}
                >
                  <FileText className="w-5 h-5" />
                  Devis gratuit sous 24h
                </Link>
                <a
                  href="tel:+33672128440"
                  onClick={() => handleCTAClick('hero_phone')}
                  className={`px-8 py-4 rounded-lg transition-all font-bold text-lg inline-flex items-center justify-center gap-2 ${epiTheme.button}`}
                >
                  <Phone className="w-5 h-5" />
                  06 72 12 84 40
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Feux réels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Sur site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Matériel fourni</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {formations.map((formation) => {
                const IconComponent = formation.icon;
                const theme = formationThemes[formation.themeKey];
                return (
                  <div key={formation.slug} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                    {formation.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                          Populaire
                        </span>
                      </div>
                    )}

                    <div className={`h-48 bg-gradient-to-br ${theme.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <IconComponent className="w-24 h-24 text-white" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {formation.mandatory && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                            Obligatoire
                          </span>
                        )}
                        {formation.practical && (
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                            Pratique
                          </span>
                        )}
                        {formation.theoretical && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            Théorique
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {formation.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {formation.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Durée</span>
                          <span className="font-medium">{formation.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Renouvellement</span>
                          <span className="font-medium">{formation.renewal}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Participants</span>
                          <span className="font-medium">{formation.participants}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Tarif intra</span>
                          <span className="font-semibold text-green-600">{formation.price}</span>
                        </div>
                      </div>

                      <Link
                        to={`/formations/incendie/${formation.slug}`}
                        className={`w-full py-3 px-4 rounded-lg transition-colors font-semibold inline-flex items-center justify-center gap-2 ${theme.button}`}
                      >
                        Découvrir la formation
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Obligations légales */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Obligations en matière de sécurité incendie
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-600 mb-4">Code du travail</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Article R4227-28 :</strong> L'employeur doit prendre les mesures 
                    nécessaires pour que tout commencement d'incendie puisse être rapidement 
                    et efficacement combattu.
                  </p>
                  <div>
                    <strong>Formation obligatoire :</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Consignes de sécurité incendie</li>
                      <li>Utilisation des moyens de premier secours</li>
                      <li>Procédures d'évacuation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-orange-600 mb-4">ERP - Établissements recevant du public</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Formation du personnel à la sécurité incendie obligatoire 
                    selon le règlement de sécurité.
                  </p>
                  <div>
                    <strong>Formations requises :</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Équipiers de première intervention (EPI)</li>
                      <li>Manipulation des extincteurs</li>
                      <li>Évacuation du public</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 rounded-xl p-6">
              <p className="text-yellow-800 text-center">
                <strong>Important :</strong> Ces informations sont données à titre indicatif. 
                Consultez votre préventeur ou les services compétents pour une analyse précise de vos obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos interventions en Vendée et départements limitrophes
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              SEFOSA se déplace pour vos formations sécurité incendie intra-entreprise 
              dans toute la Vendée et les départements voisins.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link
                to="/vendee/la-roche-sur-yon"
                className={`bg-gradient-to-br ${epiTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-lg font-bold mb-2">La Roche-sur-Yon</h3>
                <p className="text-white/80 text-sm">Préfecture • Centre administratif</p>
              </Link>

              <Link
                to="/vendee/les-sables-d-olonne"
                className={`bg-gradient-to-br ${extincteurTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-lg font-bold mb-2">Les Sables-d'Olonne</h3>
                <p className="text-white/80 text-sm">Littoral • Tourisme</p>
              </Link>

              <Link
                to="/vendee/challans"
                className={`bg-gradient-to-br ${evacuationTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-lg font-bold mb-2">Challans</h3>
                <p className="text-white/80 text-sm">Nord Vendée • Marais</p>
              </Link>

              <Link
                to="/vendee"
                className={`bg-gradient-to-br ${macSstTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-lg font-bold mb-2">Toute la Vendée</h3>
                <p className="text-white/80 text-sm">+ Dép. limitrophes</p>
              </Link>
            </div>

            <div className="bg-red-50 rounded-xl p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold text-gray-900">Pourquoi nous choisir ?</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Flame className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Feux réels</h4>
                  <p className="text-sm text-gray-600">Pratique sur vrais foyers</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Sur site</h4>
                  <p className="text-sm text-gray-600">Nous venons chez vous</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Expérience</h4>
                  <p className="text-sm text-gray-600">15+ ans, certifié</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={`py-16 bg-gradient-to-r ${epiTheme.gradient} text-white`}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Formez vos équipes à la sécurité incendie
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Devis personnalisé gratuit • Réponse garantie sous 24h • Feux réels
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${epiTheme.text}`}
              >
                <FileText className="w-5 h-5" />
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33672128440"
                className={`px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${epiTheme.button}`}
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationsIncendiePage;