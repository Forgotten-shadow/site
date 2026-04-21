import { Award, Users, DollarSign, Building } from 'lucide-react';
import { ImageWithFallback } from './IMG_errors/ImageWithFallback';

export function Stats() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&q=80"
                alt="Our team"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
              О компании
            </div>
            <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
              Ваш надежный финансовый партнер
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы помогаем частным лицам и компаниям достигать финансовых целей через профессиональное управление активами, инвестиционные решения и персонализированное планирование.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша команда экспертов с многолетним опытом работы на финансовых рынках обеспечивает индивидуальный подход к каждому клиенту и гарантирует прозрачность всех операций.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
