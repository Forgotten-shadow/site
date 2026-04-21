import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import logoImg from '../assets/5235948a4a87c728412185749774b6e1bd69eb3e.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Главная', href: '/' },
    { label: 'Услуги', href: '/services' },
    { label: 'О нас', href: '/about' },
  ];

  const legal = [
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'Условия использования', href: '/terms' },
    { label: 'Правовая информация', href: '/legal' },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Logo background */}
      <img
        src={logoImg}
        alt=""
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-80 h-80 object-contain opacity-5 pointer-events-none select-none"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-white">Nexus Financial Advisory</span>
            </Link>
            <p className="text-sm mb-6 leading-relaxed">
              Ваш надежный партнер в мире финансов. Помогаем достигать целей и строить финансовое будущее.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm hover:text-purple-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+79319729712" className="text-sm hover:text-purple-400 transition-colors">
                    +7 (931) 972-97-12
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:consult.nfa@gmail.com" className="text-sm hover:text-purple-400 transition-colors">
                    consult.nfa@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">
                    г. Кудрово, Ленинградская ул., д. 3
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-sm">
              © {currentYear} Nexus Financial Advisory. Все права защищены.
            </p>
            <Link
              to="/privacy"
              className="text-sm px-4 py-1.5 rounded-lg border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition-colors"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}