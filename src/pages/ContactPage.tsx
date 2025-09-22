import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle,
  Send,
  User,
  Building,
  MessageSquare
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import StructuredData from '../components/SEO/StructuredData';
import BreadcrumbNav from '../components/UI/BreadcrumbNav';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    societe: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      // Track contact form submission
      trackEvent('contact_form_submit', {
        sujet: formData.sujet,
        has_company: !!formData.societe
      });

      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        societe: '',
        sujet: '',
        message: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'contact_page' });
  };

  const handleEmailClick = () => {
    trackEvent('email_click', { location: 'contact_page' });
  };

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Contact', href: '/contact' }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Message envoyé !
            </h2>
            <p className="text-gray-600 mb-6">
              Votre message a été transmis. Nous vous recontactons sous 24h maximum.
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
          name: "SEFOSA - Contact",
          description: "Contactez SEFOSA pour vos formations secourisme et incendie en Vendée. Réponse sous 24h.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"]
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contactez SEFOSA
              <span className="block text-2xl lg:text-3xl font-normal text-blue-100 mt-2">
                Réponse garantie sous 24h
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Une question sur nos formations ? Besoin d'un devis personnalisé ? 
              Contactez-nous par téléphone, email ou via notre formulaire.
            </p>

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
                <span>Devis personnalisé</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Nos coordonnées
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:+33672128440"
                    onClick={handlePhoneClick}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Téléphone</h3>
                      <p className="text-blue-600 font-semibold text-lg">06 72 12 84 40</p>
                      <p className="text-sm text-gray-500">Lundi - Vendredi : 8h - 18h</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@sefosa85.fr"
                    onClick={handleEmailClick}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-green-600 font-semibold">contact@sefosa85.fr</p>
                      <p className="text-sm text-gray-500">Réponse sous 4h en général</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Zone d'intervention</h3>
                      <p className="text-gray-700">Vendée (85) et départements limitrophes</p>
                      <p className="text-sm text-gray-500">Loire-Atlantique, Maine-et-Loire, Deux-Sèvres</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  Nos engagements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Réponse sous 24h maximum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Devis gratuit et sans engagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Conseil personnalisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Intervention sur site</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom et prénom *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
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
                      Téléphone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet de votre demande
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="information">Information sur une formation</option>
                    <option value="calendrier">Disponibilités et calendrier</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Décrivez votre besoin, vos questions..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être recontacté par SEFOSA dans le cadre de votre demande.
                  Nous nous engageons à ne pas transmettre vos données à des tiers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;