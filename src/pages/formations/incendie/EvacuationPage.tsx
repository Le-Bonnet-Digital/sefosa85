import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
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
  ArrowRight
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';

const EvacuationPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleCTAClick = (location: string) => {
    trackEvent('evacuation_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Réglementation et obligations",
      content: [
        "Code du travail et ERP",
        "Consignes de sécurité",
        "Plan d'évacuation",
        "Exercices obligatoires"
      ]
    },
    {
      title: "Organisation de l'évacuation",
      content: [
        "Rôles et responsabilités",
        "Guides et serre-files",
        "Points de rassemblement",
        "Moyens d'alerte"
      ]
    },
    {
      title: "Techniques d'évacuation",
      content: [
        "Cheminements d'évacuation",
        "Gestion des flux",
        "Personnes à mobilité réduite",
        "Situations particulières"
      ]
    },
    {
      title: "Exercice pratique",
      content: [
        "Simulation d'évacuation",
        "Chronométrage",
        "Débriefing",
        "Points d'amélioration"
      ]
    }
  ];

  const faqData = [
    {
      question: "Qui doit suivre la formation évacuation ?",
      answer: "Les guides-files, serre-files et toute personne ayant un rôle dans l'organisation de l'évacuation. Il est recommandé de former également l'ensemble du personnel aux consignes d'évacuation."
    },
    {
      question: "La formation évacuation est-elle obligatoire ?",
      answer: "Oui, selon le Code du travail, l'employeur doit organiser des exercices d'évacuation et former le personnel aux consignes de sécurité incendie."
    },
    {
      question: "À quelle fréquence renouveler cette formation ?",
      answer: "Il est recommandé de renouveler la formation évacuation tous les ans, en complément des exercices d'évacuation semestriels obligatoires."
    },
    {
      question: "La formation comprend-elle un exercice pratique ?",
      answer: "Oui, la formation comprend obligatoirement un exercice d'évacuation pratique avec chronométrage et débriefing pour valider les acquis."
    },
    {
      question: "Comment gérer l'évacuation des personnes handicapées ?",
      answer: "La formation aborde spécifiquement l'évacuation des personnes à mobilité réduite avec les techniques et équipements adaptés (espaces d'attente sécurisés, évacuateurs, etc.)."
    },
    {
      question: "Combien de temps dure la formation ?",
      answer: "La formation évacuation dure 2 heures, comprenant théorie, étude du plan d'évacuation de votre établissement et exercice pratique."
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Incendie', href: '/formations/incendie' },
    { label: 'Évacuation incendie', href: '/formations/incendie/evacuation' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "Formation Évacuation incendie",
          description: "Formation de 2h aux procédures d'évacuation avec exercice pratique",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "2 heures"
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-400/20 px-4 py-2 rounded-full mb-6">
                  <ArrowRight className="w-5 h-5" />
                  <span className="font-medium">Formation obligatoire</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Formation Évacuation Vendée
                  <span className="block text-2xl lg:text-3xl font-normal text-yellow-100 mt-2">
                    Procédures et exercice pratique
                  </span>
                </h1>

                <p className="text-xl text-yellow-100 mb-6 leading-relaxed">
                  <strong>Organisez efficacement l'évacuation</strong> de vos locaux avec notre formation de 2h. 
                  Théorie, procédures et exercice pratique inclus.
                </p>

                <div className="flex items-center gap-6 mb-8 text-yellow-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>2h de formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>8 à 20 participants</span>
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
                    className="bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Devis gratuit sous 24h
                  </Link>
                  <a
                    href="tel:+33672128440"
                    onClick={() => handleCTAClick('hero_phone')}
                    className="bg-yellow-700 text-white px-8 py-4 rounded-lg hover:bg-yellow-800 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    06 72 12 84 40
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation Évacuation</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>2 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Théorie</span>
                      <span>1h</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Exercice</span>
                      <span>1h</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>8 à 20</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Renouvellement</span>
                      <span>Annuel</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Tarif intra</span>
                      <span>À partir de 350€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Exercice inclus</span>
                    </div>
                    <p className="text-sm text-green-100">
                      Simulation d'évacuation avec débriefing
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
              Programme formation évacuation
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
              Questions fréquentes évacuation
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
        <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Organisez une évacuation efficace
            </h2>
            <p className="text-xl mb-8 text-yellow-100">
              Formation 2h • Exercice pratique • Débriefing personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Demander un devis
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-yellow-700 text-white px-8 py-4 rounded-lg hover:bg-yellow-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
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

export default EvacuationPage;