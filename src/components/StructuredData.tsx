import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Структурированные данные организации
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "name": "Nexus Financial Advisory",
      "description": "Профессиональные финансовые и маркетинговые консультации для бизнеса. Стратегическое планирование, оптимизация, оценка и анализ.",
      "url": window.location.origin,
      "telephone": "+7-931-972-97-12",
      "email": "consult.nfa@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ленинградская ул., д. 3",
        "addressLocality": "Кудрово",
        "addressRegion": "Ленинградская область",
        "addressCountry": "RU"
      },
      "sameAs": [
        "https://t.me/NexusFinancialAdvisory"
      ],
      "areaServed": "RU",
      "serviceType": [
        "Финансовое консультирование",
        "Маркетинговое консультирование",
        "Стратегическое планирование",
        "Финансовая оценка бизнеса",
        "Маркетинговая оценка бизнеса"
      ]
    };

    // Создаем или обновляем script тег с JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(organizationData);

    return () => {
      // Cleanup при размонтировании
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
