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

const PSE1Page = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleCTAClick = (location: string) => {
    trackEvent('pse1_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Le secouriste",
      content: [
        "Rôle et responsabilités du secouriste",
        "Cadre juridique de l'intervention",
        "Éthique et déontologie",
        "Hygiène et asepsie"
      ]
    },
    {
      title: "La chaîne de secours et bilans",
      content: [
        "Organisation des secours en France",
        "Bilan circonstanciel",
        "Bilan d'urgence vitale",
        "Bilan complémentaire"
      ]
    },
    {
      title: "L'obstruction aiguë des voies aériennes",
      content: [
        "Obstruction partielle et totale",
        "Manœuvres de désobstruction",
        "Cas particuliers",
        "Surveillance post-désobstruction"
      ]
    },
    {
      title: "Les hémorragies",
      content: [
        "Hémorragies externes",
        "Hémorragies internes",
        "Hémorragies extériorisées",
        "Techniques d'hémostase"
      ]
    },
    {
      title: "L'inconscience",
      content: [
        "Causes de l'inconscience",
        "Libération des voies aériennes",
        "Position latérale de sécurité",
        "Surveillance continue"
      ]
    },
    {
      title: "L'arrêt cardio-respiratoire",
      content: [
        "Reconnaissance de l'ACR",
        "Réanimation cardio-pulmonaire",
        "Utilisation du défibrillateur",
        "Réanimation spécialisée"
      ]
    },
    {
      title: "Les détresses vitales",
      content: [
        "Détresse respiratoire",
        "Détresse circulatoire",
        "Détresse neurologique",
        "Oxygénothérapie"
      ]
    },
    {
      title: "Les malaises et la maladie",
      content: [
        "Malaises généraux",
        "Pathologies spécifiques",
        "Conduite à tenir",
        "Surveillance et transport"
      ]
    },
    {
      title: "Les accidents liés à la chaleur",
      content: [
        "Coup de chaleur",
        "Épuisement par la chaleur",
        "Crampes de chaleur",
        "Prévention et traitement"
      ]
    },
    {
      title: "Les traumatismes",
      content: [
        "Traumatismes des membres",
        "Traumatismes du rachis",
        "Traumatismes du crâne",
        "Immobilisation et relevage"
      ]
    }
  ];

  const faqData = [
    {
      question: "Quelle est la différence entre PSE1 et PSC1 ?",
      answer: "Le PSE1 est une formation plus poussée (35h) destinée aux équipiers secouristes, tandis que le PSC1 (7h) est une formation citoyenne de base. Le PSE1 permet d'intervenir en équipe avec du matériel spécialisé."
    },
    {
      question: "Qui peut suivre la formation PSE1 ?",
      answer: "La formation PSE1 est ouverte à tous dès 16 ans. Elle est particulièrement adaptée aux bénévoles d'associations de secours, sapeurs-pompiers volontaires, et professionnels de la sécurité."
    },
    {
      question: "Le PSE1 est-il obligatoire pour certains métiers ?",
      answer: "Le PSE1 peut être exigé pour certains postes (agent de sécurité, maître-nageur, moniteur de sport) et est souvent demandé pour intégrer les services de secours."
    },
    {
      question: "Quelle est la durée de validité du PSE1 ?",
      answer: "Le certificat PSE1 est valable à vie, mais une formation continue annuelle de 6h minimum est obligatoire pour maintenir ses compétences opérationnelles."
    },
    {
      question: "Peut-on passer directement le PSE2 après le PSE1 ?",
      answer: "Oui, le PSE2 peut être suivi immédiatement après l'obtention du PSE1. Il est même recommandé de les enchaîner pour avoir une formation complète d'équipier secouriste."
    },
    {
      question: "Le PSE1 permet-il d'utiliser l'oxygène ?",
      answer: "Oui, la formation PSE1 inclut l'apprentissage de l'oxygénothérapie et l'utilisation des appareils d'oxygénation en intervention."
    }
  ];

  const publicsCibles = [
    {
      title: "Associations de secours",
      description: "Bénévoles Croix-Rouge, Protection Civile, FFSS",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Sapeurs-pompiers volontaires",
      description: "Formation de base pour intégrer les services d'incendie",
      icon: Shield,
      color: "text-orange-500"
    },
    {
      title: "Professionnels sécurité",
      description: "Agents de sécurité, surveillants, maîtres-nageurs",
      icon: UserCheck,
      color: "text-blue-500"
    },
    {
      title: "Encadrants sportifs",
      description: "Moniteurs, éducateurs, responsables d'activités",
      icon: Users,
      color: "text-green-500"
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' },
    { label: 'PSE1 - Premiers Secours en Équipe', href: '/formations/secourisme/pse1' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "PSE1 - Premiers Secours en Équipe niveau 1",
          description: "Formation d'équipier secouriste de 35h. Techniques avancées de secourisme avec matériel spécialisé.",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "35 heures"
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
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-400/20 px-4 py-2 rounded-full mb-6">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Formation équipier secouriste</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Formation PSE1 Vendée
                  <span className="block text-2xl lg:text-3xl font-normal text-orange-100 mt-2">
                    Premiers Secours en Équipe niveau 1
                  </span>
                </h1>

                <p className="text-xl text-orange-100 mb-6 leading-relaxed">
                  <strong>Devenez équipier secouriste</strong> avec notre formation PSE1 de 35h. 
                  Techniques avancées, matériel spécialisé, intervention en équipe.
                </p>

                <div className="flex items-center gap-6 mb-8 text-orange-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>35h de formation</span>
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
                    className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    S'inscrire au PSE1
                  </Link>
                  <a
                    href="tel:+33672128440"
                    onClick={() => handleCTAClick('hero_phone')}
                    className="bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    06 72 12 84 40
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation PSE1</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>35 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Âge minimum</span>
                      <span>16 ans</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Prérequis</span>
                      <span>PSC1 recommandé</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>6 à 12</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Formation continue</span>
                      <span>6h/an</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Tarif individuel</span>
                      <span>280€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Certificat PSE1</span>
                    </div>
                    <p className="text-sm text-green-100">
                      Reconnu par le Ministère de l'Intérieur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publics cibles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pour qui est destinée la formation PSE1 ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {publicsCibles.map((publicItem, index) => {
                const IconComponent = publicItem.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gray-100">
                      <IconComponent className={`w-8 h-8 ${publicItem.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{publicItem.title}</h3>
                    <p className="text-gray-600 text-sm">{publicItem.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-orange-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-orange-600 mb-4 text-center">
                Formation d'équipier secouriste
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">35h</div>
                  <p className="text-gray-700">Formation complète</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">10</div>
                  <p className="text-gray-700">Modules techniques</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">6h</div>
                  <p className="text-gray-700">Formation continue/an</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme détaillé */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Programme de formation PSE1
            </h2>

            <div className="space-y-4 mb-12">
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
              Questions fréquentes PSE1
            </h2>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(100 + index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
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
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Devenez équipier secouriste
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Formation PSE1 • 35h de techniques avancées • Matériel spécialisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                S'inscrire au PSE1
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-orange-700 text-white px-8 py-4 rounded-lg hover:bg-orange-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
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

export default PSE1Page;