import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
}

export function SEO({ 
  title = 'Nexus Financial Advisory — Финансовое консультирование и маркетинг',
  description = 'Профессиональные финансовые и маркетинговые консультации для бизнеса. Стратегическое планирование, оптимизация, оценка и анализ.',
  keywords = 'финансовое консультирование, маркетинг, стратегическое планирование, финансовый анализ, бизнес консалтинг',
  ogTitle,
  ogDescription,
  noindex = false
}: SEOProps) {
  useEffect(() => {
    // КРИТИЧЕСКИ ВАЖНО: Удаляем все существующие meta robots теги, которые могут блокировать индексацию
    const removeOldRobotsTags = () => {
      // Удаляем все meta robots теги
      const oldRobotsTags = document.querySelectorAll('meta[name="robots"]');
      oldRobotsTags.forEach(tag => tag.remove());
      
      const oldGooglebotTags = document.querySelectorAll('meta[name="googlebot"]');
      oldGooglebotTags.forEach(tag => tag.remove());
    };

    // Сначала удаляем старые теги
    removeOldRobotsTags();
    
    // Устанавливаем title
    document.title = title;

    // Функция для обновления или создания мета-тега
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Функция для установки link тега
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      
      link.href = href;
    };

    // SEO мета-теги - ЯВНО устанавливаем index, follow
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    
    // КРИТИЧЕСКИ ВАЖНО: Всегда разрешаем индексацию, если не указано обратное
    const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    const googlebotContent = noindex ? 'noindex, nofollow' : 'index, follow';
    
    setMetaTag('robots', robotsContent);
    setMetaTag('googlebot', googlebotContent);
    setMetaTag('bingbot', googlebotContent);
    setMetaTag('yandex', googlebotContent);
    
    setMetaTag('author', 'Nexus Financial Advisory');
    setMetaTag('language', 'Russian');
    
    // Canonical URL
    setLinkTag('canonical', window.location.href);
    
    // Open Graph теги
    setMetaTag('og:title', ogTitle || title, true);
    setMetaTag('og:description', ogDescription || description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', window.location.href, true);
    setMetaTag('og:locale', 'ru_RU', true);
    setMetaTag('og:site_name', 'Nexus Financial Advisory', true);
    
    // Twitter Card теги
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', ogTitle || title);
    setMetaTag('twitter:description', ogDescription || description);
    
    // Дополнительные теги
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('format-detection', 'telephone=yes');
    
    // Добавляем дополнительную проверку через небольшую задержку
    // На случай если какой-то скрипт пытается добавить noindex после нас
    const recheckTimer = setTimeout(() => {
      const currentRobotsTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (currentRobotsTag && currentRobotsTag.content.includes('noindex') && !noindex) {
        console.warn('Обнаружен тег noindex - исправляем');
        currentRobotsTag.content = robotsContent;
      }
    }, 100);
    
    return () => {
      clearTimeout(recheckTimer);
    };
  }, [title, description, keywords, ogTitle, ogDescription, noindex]);

  return null;
}