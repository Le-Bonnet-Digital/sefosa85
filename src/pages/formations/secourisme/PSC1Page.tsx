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
  UserCheck
} from 'lucide-react';
import { trackEvent } from '../../../utils/analytics';
import StructuredData from '../../../components/SEO/StructuredData';
import BreadcrumbNav from '../../../components/UI/BreadcrumbNav';
import { getFormationTheme } from '../../../utils/formationThemes';

const PSC1Page = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const theme = getFormationTheme('psc1');

  const handleCTAClick = (location: string) => {
    trackEvent('psc1_cta_click', { location });
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const programmeModules = [
    {
      title: "La protection et l'alerte",
      content: [
        "Assurer sa sécurité et celle de la victime",
        "Reconnaître les dangers persistants",
        "Donner l'alerte aux services de secours",
        "Transmettre les informations nécessaires"
      ]
    },
    {
      title: "La victime s'étouffe",
      content: [
        "Reconnaître l'obstruction des voies aériennes",
        "Réaliser les gestes de désobstruction",
        "Claques dans le dos et compressions abdominales",
        "Cas particuliers : nourrisson, femme enceinte"
      ]
    },
    {
      title: "La victime saigne abondamment",
      content: [
        "Reconnaître une hémorragie",
        "Réaliser une compression directe",
        "Maintenir la compression",
        "Surveiller l'état de la victime"
      ]
    },
    {
      title: "La victime est inconsciente et respire",
      content: [
        "Vérifier la conscience et la respiration",
        "Libérer les voies aériennes",
        "Placer en Position Latérale de Sécurité (PLS)",
        "Surveiller et réconforter"
      ]
    },
    {
      title: "La victime ne respire pas et ne répond pas",
      content: [
        "Reconnaître un arrêt cardio-respiratoire",
        "Réaliser un massage cardiaque efficace",
        "Utiliser un défibrillateur automatisé externe (DAE)",
        "Coordonner les secours"
      ]
    },
    {
      title: "La victime se plaint d'un malaise",
      content: [
        "Observer et interroger la victime",
        "Mettre au repos en position d'attente",
        "Desserrer les vêtements",
        "Rassurer et surveiller"
      ]
    },
    {
      title: "La victime se plaint après un traumatisme",
      content: [
        "Éviter toute mobilisation",
        "Apprécier l'état de conscience",
        "Surveiller les fonctions vitales",
        "Protéger contre le froid et la chaleur"
      ]
    }
  ];

  const faqData = [
    {
      question: "Quelle est la différence entre PSC1 et SST ?",
      answer: "Le PSC1 est une formation citoyenne générale aux premiers secours, tandis que le SST est spécifique au milieu professionnel et inclut un volet prévention des risques. Le SST équivaut au PSC1 mais avec des compétences supplémentaires."
    },
    {
      question: "Le PSC1 est-il obligatoire ?",
      answer: "Le PSC1 n'est pas obligatoire légalement, mais il est fortement recommandé. Certains métiers ou concours peuvent l'exiger. C'est un acte citoyen qui peut sauver des vies."
    },
    {
      question: "À partir de quel âge peut-on suivre le PSC1 ?",
      answer: "Le PSC1 est accessible dès 10 ans. Il n'y a pas d'âge limite supérieur. Les gestes sont adaptés aux capacités physiques de chaque participant."
    },
    {
      question: "Le certificat PSC1 a-t-il une durée de validité ?",
      answer: "Le certificat PSC1 est valable à vie. Cependant, il est recommandé de suivre une remise à niveau tous les 3-5 ans pour maintenir ses compétences à jour."
    },
    {
      question: "Peut-on échouer à la formation PSC1 ?",
      answer: "La formation PSC1 n'a pas d'échec. L'évaluation est continue et bienveillante. Tous les participants qui suivent la formation complète reçoivent leur certificat."
    },
    {
      question: "Le PSC1 permet-il d'utiliser un défibrillateur ?",
      answer: "Oui, la formation PSC1 inclut l'apprentissage de l'utilisation du défibrillateur automatisé externe (DAE). C'est un module important de la formation."
    },
    {
      question: "Organisez-vous des sessions PSC1 tout public ?",
      answer: "Oui, nous organisons régulièrement des sessions PSC1 ouvertes au grand public. Consultez notre calendrier ou contactez-nous pour connaître les prochaines dates."
    },
    {
      question: "La formation PSC1 peut-elle se faire en groupe privé ?",
      answer: "Absolument ! Nous organisons des formations PSC1 pour les entreprises, associations, groupes d'amis ou familles. Minimum 6 participants, maximum 10."
    }
  ];

  const publicsCibles = [
    {
      title: "Particuliers & Familles",
      description: "Parents, grands-parents, tous ceux qui veulent protéger leurs proches",
      icon: Heart,
      color: "text-red-500"
    },
    {
      title: "Étudiants & Jeunes",
      description: "Lycéens, étudiants, service civique, formation citoyenne",
      icon: UserCheck,
      color: "text-blue-500"
    },
    {
      title: "Associations & Clubs",
      description: "Encadrants sportifs, bénévoles, responsables associatifs",
      icon: Users,
      color: "text-green-500"
    },
    {
      title: "Entreprises",
      description: "Complément au SST, sensibilisation générale du personnel",
      icon: Award,
      color: "text-purple-500"
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Formations Secourisme', href: '/formations/secourisme' },
    { label: 'PSC1 - Prévention et Secours Civiques', href: '/formations/secourisme/psc1' }
  ];

  return (
    <>
      <StructuredData 
        type="Course" 
        data={{
          name: "PSC1 - Prévention et Secours Civiques niveau 1",
          description: "Formation citoyenne de 7h aux premiers secours, accessible à tous dès 10 ans. Certificat à vie.",
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
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Formation citoyenne</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Formation PSC1 Vendée
                  <span className="block text-2xl lg:text-3xl font-normal text-white/80 mt-2">
                    Prévention et Secours Civiques niveau 1
                  </span>
                </h1>

                <p className="text-xl text-white/80 mb-6 leading-relaxed">
                  <strong>Apprenez les gestes qui sauvent</strong> avec notre formation PSC1 de 7h. 
                  Accessible à tous dès 10 ans, cette formation citoyenne peut sauver des vies.
                </p>

                <div className="flex items-center gap-6 mb-8 text-white/80">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>7h de formation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>6 à 10 participants</span>
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
                    S'inscrire au PSC1
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
                  <h3 className="text-2xl font-bold mb-6 text-center">Formation PSC1</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Durée</span>
                      <span>7 heures</span>
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
                      <span>6 à 10</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/20">
                      <span className="font-medium">Validité</span>
                      <span>À vie</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="font-medium">Tarif individuel</span>
                      <span>60€ HT</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-green-200 mb-2">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Certificat officiel</span>
                    </div>
                    <p className="text-sm text-green-100">
                      Délivré par le Ministère de l'Intérieur
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
              Pour qui est destinée la formation PSC1 ?
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

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                Une formation accessible et inclusive
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-700">Âge minimum</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-700">Pratique</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                  <p className="text-gray-700">Prérequis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme détaillé */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Programme de formation PSC1
            </h2>

            <div className="mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Objectifs pédagogiques</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Savoir :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Examiner une victime</li>
                      <li>• Transmettre une alerte</li>
                      <li>• Reconnaître les détresses vitales</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Savoir-faire :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Réaliser les gestes de premiers secours</li>
                      <li>• Utiliser un défibrillateur (DAE)</li>
                      <li>• Adapter son comportement à la situation</li>
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
                Pédagogie et évaluation
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Méthodes pédagogiques :</h4>
                  <ul className="space-y-1">
                    <li>• Démonstrations pratiques</li>
                    <li>• Mises en situation réalistes</li>
                    <li>• Apprentissage par la pratique</li>
                    <li>• Échanges et retours d'expérience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Validation :</h4>
                  <ul className="space-y-1">
                    <li>• Évaluation formative continue</li>
                    <li>• Pas d'examen final</li>
                    <li>• Certificat PSC1 officiel délivré</li>
                    <li>• Attestation de formation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modalités */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Modalités et tarifs PSC1
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Formation individuelle */}
              <div className="bg-white rounded-xl p-8 shadow-lg relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Inscription individuelle</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Sessions publiques</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Places disponibles</span>
                    <span>6-10 personnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lieu</span>
                    <span>Centre agréé</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Matériel</span>
                    <span>Fourni</span>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">60€</div>
                  <div className="text-gray-500">HT par personne</div>
                </div>
                <Link
                  to="/devis-et-calendrier"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                >
                  Voir le calendrier
                </Link>
              </div>

              {/* Formation groupe */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Groupe privé</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Minimum participants</span>
                    <span>6 personnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Maximum</span>
                    <span>10 personnes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Planning</span>
                    <span>Sur mesure</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Lieu</span>
                    <span>Votre choix</span>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600">480€</div>
                  <div className="text-gray-500">HT pour 6-8 pers.</div>
                </div>
                <Link
                  to="/devis-et-calendrier"
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-center block"
                >
                  Demander un devis
                </Link>
              </div>

              {/* Formation entreprise */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Entreprise / Association</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span>Sur votre site</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Adaptation contenu</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Planning flexible</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Facturation</span>
                    <span>Sur devis</span>
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600">Sur</div>
                  <div className="text-gray-500">devis personnalisé</div>
                </div>
                <Link
                  to="/devis-et-calendrier"
                  className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-center block"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                <strong>Financement :</strong> Formation éligible au budget formation des entreprises. 
                Possibilité de prise en charge OPCO selon votre secteur.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-gray-100 px-3 py-1 rounded">Attestation de présence fournie</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Certificat officiel inclus</span>
                <span className="bg-gray-100 px-3 py-1 rounded">Matériel pédagogique fourni</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Questions fréquentes PSC1
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
              Témoignages de nos stagiaires PSC1
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4">
                  "Formation très enrichissante ! J'ai appris des gestes simples qui peuvent vraiment sauver des vies. 
                  Le formateur était très pédagogue et patient."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Amélie D.</strong> - Maman de famille (Challans)
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4">
                  "En tant qu'éducateur sportif, cette formation était indispensable. Les mises en situation étaient très réalistes. 
                  Je me sens maintenant capable d'agir en cas de problème."
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Kevin L.</strong> - Éducateur sportif (Les Sables-d'Olonne)
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(5)}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excellente formation, très bien organisée. Le petit groupe permettait de bien pratiquer. 
                  Je recommande vivement, c'est un devoir citoyen !"
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Michel R.</strong> - Retraité (La Roche-sur-Yon)
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/avis"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Star className="w-5 h-5" />
                Voir tous nos avis
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={`py-16 bg-gradient-to-r ${theme.gradient} text-white`}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Apprenez les gestes qui sauvent
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Rejoignez nos formations PSC1 • Certificat officiel • Accessible dès 10 ans
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className={`bg-white px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.text}`}
              >
                <FileText className="w-5 h-5" />
                S'inscrire au PSC1
              </Link>
              <a
                href="tel:+33672128440"
                className={`px-8 py-4 rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2 ${theme.button}`}
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Formation pratique 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Certificat à vie</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Dès 10 ans</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PSC1Page;