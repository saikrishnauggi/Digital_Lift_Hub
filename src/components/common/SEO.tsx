import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  jsonLd?: object;
};

const SEO = ({ title, description, canonical = "/", jsonLd }: SEOProps) => {
  useEffect(() => {
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', description);
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);

    let script = document.getElementById('page-jsonld') as HTMLScriptElement | null;
    if (script) script.remove();
    if (jsonLd) {
      script = document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default SEO;