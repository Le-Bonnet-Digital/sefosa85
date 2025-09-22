import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Phone } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h2>
          <p className="text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          
          <Link
            to="/formations/secourisme"
            className="w-full bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Voir les formations
          </Link>
          
          <a
            href="tel:+33672128440"
            className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Nous contacter
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Vous cherchez une formation spécifique ?</p>
          <p>Contactez-nous au 06 72 12 84 40</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;