import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';

export default function App() {
  // КРИТИЧЕСКИ ВАЖНО: Устанавливаем мета-теги ДО рендеринга любого контента
  // Это должно выполниться в самом начале загрузки приложения
  useEffect(() => {
    // Удаляем все существующие noindex теги немедленно
    const removeNoindexTags = () => {
      const allMetaTags = document.querySelectorAll('meta[name="robots"], meta[name="googlebot"]');
      allMetaTags.forEach(tag => {
        const metaTag = tag as HTMLMetaElement;
        if (metaTag.content.includes('noindex')) {
          console.error('🚨 НАЙДЕН NOINDEX В НАЧАЛЬНОМ HTML - УДАЛЯЕМ');
          tag.remove();
        }
      });
      
      // Сразу создаем правильные теги
      const createRobotsTag = (name: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!tag) {
          tag = document.createElement('meta');
          tag.name = name;
          document.head.appendChild(tag);
        }
        tag.content = 'index, follow';
        console.log(`✅ Установлен ${name}: index, follow`);
      };
      
      createRobotsTag('robots');
      createRobotsTag('googlebot');
      createRobotsTag('bingbot');
      createRobotsTag('yandex');
    };
    
    // Выполняем СРАЗУ
    removeNoindexTags();
    
    console.log('🚀 App.tsx: Мета-теги индексации установлены');
  }, []);
  
  return <RouterProvider router={router} />;
}