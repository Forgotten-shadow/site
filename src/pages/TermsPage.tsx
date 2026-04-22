import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Условия использования — Nexus Financial Advisory"
        description="Условия использования веб-сайта и услуг Nexus Financial Advisory. Правила использования сайта, ограничение ответственности, интеллектуальная собственность."
        keywords="условия использования, правила сайта, ограничение ответственности, интеллектуальная собственность"
      />
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            На главную
          </Link>
          <h1 className="text-4xl lg:text-5xl text-white mb-4">Условия использования</h1>
          <p className="text-white/80 text-lg">Последнее обновление: 27 февраля 2026 г.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">1. Принятие условий</h2>
          <p>Используя веб-сайт и услуги <strong>Nexus Financial Advisory</strong>, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с какими-либо положениями, пожалуйста, прекратите использование сайта.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">2. Описание услуг</h2>
          <p>Nexus Financial Advisory предоставляет финансовые консультационные услуги, включая управление инвестициями, налоговое планирование, страхование и маркетинговые стратегии. Информация на сайте носит ознакомительный характер и не является индивидуальной инвестиционной рекомендацией.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">3. Ограничение ответственности</h2>
          <p>Материалы на сайте предоставляются «как есть». Компания не несёт ответственности за финансовые решения, принятые на основании информации, размещённой на сайте. Инвестиции сопряжены с риском, включая возможную потерю вложенных средств.</p>
          <p className="mt-3">В максимальной степени, допустимой применимым законодательством, компания не несёт ответственности за косвенные, случайные или последующие убытки.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">4. Интеллектуальная собственность</h2>
          <p>Все материалы сайта (тексты, логотипы, графика, код) защищены авторским правом и принадлежат Nexus Financial Advisory или её лицензиарам. Воспроизведение, распространение или модификация без письменного разрешения запрещены.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">5. Допустимое использование</h2>
          <p>Вы обязуетесь не использовать сайт в следующих целях:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Незаконная деятельность или нарушение прав третьих лиц.</li>
            <li>Распространение вредоносного программного обеспечения.</li>
            <li>Несанкционированный доступ к системам компании.</li>
            <li>Сбор персональных данных других пользователей.</li>
            <li>Любые действия, наносящие ущерб репутации компании.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">6. Ссылки на сторонние ресурсы</h2>
          <p>Сайт может содержать ссылки на сторонние веб-сайты. Мы не несём ответственности за их содержание, политики конфиденциальности или практики.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">7. Расторжение доступа</h2>
          <p>Мы оставляем за собой право ограничить или прекратить ваш доступ к сайту в случае нарушения настоящих условий, уведомив вас в разумные сроки, если это не противоречит закону.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">8. Применимое право и разрешение споров</h2>
          <p>Настоящие условия регулируются законодательством Российской Федерации. Стороны будут стремиться урегулировать споры в досудебном порядке. При недостижении соглашения споры передаются в компетентный суд по месту нахождения компании.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">9. Изменения условий</h2>
          <p>Мы вправе изменять настоящие условия в любое время. Актуальная версия публикуется на этой странице. Продолжение использования сайта после публикации изменений означает ваше согласие с ними.</p>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">10. Контакты</h2>
          <p>По вопросам настоящих условий: <a href="mailto:consult.nfa@gmail.com" className="text-purple-600 hover:underline">consult.nfa@gmail.com</a></p>
        </section>

        <div className="border-t pt-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Nexus Financial Advisory. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
}