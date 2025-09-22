import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
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
  Flame
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';
import { getFormationTheme } from '../../../utils/formationThemes';

const EPIPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const theme = getFormationTheme('epi');

  const handleCTAClick = (location: string) => {
    trackEvent('epi_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Le feu et ses dangers",
      content: [
        "Triangle du feu et classes de feux",
        "Modes de propagation",
        "Dangers des fumées et gaz de combustion",
        "Effets sur l'homme"
      ]
    },
    {
      title: "Les moyens d'extinction",
      content: [
        "Différents types d'extincteurs",
        "Agents extincteurs et leur utilisation",
        "Autres moyens de première intervention",
        "Maintenance et vérifications"
      ]
    },
    {
      title: "Conduite à tenir en cas d'incendie",
      content: [
        "Donner l'alerte",
        "Attaquer le feu",
        "Protéger et évacuer",
        "Accueillir les secours"
      ]
    },
    {
      title: "Exercices pratiques sur feux réels",
      content: [
        "Manipulation d'extincteurs à eau",
        "Utilisation d'extincteurs CO2",
        "Extinction de feux de liquides inflammables",
        "Mise en situation d'intervention"
      ]
    }
  ];

  const faqData = [
    {
      question: "Qui doit suivre la formation EPI ?",
      answer: "Tous les salariés désignés comme équipiers de première intervention par l'employeur. Le Code du travail recommande 10% de l'effectif formé dans les entreprises présentant des risques d'incendie."
    },
    {
      question: "La formation EPI est-elle obligatoire ?",
      answer: "Oui, selon l'article R4227-28 du Code du travail, l'employeur doit former son personnel à l'utilisation des moyens de premier secours contre l'incendie."
    },
    {
      question: "Quelle est la durée de validité de la formation EPI ?",
      answer: "Il est recommandé de renouveler la formation EPI tous les ans pour maintenir les compétences et s'adapter aux évolutions de l'entreprise."
    },
    {
      question: "La formation se déroule-t-elle sur feux réels ?",
      answer: "Oui, notre formation EPI comprend obligatoirement des exercices pratiques sur feux réels avec différents types d'extincteurs pour une mise en situation réaliste."
    },
    {
      question: "Combien de participants maximum par session ?",
      answer: "Nous limitons à 12 participants maximum par session pour garantir la qualité pédagogique et permettre à chacun de pratiquer sur les extincteurs."
    },
    {
      question: "Fournissez-vous le matériel pour la formation ?",
      answer: "Oui, nous apportons tout le matériel nécessaire : extincteurs, bacs à feu, équipements de protection, supports pédagogiques."
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Incendie', href: '/formations/incendie' },
    { label: 'EPI - Équipier de Première Intervention', href: '/formations/incendie/epi' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "Formation EPI - Équipier de Première Intervention",
          description: "Formation de 3h30 à la lutte contre l'incendie avec exercices pratiques sur feux réels",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "3h30"
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
                  <span className="font-medium">Formation obligatoire</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Formation EPI Vendée (85)
                  <span className="block text-2xl lg:text-3xl font-normal text-white/80 mt-2">
                    Équipier de Première Intervention
                  </span>
                </h1>

                <p className="text-xl text-white/80 mb-6 leading-relaxed">
                  <strong>Formez vos équipiers</strong> à la lutte contre l'incendie avec notre formation EPI de 3h30. 
                  Exercices pratiques sur feux réels garantis.
                </p>

                <div className="flex items-center gap-6 mb-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>3h30 de formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>4 à 12 participants</span>
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
                    Devis gratuit sous 24h
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
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation EPI</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>3h30</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Renouvellement</span>
                      <span>Annuel recommandé</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Prérequis</span>
                      <span>Aucun</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>4 à 12</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Feux réels</span>
                      <span>Inclus</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Tarif intra</span>
                      <span>À partir de 600€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-orange-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-orange-200 mb-2">
                      <Flame className="w-5 h-5" />
                      <span className="font-semibold">Pratique sur feux réels</span>
                    </div>
                    <p className="text-sm text-orange-100">
                      Exercices avec extincteurs sur vrais foyers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme détaillé */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Programme de formation EPI
            </h2>

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
              Questions fréquentes EPI
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
        <section className={`py-16 bg-gradient-to-r ${theme.gradient} text-white`}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Formez vos équipiers de première intervention
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Formation EPI • Feux réels • Matériel fourni • Sur votre site
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.text}`}
              >
                <FileText className="w-5 h-5" />
                Demander un devis EPI
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

export default EPIPage;