import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Правовая информация — Nexus Financial Advisory"
        description="Правовая информация и реквизиты компании Nexus Financial Advisory. Информация о регуляторном статусе, конфликте интересов и урегулировании споров."
        keywords="правовая информация, реквизиты компании, регуляторный статус, жалобы, урегулирование споров"
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
          <h1 className="text-4xl lg:text-5xl text-white mb-4">Правовая информация</h1>
          <p className="text-white/80 text-lg">Последнее обновление: 27 февраля 2026 г.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Реквизиты компании</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-3">
            <p><strong>Полное наименование:</strong> ООО «Nexus Financial Advisory»</p>
            <p><strong>Юридический адрес:</strong> г. Кудрово, Ленинградская ул., д. 3</p>
            <p><strong>Email:</strong> <a href="mailto:consult.nfa@gmail.com" className="text-purple-600 hover:underline">consult.nfa@gmail.com</a></p>
            <p><strong>Телефон:</strong> +7 (931) 972-97-12</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Регуляторный статус и лицензирование</h2>
          <p>Nexus Financial Advisory осуществляет деятельность в соответствии с действующим законодательством Российской Федерации. Финансовые консультационные услуги оказываются в рамках применимых регуляторных требований.</p>
          <p className="mt-3">Для клиентов из Европейского союза услуги оказываются в соответствии с требованиями Директивы MiFID II (2014/65/EU) в части применимых положений.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Раскрытие информации об инвестиционных рисках</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-amber-800"><strong>Предупреждение о рисках:</strong> Инвестиции сопряжены с риском. Стоимость инвестиций может как расти, так и снижаться. Прошлые результаты не гарантируют будущей доходности. Вы можете получить обратно меньше, чем вложили. Перед принятием инвестиционных решений рекомендуем проконсультироваться с квалифицированным специалистом.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Конфликт интересов</h2>
          <p>Nexus Financial Advisory придерживается строгой политики управления конфликтами интересов. Наши консультанты обязаны раскрывать любые потенциальные конфликты интересов до предоставления рекомендаций. Вознаграждение сотрудников не зависит от конкретных продуктов, рекомендуемых клиентам.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Жалобы и урегулирование споров</h2>
          <p>В случае возникновения претензий обращайтесь:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Email: <a href="mailto:consult.nfa@gmail.com" className="text-purple-600 hover:underline">consult.nfa@gmail.com</a></li>
            <li>Письменно по юридическому адресу компании</li>
          </ul>
          <p className="mt-3">Мы рассматриваем жалобы в течение 30 рабочих дней. При неурегулировании спора в досудебном порядке вы вправе обратиться в компетентные органы или суд.</p>
          <p className="mt-3">Клиенты из ЕС также могут воспользоваться платформой онлайн-урегулирования споров ЕС: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">ec.europa.eu/consumers/odr</a></p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Защита персональных данных (DPO)</h2>
          <p>Ответственный за защиту данных (DPO):<br />
            Email: <a href="mailto:consult.nfa@gmail.com" className="text-purple-600 hover:underline">consult.nfa@gmail.com</a>
          </p>
          <p className="mt-3">Подробнее — в нашей <Link to="/privacy" className="text-purple-600 hover:underline">Политике конфиденциальности</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">Применимое законодательство</h2>
          <p>Деятельность компании регулируется законодательством Российской Федерации. В отношении клиентов из ЕС применяются соответствующие нормы европейского права в части защиты прав потребителей финансовых услуг.</p>
        </section>

        <div className="border-t pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nexus Financial Advisory. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
}