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
  Award,
  Shield
} from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import StructuredData from '../../components/SEO/StructuredData';
import BreadcrumbNav from '../../components/UI/BreadcrumbNav';

const VendeePage = () => {
  const handleCTAClick = (location: string) => {
    trackEvent('vendee_cta_click', { location });
  };

  const villes = [
    {
      nom: "La Roche-sur-Yon",
      slug: "la-roche-sur-yon",
      description: "Préfecture de la Vendée, centre administratif et économique",
      population: "55 000 habitants",
      color: "from-blue-500 to-blue-600"
    },
    {
      nom: "Les Sables-d'Olonne",
      slug: "les-sables-d-olonne", 
      description: "Station balnéaire, port de pêche et de plaisance",
      population: "45 000 habitants",
      color: "from-green-500 to-green-600"
    },
    {
      nom: "Challans",
      slug: "challans",
      description: "Porte d'entrée du marais breton vendéen",
      population: "20 000 habitants", 
      color: "from-purple-500 to-purple-600"
    },
    {
      nom: "Fontenay-le-Comte",
      slug: "fontenay-le-comte",
      description: "Ancienne capitale du Bas-Poitou",
      population: "14 000 habitants",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Zone d\'intervention Vendée', href: '/vendee' }
  ];

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Formations Vendée",
          description: "Formations secourisme et incendie en Vendée (85) et départements limitrophes",
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
              Formations en Vendée (85)
              <span className="block text-2xl lg:text-3xl font-normal text-blue-100 mt-2">
                Intervention dans tout le département
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              <strong>SEFOSA</strong> intervient dans toute la Vendée et les départements limitrophes 
              pour vos formations secourisme et sécurité incendie sur site.
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
                className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-all font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                06 72 12 84 40
              </a>
            </div>
          </div>
        </section>

        {/* Villes principales */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Principales villes d'intervention
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {villes.map((ville, index) => (
                <Link
                  key={index}
                  to={`/vendee/${ville.slug}`}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className={`h-32 bg-gradient-to-br ${ville.color} flex items-center justify-center`}>
                    <MapPin className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{ville.nom}</h3>
                    <p className="text-gray-600 mb-3">{ville.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{ville.population}</span>
                      <span className="text-blue-600 font-medium">Voir détails →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Zone étendue */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Zone d'intervention étendue
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">44</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Loire-Atlantique</h3>
                <p className="text-gray-600">Nantes, Saint-Nazaire, Ancenis</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">49</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maine-et-Loire</h3>
                <p className="text-gray-600">Angers, Cholet, Saumur</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">79</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deux-Sèvres</h3>
                <p className="text-gray-600">Niort, Bressuire, Parthenay</p>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-yellow-800 mb-4">
                Conditions d'intervention
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Vendée (85) :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Intervention sous 48h</li>
                    <li>• Frais de déplacement inclus</li>
                    <li>• Matériel pédagogique fourni</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Départements limitrophes :</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Conditions sur devis</li>
                    <li>• Selon distance et effectif</li>
                    <li>• Groupement possible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Pourquoi choisir SEFOSA en Vendée ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Réactivité</h3>
                <p className="text-gray-600">Intervention sous 48-72h en Vendée</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sur mesure</h3>
                <p className="text-gray-600">Formations adaptées à vos risques</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600">15+ ans d'expérience locale</p>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.9/5 - 47 avis Google</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Assurance RC Pro</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Besoin d'une formation en Vendée ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour un devis personnalisé • Intervention rapide
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
                className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
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

export default VendeePage;