import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials'; // Добавляем импорт

export function TestimonialsPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Отзывы — Nexus Financial Advisory"
        description="Отзывы клиентов о финансовых и маркетинговых услугах Nexus Financial Advisory."
        keywords="отзывы, клиенты, рекомендации"
      />
      <Testimonials /> {/* Выводим сам блок с отзывами */}
    </div>
  );
}