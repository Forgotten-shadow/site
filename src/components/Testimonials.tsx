import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Александра Петрова',
    role: 'Предприниматель',
    content: 'Nexus Financial Advisory помог мне правильно структурировать инвестиционный портфель. За год доходность составила 18%, что превзошло все мои ожидания. Профессиональная команда и прозрачный подход.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    name: 'Дмитрий Соколов',
    role: 'IT-специалист',
    content: 'Обратился за ипотекой, получил отличные условия и быструю обработку. Консультанты объяснили все детали, помогли с документами. Рекомендую всем, кто ищет надежного финансового партнера.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Елена Волкова',
    role: 'Маркетолог',
    content: 'Доверяю управление своими накоплениями Nexus Financial Advisory уже 3 года. Индивидуальный подход, регулярная отчетность и стабильный рост капитала — именно то, что я искала. Спасибо команде!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            Отзывы клиентов
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Истории успеха людей, которые доверили нам свои финансы
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 via-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-purple-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
          >
            Стать нашим клиентом
          </Link>
        </div>
      </div>
    </section>
  );
}