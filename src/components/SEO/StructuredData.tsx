import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Course' | 'FAQPage' | 'BreadcrumbList';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case 'LocalBusiness':
        return {
          ...baseSchema,
          "@type": "LocalBusiness",
          "name": data.name || "SEFOSA",
          "description": data.description || "Organisme de formation spécialisé en secourisme et sécurité incendie",
          "url": "https://www.sefosa85.fr",
          "telephone": data.telephone || "+33672128440",
          "email": data.email || "contact@sefosa85.fr",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": data.address?.addressRegion || "Vendée",
            "addressCountry": data.address?.addressCountry || "FR"
          },
          "areaServed": data.areaServed || ["Vendée", "Loire-Atlantique", "Maine-et-Loire", "Deux-Sèvres"],
          "sameAs": [
            "https://www.facebook.com/p/SEFOSA-61552012141723/"
          ],
          "openingHours": "Mo-Fr 08:00-18:00",
          "priceRange": "€€"
        };

      case 'Course':
        return {
          ...baseSchema,
          "@type": "Course",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": data.provider || "SEFOSA",
            "url": "https://www.sefosa85.fr"
          },
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": data.courseMode || "Présentiel",
            "location": {
              "@type": "Place",
              "name": data.location || "Vendée et départements limitrophes"
            },
            "duration": data.duration
          },
          "coursePrerequisites": data.prerequisites || "Aucun prérequis"
        };

      case 'FAQPage':
        return {
          ...baseSchema,
          "@type": "FAQPage",
          "mainEntity": data.mainEntity
        };

      case 'BreadcrumbList':
        return {
          ...baseSchema,
          "@type": "BreadcrumbList",
          "itemListElement": data.itemListElement
        };

      default:
        return baseSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default StructuredData;