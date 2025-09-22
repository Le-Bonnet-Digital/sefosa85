import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Users, 
  Clock, 
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  MapPin,
  Star,
  Award
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';

const ExtincteurPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleCTAClick = (location: string) => {
    trackEvent('extincteur_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Théorie du feu",
      content: [
        "Triangle du feu",
        "Classes de feux (A, B, C, D, F)",
        "Modes de propagation",
        "Principes d'extinction"
      ]
    },
    {
      title: "Les extincteurs",
      content: [
        "Types d'extincteurs et agents extincteurs",
        "Choix de l'extincteur selon la classe de feu",
        "Vérifications et maintenance",
        "Règles de sécurité d'utilisation"
      ]
    },
    {
      title: "Technique d'extinction",
      content: [
        "Approche du foyer en sécurité",
        "Technique de balayage",
        "Distance d'attaque",
        "Surveillance post-extinction"
      ]
    },
    {
      title: "Exercices pratiques",
      content: [
        "Manipulation extincteur à eau pulvérisée",
        "Utilisation extincteur CO2",
        "Extinction feu de liquide inflammable",
        "Mise en situation réelle"
      ]
    }
  ];

  const faqData = [
    {
      question: "Combien de temps dure la formation manipulation d'extincteur ?",
      answer: "La formation dure 1h30, comprenant 30 minutes de théorie et 1h de pratique sur feux réels. Cette durée permet à chaque participant de manipuler plusieurs types d'extincteurs."
    },
    {
      question: "Tous les participants manipulent-ils les extincteurs ?",
      answer: "Oui, chaque participant manipule obligatoirement les extincteurs sur feux réels. C'est l'objectif principal de cette formation pratique."
    },
    {
      question: "Quels types d'extincteurs sont utilisés ?",
      answer: "Nous utilisons les extincteurs les plus courants : eau pulvérisée, CO2, et poudre ABC. Le choix dépend des équipements présents dans votre entreprise."
    },
    {
      question: "La formation peut-elle se faire en extérieur ?",
      answer: "Oui, les exercices pratiques se déroulent obligatoirement en extérieur pour des raisons de sécurité. Nous nous adaptons aux conditions météorologiques."
    },
    {
      question: "Faut-il renouveler cette formation ?",
      answer: "Il est recommandé de renouveler la formation manipulation d'extincteur tous les ans pour maintenir les réflexes et s'adapter aux évolutions de l'entreprise."
    },
    {
      question: "Combien de participants maximum ?",
      answer: "Nous acceptons jusqu'à 15 participants par session pour cette formation, ce qui permet à chacun de pratiquer suffisamment tout en maintenant la sécurité."
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Incendie', href: '/formations/incendie' },
    { label: 'Manipulation d\'extincteur', href: '/formations/incendie/extincteur' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "Formation Manipulation d'extincteur",
          description: "Formation pratique de 1h30 à l'utilisation des extincteurs sur feux réels",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "1h30"
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
                  <Flame className="w-5 h-5" />
                  <span className="font-medium">Formation pratique</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Manipulation d'extincteur Vendée
                  <span className="block text-2xl lg:text-3xl font-normal text-orange-100 mt-2">
                    Formation pratique sur feux réels
                  </span>
                </h1>

                <p className="text-xl text-orange-100 mb-6 leading-relaxed">
                  <strong>Apprenez à utiliser efficacement</strong> les extincteurs avec notre formation pratique de 1h30. 
                  Chaque participant manipule sur feux réels.
                </p>

                <div className="flex items-center gap-6 mb-8 text-orange-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>1h30 de formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>6 à 15 participants</span>
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
                    Devis gratuit sous 24h
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
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation Extincteur</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>1h30</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Théorie</span>
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Pratique</span>
                      <span>1h</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>6 à 15</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Renouvellement</span>
                      <span>Annuel</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Tarif intra</span>
                      <span>À partir de 400€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-red-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">100% pratique</span>
                    </div>
                    <p className="text-sm text-red-100">
                      Chaque participant manipule les extincteurs
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
              Programme manipulation d'extincteur
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
              Questions fréquentes manipulation extincteur
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
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Maîtrisez l'utilisation des extincteurs
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Formation 1h30 • Feux réels • Tous les participants manipulent
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Demander un devis
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

export default ExtincteurPage;