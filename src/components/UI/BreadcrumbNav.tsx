import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import StructuredData from '../SEO/StructuredData';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items }) => {
  const structuredData = {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://www.sefosa85.fr${item.href}`
    }))
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={structuredData} />
      <nav className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                to="/"
                className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Home className="w-4 h-4 mr-1" />
                <span className="sr-only">Accueil</span>
              </Link>
            </li>
            {items.slice(1).map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                {index === items.length - 2 ? (
                  <span className="text-gray-900 font-medium">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default BreadcrumbNav;