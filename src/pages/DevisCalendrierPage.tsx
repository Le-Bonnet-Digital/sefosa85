import React, { useState } from 'react';
import { 
  FileText, 
  Phone, 
  Mail, 
  Building, 
  Users, 
  Calendar, 
  MapPin, 
  Upload,
  CheckCircle,
  Clock,
  Shield,
  Star
} from 'lucide-react';
import { trackEvent, trackLead } from '../utils/analytics';
import StructuredData from '../components/SEO/StructuredData';

const DevisCalendrierPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    societe: '',
    email: '',
    telephone: '',
    formation: '',
    effectif: '',
    type: 'intra',
    ville: '',
    dateSouhaitee: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formations = [
    { value: 'sst', label: 'SST - Sauveteur Secouriste du Travail' },
    { value: 'mac-sst', label: 'MAC SST - Maintien et Actualisation' },
    { value: 'psc1', label: 'PSC1 - Prévention et Secours Civiques' },
    { value: 'gqs', label: 'Gestes Qui Sauvent' },
    { value: 'pse1', label: 'PSE1 - Premiers Secours en Équipe' },
    { value: 'pse2', label: 'PSE2 - Premiers Secours en Équipe' },
    { value: 'epi', label: 'EPI - Équipier de Première Intervention' },
    { value: 'extincteur', label: 'Manipulation d\'extincteur' },
    { value: 'evacuation', label: 'Évacuation incendie' },
    { value: 'autre', label: 'Autre formation' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track lead submission
      trackLead({
        email: formData.email,
        phone: formData.telephone,
        formation: formData.formation,
        company: formData.societe,
        participants: parseInt(formData.effectif) || 0,
        value: 500 // Estimated lead value
      });

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        nom: '',
        societe: '',
        email: '',
        telephone: '',
        formation: '',
        effectif: '',
        type: 'intra',
        ville: '',
        dateSouhaitee: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'devis_page' });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Demande envoyée !
            </h2>
            <p className="text-gray-600 mb-6">
              Votre demande de devis a été transmise. Nous vous recontactons sous 24h maximum.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Réponse garantie sous 24h</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Mail className="w-4 h-4" />
                <span>Email de confirmation envoyé</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="tel:+33672128440"
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Demande de devis formation",
          description: "Demandez votre devis personnalisé pour vos formations secourisme et incendie en Vendée",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr"
        }}
      />

      <div className="pb-16 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Demande de devis
              <span className="block text-2xl lg:text-3xl font-normal text-blue-100 mt-2">
                Réponse garantie sous 24h
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Obtenez rapidement un devis personnalisé pour vos formations secourisme et incendie. 
              Nos équipes vous recontactent dans les meilleurs délais.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-300" />
                <span>Devis gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-300" />
                <span>4.9/5 - 47 avis</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Demande de devis personnalisé
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom et prénom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="societe" className="block text-sm font-medium text-gray-700 mb-2">
                      Société / Organisation
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="societe"
                        name="societe"
                        value={formData.societe}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Mon Entreprise SARL"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="jean.dupont@exemple.fr"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="formation" className="block text-sm font-medium text-gray-700 mb-2">
                    Formation souhaitée *
                  </label>
                  <select
                    id="formation"
                    name="formation"
                    value={formData.formation}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Sélectionnez une formation</option>
                    {formations.map(formation => (
                      <option key={formation.value} value={formation.value}>
                        {formation.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Type de formation
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="intra"
                          checked={formData.type === 'intra'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">
                          <strong>Intra-entreprise</strong> - Sur votre site
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="inter"
                          checked={formData.type === 'inter'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">
                          <strong>Inter-entreprise</strong> - En centre
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="effectif" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de participants
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        id="effectif"
                        name="effectif"
                        value={formData.effectif}
                        onChange={handleInputChange}
                        min="1"
                        max="20"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="8"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ville" className="block text-sm font-medium text-gray-700 mb-2">
                      Ville / Localisation
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="ville"
                        name="ville"
                        value={formData.ville}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="La Roche-sur-Yon"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="dateSouhaitee" className="block text-sm font-medium text-gray-700 mb-2">
                      Date souhaitée
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        id="dateSouhaitee"
                        name="dateSouhaitee"
                        value={formData.dateSouhaitee}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message ou demandes spécifiques
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Précisez vos besoins, contraintes particulières, objectifs spécifiques..."
                  />
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Upload className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Cahier des charges</h4>
                      <p className="text-sm text-blue-700">
                        Vous pouvez nous transmettre votre cahier des charges par email : 
                        <a href="mailto:contact@sefosa85.fr" className="font-medium hover:underline ml-1">
                          contact@sefosa85.fr
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-500 text-white py-4 px-6 rounded-lg hover:bg-red-600 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FileText className="w-5 h-5" />
                      Demander mon devis gratuit
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par SEFOSA dans le cadre de votre demande.
                  Nous nous engageons à ne pas transmettre vos données à des tiers.
                </p>
              </form>
            </div>

            {/* Sidebar informations */}
            <div className="space-y-8">
              {/* Contact direct */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Besoin d'une réponse immédiate ?</h3>
                <p className="text-red-100 mb-6">
                  Contactez-nous directement pour obtenir des informations en temps réel
                  sur nos disponibilités et tarifs.
                </p>
                
                <div className="space-y-4 mb-6">
                  <a
                    href="tel:+33672128440"
                    onClick={handlePhoneClick}
                    className="flex items-center gap-3 text-white hover:text-red-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">06 72 12 84 40</div>
                      <div className="text-sm text-red-200">Lundi - Vendredi : 8h - 18h</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:contact@sefosa85.fr"
                    className="flex items-center gap-3 text-white hover:text-red-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">contact@sefosa85.fr</div>
                      <div className="text-sm text-red-200">Réponse sous 4h en général</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Avantages */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Pourquoi choisir SEFOSA ?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Formateur expérimenté</h4>
                      <p className="text-sm text-gray-600">15+ ans d'expérience, certifications à jour</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Intervention sur site</h4>
                      <p className="text-sm text-gray-600">Nous venons avec tout le matériel nécessaire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Réactivité garantie</h4>
                      <p className="text-sm text-gray-600">Réponse sous 24h, intervention sous 72h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Assurance RC Pro</h4>
                      <p className="text-sm text-gray-600">Couverture complète de nos interventions</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-700 mb-2">
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">4.9/5 sur Google</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Basé sur 47 avis clients vérifiés
                  </p>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Zone d'intervention</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Vendée (85)</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• La Roche-sur-Yon</div>
                      <div>• Les Sables-d'Olonne</div>
                      <div>• Challans</div>
                      <div>• Fontenay-le-Comte</div>
                      <div>• Et toute la Vendée</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Départements limitrophes</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>• Loire-Atlantique (44)</div>
                      <div>• Maine-et-Loire (49)</div>
                      <div>• Deux-Sèvres (79)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevisCalendrierPage;