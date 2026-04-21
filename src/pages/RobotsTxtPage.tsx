import { useEffect } from 'react';

export function RobotsTxtPage() {
  return null;
}

export async function robotsLoader() {
  const robotsTxt = `# robots.txt для Nexus Financial Advisory

# Разрешаем индексацию всем поисковым роботам
User-agent: *
Allow: /

# Разрешаем индексацию для Google
User-agent: Googlebot
Allow: /

# Разрешаем индексацию для Яндекс
User-agent: Yandex
Allow: /

# Разрешаем индексацию для Bing
User-agent: Bingbot
Allow: /

# Карта сайта
Sitemap: https://wwwnexusfinancialadvisory.com/sitemap.xml`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    }
  });
}