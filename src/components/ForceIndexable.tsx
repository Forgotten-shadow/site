import { useEffect } from 'react';

/**
 * Глобальный компонент для принудительного удаления noindex тегов
 * Устанавливается в Root компоненте для защиты всего сайта
 */
export function ForceIndexable() {
  useEffect(() => {
    // Функция для проверки и удаления noindex тегов
    const enforceIndexable = () => {
      // Проверяем все meta robots теги
      const allRobotsTags = document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[name="bingbot"], meta[name="yandex"]');
      
      allRobotsTags.forEach((tag) => {
        const metaTag = tag as HTMLMetaElement;
        if (metaTag.content.includes('noindex')) {
          console.warn(`⚠️ ОБНАРУЖЕН БЛОКИРУЮЩИЙ ТЕГ: ${metaTag.name}="${metaTag.content}"`);
          console.warn('🔧 Исправляем на index, follow...');
          metaTag.content = 'index, follow';
        }
      });
    };

    // Запускаем проверку сразу
    enforceIndexable();

    // Запускаем проверку через 100мс (на случай асинхронной загрузки)
    const timer1 = setTimeout(enforceIndexable, 100);

    // Запускаем проверку через 500мс (дополнительная защита)
    const timer2 = setTimeout(enforceIndexable, 500);

    // Наблюдатель за изменениями в <head>
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeName === 'META') {
            const metaNode = node as HTMLMetaElement;
            const name = metaNode.getAttribute('name');
            
            if (name && ['robots', 'googlebot', 'bingbot', 'yandex'].includes(name)) {
              if (metaNode.content.includes('noindex')) {
                console.warn(`⚠️ ПОПЫТКА ДОБАВИТЬ NOINDEX через ${name} - БЛОКИРУЕМ`);
                metaNode.content = 'index, follow';
              }
            }
          }
        });
      });
    });

    // Наблюдаем за изменениями в <head>
    observer.observe(document.head, {
      childList: true,
      subtree: true,
    });

    // Выводим в консоль текущее состояние для отладки
    console.log('✅ ForceIndexable активирован');
    console.log('📊 Текущие meta robots теги:');
    document.querySelectorAll('meta[name="robots"], meta[name="googlebot"]').forEach(tag => {
      const metaTag = tag as HTMLMetaElement;
      console.log(`  - ${metaTag.name}: ${metaTag.content}`);
    });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      observer.disconnect();
    };
  }, []);

  return null;
}
