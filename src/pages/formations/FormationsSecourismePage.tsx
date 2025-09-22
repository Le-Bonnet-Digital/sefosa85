import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Clock, 
  Award, 
  Heart, 
  CheckCircle,
  ChevronRight,
  Phone,
  FileText,
  Star
} from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import StructuredData from '../../components/SEO/StructuredData';
import BreadcrumbNav from '../../components/UI/BreadcrumbNav';
import { formationThemes, getFormationTheme } from '../../utils/formationThemes';

const FormationsSecourismePage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('secourisme_cta_click', { location });
  };

  const sstTheme = getFormationTheme('sst');
  const macSstTheme = getFormationTheme('mac-sst');
  const psc1Theme = getFormationTheme('psc1');
  const gqsTheme = getFormationTheme('gestes-qui-sauvent');
  const pse1Theme = getFormationTheme('pse1');

  const formations = [
    {
      slug: 'sst',
      title: 'SST - Sauveteur Secouriste du Travail',
      duration: '14h',
      renewal: 'MAC 7h / 24 mois',
      description: 'Formation obligatoire pour porter secours aux victimes d\'accident du travail',
      participants: '4-10 personnes',
      price: 'À partir de 1200€ HT',
      themeKey: 'sst',
      icon: Shield,
      mandatory: true,
      popular: true
    },
    {
      slug: 'mac-sst',
      title: 'MAC SST - Maintien et Actualisation',
      duration: '7h',
      renewal: '24 mois',
      description: 'Renouvellement obligatoire de la formation SST avant expiration',
      participants: '4-10 personnes',
      price: 'À partir de 800€ HT',
      themeKey: 'mac-sst',
      icon: Award,
      mandatory: true
    },
    {
      slug: 'psc1',
      title: 'PSC1 - Prévention et Secours Civiques',
      duration: '7h',
      renewal: 'Conseillée tous les 3 ans',
      description: 'Formation citoyenne aux premiers secours pour tous les publics',
      participants: '6-10 personnes',
      price: '60€ HT / personne',
      themeKey: 'psc1',
      icon: Heart,
      citizen: true,
      popular: true
    },
    {
      slug: 'gestes-qui-sauvent',
      title: 'GQS - Gestes Qui Sauvent',
      duration: '2h',
      renewal: '-',
      description: 'Formation courte et accessible aux gestes d\'urgence essentiels',
      participants: '6-12 personnes',
      price: '35€ HT / personne',
      themeKey: 'gestes-qui-sauvent',
      icon: Users,
      express: true
    },
    {
      slug: 'pse1',
      title: 'PSE1 - Premiers Secours en Équipe',
      duration: '35h',
      renewal: 'Formation continue',
      description: 'Formation approfondie pour équipiers secouristes (associations, entreprises)',
      participants: '6-8 personnes',
      price: 'Sur devis',
      themeKey: 'pse1',
      icon: Award,
      advanced: true
    },
    {
      slug: 'pse2',
      title: 'PSE2 - Premiers Secours en Équipe',
      duration: '35h',
      renewal: 'Formation continue',
      description: 'Perfectionnement PSE1 pour secouristes expérimentés',
      participants: '6-8 personnes',
      price: 'Sur devis',
      themeKey: 'pse2',
      icon: Award,
      advanced: true,
      prerequis: 'PSE1 requis'
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' }
  ];

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Formations Secourisme Vendée",
          description: "Formations secourisme certifiantes en Vendée : SST, MAC SST, PSC1, PSE1/2, Gestes Qui Sauvent. Intra et inter-entreprise.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"]
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1e3a8a] to-[#172554] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Formations Secourisme en Vendée
                <span className="block text-2xl lg:text-3xl font-normal text-blue-100 mt-2">
                  SST • MAC SST • PSC1 • PSE1/2 • GQS
                </span>
              </h1>

              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                <strong>SEFOSA</strong> dispense toutes les formations secourisme certifiantes 
                en <strong>Vendée et départements limitrophes</strong>. 
                Interventions sur site ou en centre, formateur agréé.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/devis-et-calendrier"
                  onClick={() => handleCTAClick('hero_primary')}
                  className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Devis gratuit sous 24h
                </Link>
                <a
                  href="tel:+33672128440"
                  onClick={() => handleCTAClick('hero_phone')}
                  className="bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  06 72 12 84 40
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Intervention sur site</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Matériel fourni</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Certificats reconnus</span>
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
                        {formation.citizen && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                            Citoyenne
                          </span>
                        )}
                        {formation.express && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Express
                          </span>
                        )}
                        {formation.advanced && (
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                            Avancée
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

                      {formation.prerequis && (
                        <div className="mb-4 p-3 bg-yellow-50 rounded-lg">
                          <p className="text-sm text-yellow-800">
                            <strong>Prérequis :</strong> {formation.prerequis}
                          </p>
                        </div>
                      )}

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
                        to={`/formations/secourisme/${formation.slug}`}
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
              Obligations légales en secourisme
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-600 mb-4">Code du travail</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Article R4224-15 :</strong> Un membre du personnel reçoit 
                    la formation de secouriste nécessaire pour donner les premiers secours.
                  </p>
                  <div>
                    <strong>Effectifs minimum :</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>10% minimum dans les ateliers dangereux</li>
                      <li>1 SST présent en permanence (ateliers ≥15 personnes)</li>
                      <li>Adaptation selon l'évaluation des risques</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Secteur public</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Les agents publics doivent également bénéficier 
                    d'une formation aux premiers secours adaptée.
                  </p>
                  <div>
                    <strong>Formations recommandées :</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>PSC1 pour la sensibilisation générale</li>
                      <li>SST pour les postes à risques</li>
                      <li>Formation continue et recyclage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 rounded-xl p-6">
              <p className="text-yellow-800 text-center">
                <strong>Important :</strong> Ces informations sont données à titre indicatif. 
                Consultez votre médecin du travail et/ou juriste pour une analyse précise de vos obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Comparatif formations */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Quelle formation choisir ?
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Formation</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Public</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Durée</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Validité</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Objectif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">GQS</td>
                    <td className="px-6 py-4 text-center text-gray-600">Tous publics</td>
                    <td className="px-6 py-4 text-center text-gray-600">2h</td>
                    <td className="px-6 py-4 text-center text-gray-600">-</td>
                    <td className="px-6 py-4 text-center text-gray-600">Sensibilisation</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-6 py-4 font-medium text-gray-900">PSC1</td>
                    <td className="px-6 py-4 text-center text-gray-600">Citoyens</td>
                    <td className="px-6 py-4 text-center text-gray-600">7h</td>
                    <td className="px-6 py-4 text-center text-gray-600">Vie entière</td>
                    <td className="px-6 py-4 text-center text-gray-600">Premiers secours</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-6 py-4 font-medium text-gray-900">SST</td>
                    <td className="px-6 py-4 text-center text-gray-600">Salariés</td>
                    <td className="px-6 py-4 text-center text-gray-600">14h</td>
                    <td className="px-6 py-4 text-center text-gray-600">24 mois</td>
                    <td className="px-6 py-4 text-center text-gray-600">Travail + Prévention</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">PSE1</td>
                    <td className="px-6 py-4 text-center text-gray-600">Secouristes</td>
                    <td className="px-6 py-4 text-center text-gray-600">35h</td>
                    <td className="px-6 py-4 text-center text-gray-600">Continue</td>
                    <td className="px-6 py-4 text-center text-gray-600">Secours en équipe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nos interventions en Vendée et départements limitrophes
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              SEFOSA se déplace pour vos formations secourisme intra-entreprise 
              dans toute la Vendée et les départements voisins.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Link
                to="/vendee/la-roche-sur-yon"
                className={`bg-gradient-to-br ${psc1Theme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-lg font-bold mb-2">La Roche-sur-Yon</h3>
                <p className="text-white/80 text-sm">Préfecture • Centre administratif</p>
              </Link>

              <Link
                to="/vendee/les-sables-d-olonne"
                className={`bg-gradient-to-br ${gqsTheme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
              >
                <h3 className="text-lg font-bold mb-2">Les Sables-d'Olonne</h3>
                <p className="text-white/80 text-sm">Littoral • Tourisme</p>
              </Link>

              <Link
                to="/vendee/challans"
                className={`bg-gradient-to-br ${pse1Theme.gradient} text-white rounded-xl p-6 hover:shadow-xl transform hover:-translate-y-1 transition-all`}
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

            <div className="bg-blue-50 rounded-xl p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold text-gray-900">Pourquoi nous choisir ?</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Réactivité</h4>
                  <p className="text-sm text-gray-600">Intervention sous 48-72h</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Sur mesure</h4>
                  <p className="text-sm text-gray-600">Adaptée à vos risques</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-1">Expérience</h4>
                  <p className="text-sm text-gray-600">15+ ans, agréments à jour</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={`py-16 bg-gradient-to-r ${sstTheme.gradient} text-white`}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Formez vos équipes aux gestes qui sauvent
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Devis personnalisé gratuit • Réponse garantie sous 24h • Intervention rapide
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${sstTheme.text}`}
              >
                <FileText className="w-5 h-5" />
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33672128440"
                className={`px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${sstTheme.button}`}
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

export default FormationsSecourismePage;