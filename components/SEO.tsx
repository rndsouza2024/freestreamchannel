import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description = "Watch free movies and TV shows online with Uwatchfree Stream official. Stream popular films, live sports, and IPTV with fast playback and no sign-up.",
  image = "https://uwatchfree-official.vercel.app/og-image.jpg",
  type = "website",
  schema
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Tags
    const metaTags = {
      'description': description,
      'og:title': title,
      'og:description': description,
      'og:image': image,
      'og:type': type,
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      // Check standard meta tags
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        // Check Open Graph tags
        element = document.querySelector(`meta[property="${name}"]`);
      }

      if (element) {
        element.setAttribute('content', content);
      } else {
        const newMeta = document.createElement('meta');
        if (name.startsWith('og:')) {
            newMeta.setAttribute('property', name);
        } else {
            newMeta.setAttribute('name', name);
        }
        newMeta.setAttribute('content', content);
        document.head.appendChild(newMeta);
      }
    });

    // Handle Dynamic Schema Injection
    const scriptId = 'dynamic-json-ld';
    let script = document.getElementById(scriptId);

    if (schema) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      // Cleanup if no schema provided for this page
      if (script) {
        script.remove();
      }
    }

  }, [title, description, image, type, schema]);

  return null;
};

export default SEO;