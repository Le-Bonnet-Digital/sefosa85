import React from 'react';
import { Star, Quote, MapPin, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import StructuredData from '../components/SEO/StructuredData';
import BreadcrumbNav from '../components/UI/BreadcrumbNav';

const AvisPage = () => {
  const statistiques = {
    note: 4.9,
    total: 47,
    repartition: [
      { etoiles: 5, nombre: 41 },
      { etoiles: 4, nombre: 5 },
      { etoiles: 3, nombre: 1 },
      { etoiles: 2, nombre: 0 },
      { etoiles: 1, nombre: 0 }
    ]
  };

  const avisRecents = [
    {
      nom: "Marie Dubois",
      entreprise: "SARL Dubois Menuiserie",
      ville: "La Roche-sur-Yon",
      note: 5,
      date: "Il y a 2 semaines",
      commentaire: "Excellente formation SST ! Fabien est très pédagogue et s'adapte parfaitement aux spécificités de notre entreprise. Nos 8 salariés ont été conquis par l'approche pratique et les mises en situation réalistes. Nous recommandons vivement SEFOSA.",
      formation: "Formation SST"
    },
    {
      nom: "Thomas Martineau", 
      entreprise: "Mairie de Challans",
      ville: "Challans",
      note: 5,
      date: "Il y a 1 mois",
      commentaire: "Formation MAC SST parfaite pour notre personnel communal. Organisation impeccable, matériel de qualité et formateur expérimenté. Réponse rapide à notre demande, intervention dans les délais. Très satisfait de cette collaboration.",
      formation: "MAC SST"
    },
    {
      nom: "Sophie Leroy",
      entreprise: "Association Les P'tits Loups",
      ville: "Les Sables-d'Olonne", 
      note: 5,
      date: "Il y a 1 mois",
      commentaire: "Formation PSC1 pour notre équipe d'animateurs. Fabien a su rendre la formation vivante et interactive. Les gestes sont maintenant acquis et nous nous sentons plus sereins lors de nos activités avec les enfants.",
      formation: "Formation PSC1"
    },
    {
      nom: "Jean-Pierre Moreau",
      entreprise: "Garage Moreau",
      ville: "Fontenay-le-Comte",
      note: 5,
      date: "Il y a 2 mois", 
      commentaire: "Super formation ! Enfin un formateur qui prend le temps d'expliquer et de montrer les bons gestes. Formation SST adaptée aux risques de notre garage. Prix correct et service de qualité.",
      formation: "Formation SST"
    },
    {
      nom: "Isabelle Rousseau",
      entreprise: "Lycée Notre-Dame",
      ville: "Challans",
      note: 5,
      date: "Il y a 2 mois",
      commentaire: "Formation EPI très appréciée par notre équipe de maintenance. Pratique sur feux réels très formatrice. SEFOSA est intervenu rapidement après notre demande urgente suite à un audit sécurité.",
      formation: "Formation EPI"
    },
    {
      nom: "Michel Girard",
      entreprise: "Boulangerie Girard",
      ville: "La Roche-sur-Yon", 
      note: 4,
      date: "Il y a 3 mois",
      commentaire: "Bonne formation manipulation extincteur pour toute l'équipe. Exercice pratique très utile. Seul petit bémoire : formation un peu courte mais l'essentiel y était.",
      formation: "Manipulation extincteur"
    },
    {
      nom: "Caroline Blanchard",
      entreprise: "EHPAD Les Jardins",
      ville: "Luçon",
      note: 5,
      date: "Il y a 3 mois",
      commentaire: "Formation SST spécialement adaptée au secteur médico-social. Fabien connaît bien les problématiques des EHPAD. Formation de qualité, personnels satisfaits et opérationnels.",
      formation: "Formation SST"
    },
    {
      nom: "Patrick Vincent",
      entreprise: "Coopérative Agricole",
      ville: "Moutiers-les-Mauxfaits",
      note: 5,
      date: "Il y a 4 mois",
      commentaire: "MAC SST pour 12 de nos collaborateurs. Organisation parfaite sur notre site. Formateur à l'écoute et très compétent. Prix compétitif par rapport à la concurrence.",
      formation: "MAC SST"
    }
  ];

  const breadcrumbItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Avis clients', href: '/avis' }
  ];

  return (
    <>
      <StructuredData 
        type="LocalBusiness" 
        data={{
          name: "SEFOSA - Avis clients formations secourisme",
          description: "Découvrez les avis de nos clients sur nos formations secourisme en Vendée. Plus de 47 avis Google avec une note moyenne de 4.9/5.",
          telephone: "+33672128440",
          email: "contact@sefosa85.fr",
          areaServed: ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"]
        }}
      />

      <div className="pb-16 md:pb-0">
        <BreadcrumbNav items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Avis clients SEFOSA
              <span className="block text-2xl lg:text-3xl font-normal text-yellow-800 mt-2">
                Ils nous font confiance pour leurs formations
              </span>
            </h1>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex text-yellow-600 text-3xl">
                {'★'.repeat(5)}
              </div>
              <div className="text-xl font-bold">
                {statistiques.note}/5
              </div>
              <div className="text-yellow-800">
                ({statistiques.total} avis Google)
              </div>
            </div>

            <p className="text-xl text-yellow-800 max-w-2xl mx-auto">
              Découvrez les retours de nos clients sur nos formations secourisme et incendie 
              en Vendée et départements limitrophes.
            </p>
          </div>
        </section>

        {/* Statistiques détaillées */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Une satisfaction client exceptionnelle
                </h2>
                
                <div className="space-y-4">
                  {statistiques.repartition.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 w-20">
                        <span className="font-medium">{item.etoiles}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-yellow-400 h-3 rounded-full"
                          style={{ width: `${(item.nombre / statistiques.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">{item.nombre}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{statistiques.total}</div>
                    <div className="text-sm text-gray-600">Avis clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Recommandent</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Pourquoi nos clients nous choisissent
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Expertise reconnue</h4>
                      <p className="text-sm text-gray-600">15+ ans d'expérience, formateur certifié</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Approche personnalisée</h4>
                      <p className="text-sm text-gray-600">Formations adaptées à vos risques spécifiques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Réactivité</h4>
                      <p className="text-sm text-gray-600">Intervention rapide, réponse sous 24h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Sur site</h4>
                      <p className="text-sm text-gray-600">Nous venons chez vous avec le matériel</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">4.9/5 sur Google</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    "Formateur très professionnel et pédagogue" - Retour type de nos clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Témoignages récents
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {avisRecents.map((avis, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{avis.nom}</h3>
                      <div className="text-sm text-gray-600 mb-1">{avis.entreprise}</div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{avis.ville}</span>
                        <Clock className="w-4 h-4 ml-2" />
                        <span>{avis.date}</span>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {'★'.repeat(avis.note)}
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {avis.formation}
                    </span>
                  </div>

                  <div className="relative">
                    <Quote className="w-6 h-6 text-gray-300 absolute -top-2 -left-1" />
                    <p className="text-gray-700 pl-6 leading-relaxed">
                      {avis.commentaire}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.google.com/search?q=sefosa+la+roche+sur+yon+avis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Star className="w-5 h-5" />
                Voir tous les avis sur Google
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Secteurs d'activité */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Ils nous font confiance
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Entreprises privées</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Menuiseries et artisans</li>
                  <li>• Garages et mécanique</li>
                  <li>• Boulangeries et commerces</li>
                  <li>• Industries agroalimentaires</li>
                  <li>• Coopératives agricoles</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secteur public</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mairies et collectivités</li>
                  <li>• Lycées et établissements</li>
                  <li>• Services techniques</li>
                  <li>• Centres sociaux</li>
                  <li>• Services de maintenance</li>
                </ul>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Associations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Centres de loisirs</li>
                  <li>• Clubs sportifs</li>
                  <li>• EHPAD et structures santé</li>
                  <li>• Associations culturelles</li>
                  <li>• Structures d'accueil</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                Votre avis compte pour nous !
              </h3>
              <p className="text-blue-800 mb-6">
                Après chaque formation, nous sollicitons vos retours pour améliorer continuellement 
                nos services et nous adapter à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/devis-et-calendrier"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Demander une formation
                </Link>
                <a
                  href="mailto:contact@sefosa85.fr?subject=Témoignage formation"
                  className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Laisser un témoignage
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Plus de 47 entreprises et associations nous font confiance pour leurs formations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/devis-et-calendrier"
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                Demander un devis gratuit
              </Link>
              <a
                href="tel:+33672128440"
                className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all transform hover:-translate-y-1 hover:shadow-xl font-bold text-lg inline-flex items-center justify-center gap-2"
              >
                06 72 12 84 40
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-300" />
                <span>4.9/5 sur Google</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>98% recommandent</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AvisPage;