export function SitemapPage() {
  return null;
}

export async function sitemapLoader() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Главная страница -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Страница услуг -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Детальные страницы услуг -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services/financial-planning</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services/financial-optimization</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services/financial-valuation</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services/marketing-planning</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services/marketing-optimization</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/services/marketing-valuation</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- О компании -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/about</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Контакты -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/contact</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Политика конфиденциальности -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/privacy</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Условия использования -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/terms</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Правовая информация -->
  <url>
    <loc>https://wwwnexusfinancialadvisory.com/legal</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      'encoding': 'UTF-8'
    }
  });
}