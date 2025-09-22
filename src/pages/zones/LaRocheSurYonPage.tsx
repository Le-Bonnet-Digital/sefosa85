import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  FileText, 
  CheckCircle,
  Users,
  Clock,
  Star,
  Building,
  Shield
} from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import StructuredData from '../../components/SEO/StructuredData';
import BreadcrumbNav from '../../components/UI/BreadcrumbNav';

const LaRocheSurYonPage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('la_roche_cta_click', { location });
  };

  const formations = [
    { nom: "SST", description: "Sauveteur Secouriste du Travail", duree: "14h", lien: "/formations/secourisme/sst" },
    { nom: "MAC SST", description: "Maintien et Actualisation", duree: "7h", lien: "/formations/secourisme/mac-sst" },
    { nom: "PSC1", description: "Prévention et Secours Civiques", duree: "7h", lien: "/formations/secourisme/psc1" },
    { nom: "EPI", description: "Équipier Première Intervention", duree: "3h30", lien: "/formations/incendie/epi" }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Zone d\'intervention Vendée', href: '/vendee' },
    { label: 'La Roche-sur-Yon', href: '/vendee/la-roche-sur-yon' }
  ];

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Formations La Roche-sur-Yon",
          description: "Formations secourisme et incendie à La Roche-sur-Yon (85). SST, MAC SST, PSC1, EPI sur site.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: "La Roche-sur-Yon"
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Formations à La Roche-sur-Yon
              <span className="block text-2xl lg:text-3xl font-normal text-blue-100 mt-2">
                Préfecture de la Vendée (85000)
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              <strong>SEFOSA</strong> intervient à La Roche-sur-Yon et ses environs 
              pour vos formations secourisme et sécurité incendie directement sur votre site.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('hero_primary')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Devis gratuit sous 24h
              </Link>
              <a
                href="tel:+33672128440"
                onClick={() => handleCTAClick('hero_phone')}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>
          </div>
        </section>

        {/* Formations disponibles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Formations disponibles à La Roche-sur-Yon
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {formations.map((formation, index) => (
                <Link
                  key={index}
                  to={formation.lien}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{formation.nom}</h3>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {formation.duree}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{formation.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>En savoir plus</span>
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages locaux */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Pourquoi choisir SEFOSA à La Roche-sur-Yon ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proximité</h3>
                <p className="text-gray-600">Intervention rapide dans toute l'agglomération yonnaise</p>
              </div>

              <div className="text-center">
                <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sur site</h3>
                <p className="text-gray-600">Formation directement dans vos locaux avec notre matériel</p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Réactivité</h3>
                <p className="text-gray-600">Intervention sous 48h, réponse devis sous 24h</p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                Zone d'intervention autour de La Roche-sur-Yon
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Communes proches :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Mouilleron-le-Captif</li>
                    <li>• La Ferrière</li>
                    <li>• Aubigny-Les Clouzeaux</li>
                    <li>• Dompierre-sur-Yon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Secteurs d'activité :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Administrations publiques</li>
                    <li>• Entreprises industrielles</li>
                    <li>• Commerces et services</li>
                    <li>• Établissements de santé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Besoin d'une formation à La Roche-sur-Yon ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Intervention rapide • Sur site • Matériel fourni
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Demander un devis
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>4.9/5 - 47 avis Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span>Assurance RC Pro</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LaRocheSurYonPage;