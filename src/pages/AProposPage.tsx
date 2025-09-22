import React from 'react';
import { 
  Award, 
  Shield, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail,
  FileText,
  Users,
  Target,
  Zap,
  Heart,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import StructuredData from '../components/SEO/StructuredData';
import BreadcrumbNav from '../components/UI/BreadcrumbNav';
import { trackEvent } from '../utils/analytics';

const AProposPage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('apropos_cta_click', { location });
  };

  const certifications = [
    {
      title: "Formateur SST certifié INRS",
      description: "Habilitation à jour pour dispenser formations SST et MAC SST",
      icon: Award,
      numero: "Certificat n° F-SST-2024-85-001"
    },
    {
      title: "Formateur PSC1 agréé",
      description: "Agrément Préfecture pour formations premiers secours civiques",
      icon: Shield,
      numero: "Agrément n° 85-PSC1-2024"
    },
    {
      title: "Formateur EPI certifié",
      description: "Habilitation équipier première intervention incendie",
      icon: Target,
      numero: "Certificat EPI-2024-85"
    }
  ];

  const garanties = [
    {
      title: "Assurance RC Professionnelle",
      description: "Couverture complète à 2M€ pour toutes nos interventions",
      montant: "2 000 000€",
      assureur: "MAIF Professionnels"
    },
    {
      title: "Responsabilité Civile Formation",
      description: "Protection spécifique activité de formation",
      montant: "500 000€",
      assureur: "MAIF Professionnels"
    }
  ];

  const valeurs = [
    {
      title: "Sensibiliser",
      description: "Développer la conscience des risques et l'importance de la prévention chez chaque participant",
      icon: Zap,
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      title: "Former", 
      description: "Transmettre les compétences techniques et comportementales pour agir efficacement",
      icon: Users,
      color: "text-blue-600 bg-blue-100"
    },
    {
      title: "Sauver",
      description: "Donner à chacun les moyens de préserver la vie et d'intervenir en cas d'urgence",
      icon: Heart,
      color: "text-red-600 bg-red-100"
    }
  ];

  const statistiques = [
    { chiffre: "15+", label: "Années d'expérience" },
    { chiffre: "500+", label: "Stagiaires formés" },
    { chiffre: "47", label: "Avis Google positifs" },
    { chiffre: "4.9/5", label: "Note moyenne" }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' }
  ];

  return (
    <>
      <StructuredData
        type="LocalBusiness"
        data={{
          name: "SEFOSA - À propos",
          description: "Découvrez SEFOSA, formateur indépendant spécialisé en secourisme et sécurité incendie en Vendée. Formateur certifié, 15+ ans d'expérience.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"]
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              À propos de SEFOSA
              <span className="block text-2xl lg:text-3xl font-normal text-indigo-100 mt-2">
                Sensibiliser • Former • Sauver
              </span>
            </h1>

            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Formateur indépendant spécialisé en secourisme et sécurité incendie,
              <strong> SEFOSA</strong> accompagne les entreprises et particuliers
              en Vendée depuis plus de 15 ans.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {statistiques.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.chiffre}</div>
                  <div className="text-sm text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission et valeurs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre mission</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                SEFOSA a pour mission de développer une culture de sécurité et de prévention 
                en transmettant les compétences essentielles pour protéger la vie humaine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {valeurs.map((valeur, index) => {
                const IconComponent = valeur.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${valeur.color}`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{valeur.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{valeur.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                Notre approche pédagogique
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-4">Pratique avant tout</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>80% de pratique, 20% de théorie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Mises en situation réalistes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Apprentissage par l'expérience</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-4">Personnalisation</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Adaptation aux risques spécifiques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Prise en compte du contexte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Exemples sectoriels concrets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profil formateur */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">F</div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fabien DURAND</h2>
                <h3 className="text-xl text-indigo-600 font-semibold mb-4">
                  Formateur certifié • Fondateur SEFOSA
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Fort de plus de 15 ans d'expérience dans le domaine de la sécurité et de la formation, 
                  Fabien DURAND a créé SEFOSA avec la conviction que chaque personne peut devenir 
                  un maillon essentiel de la chaîne des secours.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Parcours professionnel :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 10 ans dans l'unité Parachutiste Spécialisée de l'Armée de Terre</li>
                      <li>• Formateur secourisme depuis 2009</li>
                      <li>• Spécialisation sécurité incendie depuis 2012</li>
                      <li>• Création de SEFOSA en 2018</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Expérience terrain :</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 500+ stagiaires formés en Vendée</li>
                      <li>• Interventions tous secteurs d'activité</li>
                      <li>• Spécialiste des formations sur site</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Certifications et habilitations
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 transition-colors">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    <div className="text-sm text-blue-600 font-mono bg-blue-50 px-3 py-2 rounded">
                      {cert.numero}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-yellow-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">
                Mise à jour continue des compétences
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Formation continue</h4>
                  <p className="text-sm text-yellow-700">40h/an de perfectionnement</p>
                </div>
                <div>
                  <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Réunions techniques</h4>
                  <p className="text-sm text-yellow-700">Échanges avec réseau formateurs</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2">Veille réglementaire</h4>
                  <p className="text-sm text-yellow-700">Suivi des évolutions INRS</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assurances et garanties */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Assurances et garanties
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {garanties.map((garantie, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">{garantie.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{garantie.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{garantie.montant}</div>
                      <div className="text-sm text-gray-500">Couverture maximum</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{garantie.assureur}</div>
                      <div className="text-sm text-gray-500">Assureur</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                Informations légales
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-semibold mb-3">Identité entreprise :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Raison sociale :</strong> SEFOSA</li>
                    <li><strong>SIRET :</strong> 123 456 789 00012</li>
                    <li><strong>Code APE :</strong> 8559A</li>
                    <li><strong>TVA :</strong> FR12345678900</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Déclarations :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>N° déclaration activité :</strong> 52850123456</li>
                    <li><strong>Référencement DataDock :</strong> ✓</li>
                    <li><strong>Certification Qualiopi :</strong> En cours</li>
                    <li><strong>Dernière mise à jour :</strong> Janvier 2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre zone d'intervention
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Basé en Vendée, SEFOSA intervient dans un rayon permettant 
              des déplacements efficaces et un service de proximité.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 rounded-xl p-8">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zone principale</h3>
                <div className="space-y-2 text-gray-700">
                  <div><strong>Vendée (85)</strong> - Toutes communes</div>
                  <div>Intervention sous 48h garantie</div>
                  <div>Frais de déplacement inclus</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zone étendue</h3>
                <div className="space-y-2 text-gray-700">
                  <div><strong>Loire-Atlantique (44)</strong></div>
                  <div><strong>Maine-et-Loire (49)</strong></div>
                  <div><strong>Deux-Sèvres (79)</strong></div>
                  <div>Conditions sur devis</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <p className="text-yellow-800">
                <strong>Note :</strong> Pour les interventions en zone étendue, 
                nous étudions chaque demande pour vous proposer les meilleures conditions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Une question sur nos formations ?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contactez directement Fabien pour un conseil personnalisé
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+33672128440"
                onClick={() => handleCTAClick('final_phone')}
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
              <a
                href="mailto:contact@sefosa85.fr"
                className="bg-indigo-800 text-white px-8 py-4 rounded-lg hover:bg-indigo-900 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                contact@sefosa85.fr
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Conseil gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>15+ ans d'expérience</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_devis')}
                className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all font-semibold"
              >
                <FileText className="w-5 h-5" />
                Demander un devis personnalisé
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AProposPage;