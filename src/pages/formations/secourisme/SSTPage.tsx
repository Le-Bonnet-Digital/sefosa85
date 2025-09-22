import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  Clock, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  FileText,
  CheckCircle,
  AlertCircle,
  Star,
  Award
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';

const SSTPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleCTAClick = (location: string) => {
    trackEvent('sst_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "Situer le cadre juridique de son intervention",
      content: [
        "Connaître les éléments fixant le cadre juridique de son intervention",
        "Mobiliser ses connaissances du cadre juridique, lors de son intervention"
      ]
    },
    {
      title: "Réaliser une protection adaptée",
      content: [
        "Mettre en œuvre les mesures de protection décrites dans le processus d'alerte aux populations",
        "Identifier les dangers persistants et qui menacent la victime",
        "Supprimer ou isoler le danger ou soustraire la victime au danger"
      ]
    },
    {
      title: "Examiner la victime",
      content: [
        "Rechercher, suivant un ordre déterminé, la présence d'un ou plusieurs des signes indiquant que la vie de la victime est menacée",
        "Reconnaître les signes de détresse vitale",
        "Prioriser les actions à réaliser"
      ]
    },
    {
      title: "Garantir une alerte favorisant l'intervention des secours spécialisés",
      content: [
        "Définir les différents éléments du message d'alerte",
        "Identifier qui alerter en fonction de l'organisation des secours",
        "Faire alerter ou alerter en fonction de l'organisation des secours"
      ]
    },
    {
      title: "Secourir la victime de manière appropriée",
      content: [
        "Choisir l'action à effectuer pour obtenir le résultat à atteindre",
        "Réaliser l'action choisie en se référant à la technique préconisée",
        "Surveiller l'évolution de l'état de la victime"
      ]
    },
    {
      title: "Situations inhérentes aux risques spécifiques",
      content: [
        "Situer son rôle de SST dans l'organisation de la prévention de l'entreprise",
        "Contribuer à la mise en œuvre d'actions de prévention",
        "Informer les personnes désignées dans le plan d'organisation de la prévention"
      ]
    }
  ];

  const faqData = [
    {
      question: "Quelle est la durée de validité d'une formation SST ?",
      answer: "La formation SST est valable 24 mois. Avant l'expiration, il est obligatoire de suivre une formation MAC SST (Maintien et Actualisation des Compétences) de 7 heures pour renouveler son certificat."
    },
    {
      question: "Combien de SST faut-il dans une entreprise ?",
      answer: "Au minimum 10% de l'effectif de chaque atelier où sont accomplis des travaux dangereux, et au moins un SST présent en permanence dans les ateliers de 15 salariés et plus."
    },
    {
      question: "La formation SST est-elle obligatoire ?",
      answer: "Oui, pour certaines entreprises selon le Code du travail. Elle fait partie des obligations de l'employeur en matière de premiers secours au travail."
    },
    {
      question: "Peut-on échouer à l'évaluation SST ?",
      answer: "L'évaluation SST est certificative. Si les compétences ne sont pas validées, le candidat ne reçoit pas son certificat SST mais une attestation de présence."
    },
    {
      question: "La formation SST peut-elle se faire en intra-entreprise ?",
      answer: "Absolument ! Nous privilégions les formations intra-entreprise directement sur votre site, adaptées à vos risques spécifiques et contraintes organisationnelles."
    },
    {
      question: "Quels sont les prérequis pour devenir SST ?",
      answer: "Aucun prérequis n'est nécessaire. La formation est accessible à tous les salariés. Seule l'aptitude à effectuer les gestes de secours est requise."
    },
    {
      question: "Quelle est la différence entre SST et PSC1 ?",
      answer: "Le SST est spécifique au milieu professionnel et inclut la prévention. Le PSC1 est une formation citoyenne générale aux premiers secours. Le SST équivaut au PSC1 mais avec un volet prévention en plus."
    },
    {
      question: "Intervenez-vous dans toute la Vendée ?",
      answer: "Oui, nous intervenons dans toute la Vendée (85) ainsi que dans les départements limitrophes : Loire-Atlantique (44), Maine-et-Loire (49) et Deux-Sèvres (79)."
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' },
    { label: 'SST - Sauveteur Secouriste du Travail', href: '/formations/secourisme/sst' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "Formation SST - Sauveteur Secouriste du Travail",
          description: "Formation initiale SST de 14h pour devenir Sauveteur Secouriste du Travail. Certificat valable 24 mois.",
          provider: "SEFOSA",
          courseMode: "Présentiel",
          location: "Vendée et départements limitrophes",
          duration: "14 heures"
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
        <section className="bg-gradient-to-br from-red-500 to-red-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-400/20 px-4 py-2 rounded-full mb-6">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Formation certifiante</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Formation SST en Vendée (85)
                  <span className="block text-2xl lg:text-3xl font-normal text-red-100 mt-2">
                    Intra & Inter-entreprise
                  </span>
                </h1>

                <p className="text-xl text-red-100 mb-6 leading-relaxed">
                  Devenez <strong>Sauveteur Secouriste du Travail</strong> avec une formation de 14h 
                  alliant théorie et pratique. Certificat reconnu par l'INRS, valable 24 mois.
                </p>

                <div className="flex items-center gap-6 mb-8 text-red-100">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>14h de formation</span>
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
                    className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <FileText className="w-5 h-5" />
                    Devis gratuit sous 24h
                  </Link>
                  <a
                    href="tel:+33672128440"
                    onClick={() => handleCTAClick('hero_phone')}
                    className="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    06 72 12 84 40
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-6 text-center">Modalités formation SST</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée initiale</span>
                      <span>14 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">MAC SST</span>
                      <span>7 heures</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Validité</span>
                      <span>24 mois</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Participants</span>
                      <span>4 à 10</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Prérequis</span>
                      <span>Aucun</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Certificat</span>
                      <span>INRS</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Formation sur site</span>
                    </div>
                    <p className="text-sm text-green-100">
                      Nous nous déplaçons avec tout le matériel pédagogique nécessaire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse la formation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              À qui s'adresse la formation SST ?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Public concerné</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Tous les salariés d'entreprise
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Membres du personnel désignés par l'employeur
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Représentants du personnel (CHSCT, CSE)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Personnels des secteurs à risques
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Obligation légale</h3>
                <div className="text-gray-600 space-y-4">
                  <p>
                    <strong>Article R4224-15 du Code du travail</strong> : 
                    Un membre du personnel doit recevoir la formation de secouriste nécessaire.
                  </p>
                  <p>
                    <strong>Effectifs requis :</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Au moins 10% dans les ateliers dangereux</li>
                    <li>Au moins 1 SST présent en permanence (≥15 salariés)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Types de formations proposées
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-blue-600 mb-3">Formation Intra-entreprise</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Formation sur votre site</li>
                    <li>• Adaptée à vos risques spécifiques</li>
                    <li>• Planning selon vos contraintes</li>
                    <li>• Groupe constitué de vos salariés</li>
                  </ul>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Tarif :</strong> À partir de 1200€ HT / session
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold text-green-600 mb-3">Formation Inter-entreprise</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Formation en centre ou site partenaire</li>
                    <li>• Calendrier de sessions publiques</li>
                    <li>• Inscription individuelle possible</li>
                    <li>• Échange d'expériences entre entreprises</li>
                  </ul>
                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Tarif :</strong> 180€ HT / participant
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
              Programme de formation SST
            </h2>

            <div className="mb-8">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4">Objectifs pédagogiques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Compétences secours :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Protéger, examiner, faire alerter, secourir</li>
                      <li>• Réaliser les gestes de premiers secours</li>
                      <li>• Utiliser le matériel de premiers secours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compétences prévention :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Repérer les situations dangereuses</li>
                      <li>• Supprimer ou réduire les risques</li>
                      <li>• Transmettre aux personnes compétentes</li>
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

            <div className="mt-12 bg-yellow-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Évaluation et certification
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Épreuves :</h4>
                  <ul className="space-y-1">
                    <li>• Mise en situation d'accident du travail</li>
                    <li>• Épreuve de secours (8 compétences)</li>
                    <li>• Épreuve de prévention</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Validation :</h4>
                  <ul className="space-y-1">
                    <li>• Certificat SST (si validé)</li>
                    <li>• Équivalent PSC1</li>
                    <li>• Validité : 24 mois</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAC SST */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              MAC SST - Maintien et Actualisation des Compétences
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Pour maintenir votre certification SST, vous devez suivre une formation MAC SST 
              de 7 heures avant l'expiration de vos 24 mois.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Durée</h3>
                <p className="text-gray-600">7 heures de formation</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Validité</h3>
                <p className="text-gray-600">24 mois supplémentaires</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Participants</h3>
                <p className="text-gray-600">4 à 10 personnes</p>
              </div>
            </div>

            <Link
              to="/formations/secourisme/mac-sst"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              En savoir plus sur le MAC SST
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Questions fréquentes sur la formation SST
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

        {/* Témoignages */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Témoignages de nos stagiaires SST
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4">
                  "Formation très complète et pratique. Le formateur s'adapte aux spécificités de notre entreprise. 
                  Je me sens vraiment capable d'intervenir en cas d'accident."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Marie L.</strong> - Responsable RH, PME (La Roche-sur-Yon)
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellent pédagogue ! Les mises en situation sont réalistes et permettent de bien assimilier les gestes. 
                  Formation à recommander."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Thomas P.</strong> - Chef d'équipe, industrie (Les Sables-d'Olonne)
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4">
                  "Formation claire et bien structurée. Le formateur prend le temps de répondre à toutes nos questions. 
                  Je recommande vivement !"
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Sophie M.</strong> - Infirmière du travail (Challans)
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/avis"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Star className="w-5 h-5" />
                Voir tous les avis Google
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Formez vos équipes aux gestes qui sauvent
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Obtenez votre devis formation SST personnalisé. Réponse garantie sous 24h.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Demander un devis SST
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
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
                <span>Certificat INRS</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SSTPage;