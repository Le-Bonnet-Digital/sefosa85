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
  Shield,
  Stethoscope
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';
import { getFormationTheme, getFormationTextHex, hexToRgba } from '../../../utils/formationThemes';

const PSE2Page = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const theme = getFormationTheme('pse2');
  const themeHex = getFormationTextHex('pse2');
  const highlightStyles: React.CSSProperties = {
    backgroundColor: hexToRgba(themeHex, 0.12),
    borderColor: themeHex
  };

  const handleCTAClick = (location: string) => {
    trackEvent('pse2_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "L'équipier secouriste",
      content: [
        "Évolution des techniques de secours",
        "Matériel de l'équipier PSE2",
        "Hygiène et asepsie renforcées",
        "Responsabilités et cadre légal"
      ]
    },
    {
      title: "Hygiène et asepsie",
      content: [
        "Chaîne de transmission infectieuse",
        "Précautions standard",
        "Désinfection du matériel",
        "Élimination des déchets"
      ]
    },
    {
      title: "Bilans et surveillance",
      content: [
        "Bilan circonstanciel approfondi",
        "Bilan fonctionnel",
        "Surveillance continue",
        "Transmission des informations"
      ]
    },
    {
      title: "L'obstruction des voies aériennes",
      content: [
        "Techniques avancées de désobstruction",
        "Aspiration des voies aériennes",
        "Canule oro-pharyngée",
        "Cas particuliers et complications"
      ]
    },
    {
      title: "Les hémorragies",
      content: [
        "Pansement compressif",
        "Garrot tactique",
        "Hémorragies internes",
        "Surveillance du choc hémorragique"
      ]
    },
    {
      title: "L'inconscience",
      content: [
        "Techniques de retournement",
        "Aspiration des voies aériennes",
        "Surveillance neurologique",
        "Position d'attente adaptée"
      ]
    },
    {
      title: "L'arrêt cardio-respiratoire",
      content: [
        "RCP à deux équipiers",
        "Ventilation au masque",
        "Défibrillation semi-automatique",
        "Drogues d'urgence"
      ]
    },
    {
      title: "Les détresses vitales",
      content: [
        "Ventilation assistée",
        "Oxygénothérapie normobare",
        "Inhalation médicamenteuse",
        "Surveillance des constantes"
      ]
    },
    {
      title: "Les malaises et affections spécifiques",
      content: [
        "Affections cardio-vasculaires",
        "Affections respiratoires",
        "Affections neurologiques",
        "Affections métaboliques"
      ]
    },
    {
      title: "Les traumatismes",
      content: [
        "Immobilisation générale",
        "Matelas immobilisateur",
        "Attelles à dépression",
        "Relevage et brancardage"
      ]
    },
    {
      title: "Les pansements et bandages",
      content: [
        "Pansements stériles",
        "Bandages compressifs",
        "Immobilisations souples",
        "Surveillance des pansements"
      ]
    },
    {
      title: "Les situations particulières",
      content: [
        "Accouchement inopiné",
        "Noyade et hypothermie",
        "Intoxications",
        "Situations d'exception"
      ]
    }
  ];

  const faqData = [
    {
      question: "Faut-il avoir le PSE1 pour passer le PSE2 ?",
      answer: "Oui, le PSE1 est un prérequis obligatoire pour suivre la formation PSE2. Il faut également être à jour de sa formation continue PSE1."
    },
    {
      question: "Quelle est la différence entre PSE1 et PSE2 ?",
      answer: "Le PSE2 approfondit les techniques du PSE1 avec du matériel plus avancé (aspiration, ventilation assistée, immobilisation). Il forme des équipiers plus expérimentés."
    },
    {
      question: "Le PSE2 permet-il d'encadrer d'autres secouristes ?",
      answer: "Le PSE2 donne les compétences pour être chef d'équipe et encadrer des équipiers PSE1. C'est souvent requis pour les postes de responsabilité en association."
    },
    {
      question: "Quelle formation continue pour le PSE2 ?",
      answer: "Comme pour le PSE1, une formation continue annuelle de 6h minimum est obligatoire, avec des modules spécifiques PSE2 et des révisions techniques."
    },
    {
      question: "Le PSE2 est-il reconnu par les employeurs ?",
      answer: "Oui, le PSE2 est très valorisé par les employeurs du secteur sécurité, santé, et services publics. Il démontre un haut niveau de compétence en secourisme."
    },
    {
      question: "Peut-on devenir formateur avec le PSE2 ?",
      answer: "Le PSE2 est un prérequis pour devenir formateur en secourisme, mais il faut ensuite suivre une formation pédagogique spécifique (PAE ou équivalent)."
    }
  ];

  const publicsCibles = [
    {
      title: "Chefs d'équipe secours",
      description: "Responsables d'équipes d'intervention, encadrants",
      icon: Shield,
      color: "text-purple-500"
    },
    {
      title: "Sapeurs-pompiers",
      description: "Volontaires et professionnels, formation avancée",
      icon: Award,
      color: "text-red-500"
    },
    {
      title: "Professionnels santé",
      description: "Ambulanciers, aide-soignants, infirmiers",
      icon: Stethoscope,
      color: "text-blue-500"
    },
    {
      title: "Formateurs secourisme",
      description: "Futurs formateurs, instructeurs associatifs",
      icon: Users,
      color: "text-green-500"
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' },
    { label: 'PSE2 - Premiers Secours en Équipe', href: '/formations/secourisme/pse2' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "PSE2 - Premiers Secours en Équipe niveau 2",
          description: "Formation d'équipier secouriste avancé de 35h. Techniques expertes, matériel spécialisé, encadrement d'équipe.",
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
        <section className={`bg-gradient-to-br ${theme.gradient} text-white py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Formation équipier expert</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Formation PSE2 Vendée
                  <span className="block text-2xl lg:text-3xl font-normal text-white/80 mt-2">
                    Premiers Secours en Équipe niveau 2
                  </span>
                </h1>

                <p className="text-xl text-white/80 mb-6 leading-relaxed">
                  <strong>Perfectionnez vos compétences</strong> avec notre formation PSE2 de 35h. 
                  Techniques expertes, matériel avancé, encadrement d'équipe.
                </p>

                <div className="flex items-center gap-6 mb-8 text-white/80">
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
                    className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.text}`}
                  >
                    <FileText className="w-5 h-5" />
                    S'inscrire au PSE2
                  </Link>
                  <a
                    href="tel:+33672128440"
                    onClick={() => handleCTAClick('hero_phone')}
                    className={`px-8 py-4 rounded-lg transition-all font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.button}`}
                  >
                    <Phone className="w-5 h-5" />
                    06 72 12 84 40
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation PSE2</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>35 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Prérequis</span>
                      <span>PSE1 obligatoire</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Âge minimum</span>
                      <span>16 ans</span>
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
                      <span>320€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Certificat PSE2</span>
                    </div>
                    <p className="text-sm text-green-100">
                      Niveau expert équipier secouriste
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
              Pour qui est destinée la formation PSE2 ?
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

            <div className="rounded-xl p-8 border" style={highlightStyles}>
              <h3 className={`text-xl font-bold ${theme.text} mb-4 text-center`}>
                Formation d'équipier expert
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className={`text-3xl font-bold ${theme.text} mb-2`}>35h</div>
                  <p className="text-gray-700">Formation experte</p>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme.text} mb-2`}>12</div>
                  <p className="text-gray-700">Modules avancés</p>
                </div>
                <div>
                  <div className={`text-3xl font-bold ${theme.text} mb-2`}>PSE1</div>
                  <p className="text-gray-700">Prérequis obligatoire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme détaillé */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Programme de formation PSE2
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
              Questions fréquentes PSE2
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
        <section className={`py-16 bg-gradient-to-r ${theme.gradient} text-white`}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Devenez équipier expert
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Formation PSE2 • 35h de techniques expertes • Encadrement d'équipe
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.text}`}
              >
                <FileText className="w-5 h-5" />
                S'inscrire au PSE2
              </Link>
              <a
                href="tel:+33672128440"
                className={`px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.button}`}
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

export default PSE2Page;