import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Политика конфиденциальности — Nexus Financial Advisory"
        description="Политика конфиденциальности Nexus Financial Advisory. Информация о сборе, обработке и защите персональных данных. Соответствует требованиям GDPR."
        keywords="политика конфиденциальности, защита данных, GDPR, персональные данные"
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
          <h1 className="text-4xl lg:text-5xl text-white mb-4">Политика конфиденциальности</h1>
          <p className="text-white/80 text-lg">Последнее обновление: 27 февраля 2026 г. · Соответствует требованиям GDPR (ЕС) 2016/679</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Согласие на обработку персональных данных пользователя сайта</h2>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-3">Категории обрабатываемых персональных данных</h2>
          <p>Общие.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-3">Перечень обрабатываемых персональных данных</h2>
          <p>Фамилия, имя, отчество (в объёме, предоставленном Пользователем), адрес электронной почты, номер телефона.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-3">Цели обработки персональных данных</h2>
          <p>Заключение, исполнение и прекращение гражданско-правовых договоров.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-3">Способ обработки персональных данных</h2>
          <p>Смешанная автоматизированная и неавтоматизированная обработка персональных данных.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-3">Действия с персональными данными в ходе их обработки</h2>
          <p>Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача, блокирование, удаление, уничтожение персональных данных.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-3">Срок действия согласия</h2>
          <p>
            С даты предоставления персональных данных Пользователями с их согласия (в применимых случаях) до достижения цели обработки персональных данных, но в любом случае — не более <strong>60 календарных месяцев</strong>, или до момента отзыва Пользователем своего согласия на обработку персональных данных / получения Оператором требования о прекращении обработки персональных данных, если иной срок не предусмотрен действующим законодательством.
          </p>
        </section>

        <div className="border-t pt-8 text-sm text-gray-500">
          <p>По всем вопросам конфиденциальности: <a href="mailto:consult.nfa@gmail.com" className="text-purple-600 hover:underline">consult.nfa@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}