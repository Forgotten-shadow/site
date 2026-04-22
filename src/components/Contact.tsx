import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { servicesData } from '../data/services';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Ваш URL скрипта Google
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxykB5ZoQNYgV24uA5m4B0eGt28HZCkG434opsQkhp-gqDL0Ehh06xEqj-c-DsMoufY/exec';

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Обязательно для Google Scripts
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Если fetch не выкинул ошибку, считаем отправку успешной
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      // Убираем сообщение об успехе через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 text-base">
            Связаться с нами
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900">
            Начните свой путь к финансовой свободе
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня для бесплатной консультации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Инфо-блок */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Телефон</p>
                  <a href="tel:+79319729712" className="text-gray-600 hover:text-purple-600">+7 (931) 972-97-12</a>
                </div>
              </div>
              {/* Остальные контакты (Email, Telegram, Адрес) оставить как были... */}
            </div>
          </div>

          {/* Форма */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Ваше имя *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Услуга</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                >
                  <option value="">Выберите услугу</option>
                  <option value="consultation">Первичная консультация</option>
                  {servicesData.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Сообщение</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                  placeholder="Опишите ваши цели..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:opacity-90 transition-all disabled:grayscale flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Отправка...' : <><Send className="w-5 h-5" /> Отправить запрос</>}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-center animate-in fade-in">
                  Спасибо! Данные успешно записаны в таблицу.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-center">
                  Произошла ошибка. Пожалуйста, попробуйте позже.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
