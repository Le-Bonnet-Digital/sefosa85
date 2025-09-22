import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Clock, 
  Users, 
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  MapPin,
  CalendarDays
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';
import { getFormationTheme } from '../../../utils/formationThemes';

const MacSSTPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const theme = getFormationTheme('mac-sst');

  const handleCTAClick = (location: string) => {
    trackEvent('mac_sst_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Retour d'expérience et évolution des compétences",
      content: [
        "Bilan des actions menées en prévention et secours",
        "Analyse des situations vécues depuis la dernière formation",
        "Identification des points d'amélioration"
      ]
    },
    {
      title: "Actualisation des gestes de secours",
      content: [
        "Révision des techniques de secours",
        "Mise en pratique sur cas concrets actualisés",
        "Nouveautés réglementaires et techniques"
      ]
    },
    {
      title: "Perfectionnement technique",
      content: [
        "Situations complexes et dégradées",
        "Travail sur les points faibles identifiés",
        "Nouvelles recommandations INRS"
      ]
    },
    {
      title: "Prévention des risques professionnels",
      content: [
        "Actualisation des connaissances en prévention",
        "Nouveaux risques identifiés dans l'entreprise",
        "Rôle du SST dans l'organisation de la prévention"
      ]
    }
  ];

  const faqData = [
    {
      question: "Quand dois-je faire mon MAC SST ?",
      answer: "Le MAC SST doit être effectué dans les 24 mois suivant votre formation initiale SST ou votre dernier recyclage. Il est recommandé de programmer votre MAC SST 2-3 mois avant l'expiration pour éviter toute rupture de validité."
    },
    {
      question: "Que se passe-t-il si mon certificat SST a expiré ?",
      answer: "Si votre certificat SST a expiré depuis moins de 24 mois, vous pouvez encore suivre un MAC SST. Au-delà, vous devrez repasser la formation SST complète de 14 heures."
    },
    {
      question: "Le programme MAC SST est-il personnalisable ?",
      answer: "Oui, le programme MAC SST s'adapte aux retours d'expérience des participants et aux évolutions des risques de votre entreprise. Nous privilégions les situations pratiques rencontrées."
    },
    {
      question: "Combien de personnes minimum pour organiser un MAC SST ?",
      answer: "Il faut au minimum 4 participants pour organiser une session MAC SST intra-entreprise. Le maximum est de 10 participants pour garantir la qualité pédagogique."
    },
    {
      question: "Puis-je mélanger SST initial et MAC SST dans la même session ?",
      answer: "Non, les formations SST initiale (14h) et MAC SST (7h) sont distinctes et ne peuvent pas être mélangées car elles ont des objectifs et durées différents."
    },
    {
      question: "Le MAC SST est-il obligatoire ?",
      answer: "Oui, si vous êtes désigné SST dans votre entreprise, le recyclage MAC SST est obligatoire tous les 24 mois pour maintenir votre certification active."
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' },
    { label: 'MAC SST - Maintien et Actualisation', href: '/formations/secourisme/mac-sst' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "MAC SST - Maintien et Actualisation des Compétences SST",
          description: "Formation de recyclage SST de 7h obligatoire tous les 24 mois pour maintenir sa certification",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "7 heures"
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
                  <RefreshCw className="w-5 h-5" />
                  <span className="font-medium">Formation de recyclage</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  MAC SST Vendée (85)
                  <span className="block text-2xl lg:text-3xl font-normal text-white/80 mt-2">
                    Maintien & Actualisation des Compétences
                  </span>
                </h1>

                <p className="text-xl text-white/80 mb-6 leading-relaxed">
                  <strong>Recyclez votre certification SST</strong> avec notre formation MAC de 7h. 
                  Obligatoire tous les 24 mois pour maintenir vos compétences à jour.
                </p>

                <div className="flex items-center gap-6 mb-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>7h de formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>4 à 10 participants</span>
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
                    Planifier mon MAC SST
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
                  <h3 className="text-2xl font-bold mb-6 text-center">MAC SST en chiffres</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>7 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Fréquence</span>
                      <span>Tous les 24 mois</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Prérequis</span>
                      <span>Certificat SST valide</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>4 à 10</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Évaluation</span>
                      <span>Continue</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Nouveau certificat</span>
                      <span>24 mois</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-red-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-red-200 mb-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-semibold">Important</span>
                    </div>
                    <p className="text-sm text-red-100">
                      Le MAC doit être effectué AVANT l'expiration de votre certificat SST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qui doit faire le MAC SST */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Qui doit suivre le MAC SST ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Personnes concernées</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Détenteurs d'un certificat SST en cours de validité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>SST désignés par l'employeur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Membres du CHSCT ou CSE formés SST</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Référents sécurité, préventeurs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <CalendarDays className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Planification</h3>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <strong>Quand programmer :</strong>
                    <p className="mt-1">Dans les 24 mois suivant votre dernière formation SST/MAC</p>
                  </div>
                  <div>
                    <strong>Conseil :</strong>
                    <p className="mt-1">Programmez 2-3 mois avant l'expiration pour sécuriser votre certificat</p>
                  </div>
                  <div>
                    <strong>Si dépassement :</strong>
                    <p className="mt-1">Formation SST complète (14h) obligatoire si {'>'}24 mois d'expiration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-red-600 mb-4 text-center">
                Obligation légale de maintien des compétences
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Pour l'employeur :</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• S'assurer du maintien des compétences SST</li>
                    <li>• Financer et organiser le recyclage</li>
                    <li>• Tenir un registre des formations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pour le salarié SST :</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Suivre le MAC dans les délais</li>
                    <li>• Maintenir ses compétences opérationnelles</li>
                    <li>• Signaler les besoins de formation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme MAC SST */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Programme MAC SST (7 heures)
            </h2>

            <div className="mb-8">
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Objectifs du MAC SST</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Actualisation :</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Maintenir les compétences SST</li>
                      <li>• Intégrer les évolutions techniques</li>
                      <li>• Adapter aux nouveaux risques</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Perfectionnement :</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Améliorer les gestes techniques</li>
                      <li>• Renforcer la prévention</li>
                      <li>• Développer l'analyse des situations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

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

            <div className="bg-yellow-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Évaluation continue et validation
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Modalités d'évaluation :</h4>
                  <ul className="space-y-1">
                    <li>• Observation des pratiques tout au long de la formation</li>
                    <li>• Mises en situation d'accidents simulés</li>
                    <li>• Échanges et analyses de cas</li>
                    <li>• Pas d'épreuve certificative finale</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Validation :</h4>
                  <ul className="space-y-1">
                    <li>• Nouveau certificat SST délivré</li>
                    <li>• Validité : 24 mois</li>
                    <li>• Maintien de l'équivalence PSC1</li>
                    <li>• Attestation de présence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modalités pratiques */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Modalités pratiques
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Formation Intra-entreprise</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Durée</span>
                    <span>7 heures (1 jour)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Participants</span>
                    <span>4 à 10 personnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lieu</span>
                    <span>Sur votre site</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tarif</span>
                    <span className="font-semibold text-green-600">À partir de 800€ HT</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Avantages intra :</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Adaptation aux risques de l'entreprise</li>
                      <li>• Planning selon vos contraintes</li>
                      <li>• Matériel pédagogique fourni</li>
                      <li>• Retour d'expérience collectif</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Formation Inter-entreprise</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Durée</span>
                    <span>7 heures (1 jour)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sessions</span>
                    <span>Calendrier public</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lieu</span>
                    <span>Centre de formation</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Tarif</span>
                    <span className="font-semibold text-green-600">120€ HT / pers.</span>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Avantages inter :</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Dates programmées régulièrement</li>
                      <li>• Échange entre entreprises</li>
                      <li>• Inscription individuelle</li>
                      <li>• Matériel et salle fournis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('modalites_cta')}
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition-colors font-semibold text-lg"
              >
                <CalendarDays className="w-5 h-5" />
                Voir le calendrier et tarifs
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Questions fréquentes MAC SST
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
              Ne laissez pas expirer votre certification SST
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Programmez votre MAC SST dès maintenant • Devis sous 24h • Intervention rapide
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.text}`}
              >
                <FileText className="w-5 h-5" />
                Programmer mon MAC SST
              </Link>
              <a
                href="tel:+33672128440"
                className={`px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.button}`}
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Formation sur site</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Adaptation à vos risques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Nouveau certificat 24 mois</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MacSSTPage;