import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Clock, 
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  MapPin,
  Star,
  Award,
  UserCheck,
  Shield
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';

const GQSPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleCTAClick = (location: string) => {
    trackEvent('gqs_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Protéger",
      content: [
        "Reconnaître les dangers pour soi et la victime",
        "Supprimer ou isoler le danger",
        "Soustraire la victime au danger sans s'exposer"
      ]
    },
    {
      title: "Alerter",
      content: [
        "Identifier le bon numéro d'urgence (15, 18, 112)",
        "Transmettre les informations essentielles",
        "Suivre les consignes de l'opérateur"
      ]
    },
    {
      title: "Secourir - Hémorragies",
      content: [
        "Reconnaître une hémorragie externe",
        "Réaliser une compression directe",
        "Maintenir la pression jusqu'aux secours"
      ]
    },
    {
      title: "Secourir - Perte de connaissance",
      content: [
        "Vérifier la conscience et la respiration",
        "Placer en Position Latérale de Sécurité (PLS)",
        "Surveiller la victime"
      ]
    },
    {
      title: "Secourir - Arrêt cardiaque",
      content: [
        "Reconnaître un arrêt cardio-respiratoire",
        "Réaliser un massage cardiaque",
        "Utiliser un défibrillateur automatique (DAE)"
      ]
    },
    {
      title: "Secourir - Obstruction des voies aériennes",
      content: [
        "Identifier l'étouffement",
        "Réaliser les claques dans le dos",
        "Effectuer les compressions abdominales"
      ]
    }
  ];

  const faqData = [
    {
      question: "Quelle est la différence entre GQS et PSC1 ?",
      answer: "Les Gestes Qui Sauvent (GQS) sont une formation courte de 2h qui enseigne les gestes d'urgence essentiels. Le PSC1 est plus complet (7h) et couvre davantage de situations. Les GQS sont un condensé pratique du PSC1."
    },
    {
      question: "À partir de quel âge peut-on suivre les GQS ?",
      answer: "La formation GQS est accessible dès 10 ans. Elle est adaptée aux capacités de chaque participant, enfants comme adultes."
    },
    {
      question: "Les GQS donnent-ils droit à un certificat ?",
      answer: "Oui, une attestation de formation aux Gestes Qui Sauvent est délivrée à l'issue de la formation. Cette attestation est reconnue officiellement."
    },
    {
      question: "Peut-on organiser une session GQS en entreprise ?",
      answer: "Absolument ! Les GQS sont parfaits pour sensibiliser rapidement vos équipes. Formation courte, impactante, adaptée aux contraintes professionnelles."
    },
    {
      question: "Les GQS remplacent-ils une formation SST ?",
      answer: "Non, les GQS sont complémentaires. Pour les obligations légales en entreprise, la formation SST reste nécessaire. Les GQS sont une excellente sensibilisation."
    },
    {
      question: "Combien coûte une formation GQS ?",
      answer: "Tarif individuel : 30€ HT. Pour les groupes et entreprises, nous établissons un devis personnalisé selon vos besoins."
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' },
    { label: 'GQS - Gestes Qui Sauvent', href: '/formations/secourisme/gestes-qui-sauvent' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "GQS - Gestes Qui Sauvent",
          description: "Formation courte de 2h aux gestes d'urgence essentiels. Accessible dès 10 ans.",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "2 heures"
        }}
      />

      <StructuredData 
        type="FAQPage" 
        data={{
          mainEntity: faqData.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-500 to-green-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-400/20 px-4 py-2 rounded-full mb-6">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Formation citoyenne express</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Gestes Qui Sauvent Vendée
                  <span className="block text-2xl lg:text-3xl font-normal text-green-100 mt-2">
                    Formation 2h aux gestes d'urgence
                  </span>
                </h1>

                <p className="text-xl text-green-100 mb-6 leading-relaxed">
                  <strong>Apprenez les gestes d'urgence essentiels</strong> en seulement 2h. 
                  Formation courte et efficace, accessible à tous dès 10 ans.
                </p>

                <div className="flex items-center gap-6 mb-8 text-green-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>2h de formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>6 à 12 participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Vendée + 44/49/79</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/devis-et-calendrier"
                    onClick={() => handleCTAClick('hero_primary')}
                    className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    S'inscrire aux GQS
                  </Link>
                  <a
                    href="tel:+33672128440"
                    onClick={() => handleCTAClick('hero_phone')}
                    className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    06 72 12 84 40
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation GQS</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>2 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Âge minimum</span>
                      <span>10 ans</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Prérequis</span>
                      <span>Aucun</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>6 à 12</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Attestation</span>
                      <span>Officielle</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Tarif individuel</span>
                      <span>30€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Formation express</span>
                    </div>
                    <p className="text-sm text-yellow-100">
                      Idéale pour une première sensibilisation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pour qui sont destinés les Gestes Qui Sauvent ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-blue-100">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Grand Public</h3>
                <p className="text-gray-600 text-sm">Citoyens souhaitant une formation courte et efficace</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-100">
                  <UserCheck className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Jeunes</h3>
                <p className="text-gray-600 text-sm">Collégiens, lycéens, étudiants, service civique</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-purple-100">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Entreprises</h3>
                <p className="text-gray-600 text-sm">Sensibilisation rapide des équipes</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-red-100">
                  <Heart className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Associations</h3>
                <p className="text-gray-600 text-sm">Clubs sportifs, associations, bénévoles</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-green-600 mb-4 text-center">
                Une formation courte mais complète
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">2h</div>
                  <p className="text-gray-700">Durée optimisée</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                  <p className="text-gray-700">Gestes essentiels</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-700">Pratique</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Programme des Gestes Qui Sauvent
            </h2>

            <div className="mb-8">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">Objectifs pédagogiques</h3>
                <p className="text-gray-700 mb-4">
                  Acquérir les compétences nécessaires pour réaliser les gestes d'urgence dans l'attente des secours organisés.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Savoir :</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Identifier une situation d'urgence</li>
                      <li>• Donner l'alerte efficacement</li>
                      <li>• Reconnaître les détresses vitales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Savoir-faire :</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Réaliser les gestes de secours d'urgence</li>
                      <li>• Utiliser un défibrillateur</li>
                      <li>• Protéger et sécuriser</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {programmeModules.map((module, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                    {activeAccordion === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-white">
                      <ul className="space-y-2">
                        {module.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Questions fréquentes GQS
            </h2>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(100 + index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <h3 className="font-semibold text-gray-900">{item.question}</h3>
                    {activeAccordion === 100 + index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {activeAccordion === 100 + index && (
                    <div className="px-6 py-4 bg-white">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              2h pour apprendre les gestes qui sauvent
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Formation express • Accessible dès 10 ans • Attestation officielle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                S'inscrire aux GQS
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Formation 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Dès 10 ans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Attestation officielle</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GQSPage;