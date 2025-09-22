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
  TreePine,
  Shield
} from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import StructuredData from '../../components/SEO/StructuredData';
import BreadcrumbNav from '../../components/UI/BreadcrumbNav';

const ChallansPage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('challans_cta_click', { location });
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
    { label: 'Challans', href: '/vendee/challans' }
  ];

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Formations Challans",
          description: "Formations secourisme et incendie à Challans (85). SST, MAC SST, PSC1, EPI sur site.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: "Challans"
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-500 to-purple-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Formations à Challans
              <span className="block text-2xl lg:text-3xl font-normal text-purple-100 mt-2">
                Nord Vendée - Marais breton (85300)
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              <strong>SEFOSA</strong> intervient à Challans et dans le nord Vendée 
              pour vos formations secourisme et sécurité incendie sur site.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('hero_primary')}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Devis gratuit sous 24h
              </Link>
              <a
                href="tel:+33672128440"
                onClick={() => handleCTAClick('hero_phone')}
                className="bg-purple-700 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
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
              Formations disponibles à Challans
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
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {formation.duree}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{formation.description}</p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>En savoir plus</span>
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Spécificités nord Vendée */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Formations adaptées au nord Vendée
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TreePine className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Secteur rural</h3>
                <p className="text-gray-600">Formations adaptées aux entreprises agricoles et rurales</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Proximité 44</h3>
                <p className="text-gray-600">Accès facile depuis la Loire-Atlantique</p>
              </div>

              <div className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Flexibilité</h3>
                <p className="text-gray-600">Horaires adaptés aux contraintes agricoles</p>
              </div>
            </div>

            <div className="mt-12 bg-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">
                Zone d'intervention nord Vendée
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Communes proches :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Commequiers</li>
                    <li>• Saint-Gervais</li>
                    <li>• Soullans</li>
                    <li>• Saint-Christophe-du-Ligneron</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Secteurs d'activité :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Agriculture et élevage</li>
                    <li>• Coopératives agricoles</li>
                    <li>• Artisanat local</li>
                    <li>• Services publics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Besoin d'une formation à Challans ?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Intervention nord Vendée • Secteur rural • Horaires flexibles
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                onClick={() => handleCTAClick('final_cta')}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Demander un devis
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-purple-700 text-white px-8 py-4 rounded-lg hover:bg-purple-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
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

export default ChallansPage;