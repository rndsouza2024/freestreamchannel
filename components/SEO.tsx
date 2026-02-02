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
    // We remove the old script entirely and create a new one to force the crawler to re-evaluate
    const scriptId = 'dynamic-json-ld';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup function not strictly necessary for script removal as we handle it at start of effect,
    // but good practice to clean up when unmounting if leaving the page.
    return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
            scriptToRemove.remove();
        }
    };

  }, [title, description, image, type, schema]);

  return null;
};

export default SEO;