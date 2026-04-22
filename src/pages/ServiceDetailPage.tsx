import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  CheckCircle2,
  Search,
  Target,
  Users,
  BarChart3,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import { ImageWithFallback } from "../components/IMG_errors/ImageWithFallback";
import { SEO } from "../components/SEO";
import Image from "../assets/photo_2026-03-03_14-39-18.jpg";
import Image2 from "../assets/photo_2026-03-03-14-39-19.jpg";
import Image3 from "../assets/IMG_3828.JPG";
import Image4 from "../assets/IMG_3831.JPG";

export interface ServiceDetail {
  id: string;
  title: string;
  category: "МАРКЕТИНГ" | "ФИНАНСЫ";
  shortDesc: string;
  description: string;
  icon: any;
  gradient: string;
  accentBg: string;
  features: string[];
  image: string;
}

export const servicesDetailData: Record<string, ServiceDetail> = {
  "marketing-diagnostic": {
    id: "marketing-diagnostic",
    title: "Маркетинговая оценка бизнеса",
    category: "МАРКЕТИНГ",
    shortDesc: "Комплексный анализ маркетинга и точек роста компании.",
    description:
      "Глубокий стратегический аудит маркетинга, продаж и позиционирования компании. Анализируется рынок, конкуренты, целевая аудитория, продуктовая логика, воронка продаж и экономика привлечения. Выявляются несоответствия между стратегией, коммуникациями и фактическими результатами. Определяются точки потерь бюджета, ограничители роста и управленческие ошибки. Итогом становится структурированная картина текущего положения и перечень приоритетных изменений с логикой их внедрения.",
    icon: Search,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    accentBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    features: [
      "Анализ рынка и конкурентной среды",
      "Аудит воронки продаж и точек потерь",
      "Экономика привлечения клиентов",
      "Оценка продуктовой логики и позиционирования",
      "Перечень приоритетных изменений с логикой внедрения",
    ],
    image: Image,
  },
  "brand-strategy": {
    id: "brand-strategy",
    title: "Стратегия бренда и маркетинга",
    category: "МАРКЕТИНГ",
    shortDesc: "Построение системной маркетинговой модели, связанной со стратегией бизнеса.",
    description:
      "Формирование целостной маркетинговой системы, где позиционирование, продукт, коммуникации и продажи работают как единая структура. Определяется стратегическая роль бренда, формируется чёткое ценностное предложение и логика привлечения клиентов. Разрабатывается маркетинговый roadmap, KPI и принципы управления каналами. Настраивается связка маркетинга и финансовой модели. Работа ведётся в формате проектного сотрудничества до полной управляемости системы.",
    icon: Target,
    gradient: "from-purple-500 via-purple-600 to-blue-500",
    accentBg: "bg-gradient-to-br from-purple-500 to-blue-500",
    features: [
      "Позиционирование и стратегическая роль бренда",
      "Формирование ценностного предложения",
      "Маркетинговый roadmap и система KPI",
      "Управление каналами привлечения",
      "Связка маркетинга и финансовой модели",
    ],
    image:
      "https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcyMTAzOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  "marketing-partnership": {
    id: "marketing-partnership",
    title: "Долгосрочное стратегическое маркетинговое партнёрство",
    category: "МАРКЕТИНГ",
    shortDesc: "Долгосрочное управление маркетингом на уровне стратегии собственника.",
    description:
      "Формат внешнего директора по маркетингу с фокусом на рост и капитализацию бизнеса. Участие в формировании стратегических приоритетов, управлении каналами и ключевыми инициативами. Контроль эффективности маркетинга и корректировка курса при изменении рынка. Работа с командой клиента и подрядчиками на уровне целей и результатов. Регулярная оценка вклада маркетинга в прибыль и стоимость компании.",
    icon: Users,
    gradient: "from-indigo-500 via-indigo-600 to-purple-500",
    accentBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    features: [
      "Роль внешнего директора по маркетингу",
      "Участие в стратегических приоритетах бизнеса",
      "Контроль эффективности и корректировка курса",
      "Управление командой и подрядчиками",
      "Оценка вклада маркетинга в прибыль и капитализацию",
    ],
    image: Image2,
  },
  "finance-diagnostic": {
    id: "finance-diagnostic",
    title: "Финансовая оценка бизнеса",
    category: "ФИНАНСЫ",
    shortDesc: "Анализ финансовой логики и устойчивости компании.",
    description:
      "Комплексный разбор финансовой структуры бизнеса: доходы, маржинальность, затраты, денежные потоки и управленческие показатели. Выявляются скрытые потери прибыли, неэффективные решения и зоны финансового риска. Оценивается связь между стратегией компании и её финансовыми результатами. Определяется уровень устойчивости и запас прочности. Результатом становится чёткая картина финансового состояния и рекомендации по усилению управляемости.",
    icon: BarChart3,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
    features: [
      "Анализ доходов, маржинальности и структуры затрат",
      "Разбор денежных потоков",
      "Выявление скрытых потерь прибыли",
      "Оценка финансовой устойчивости и запаса прочности",
      "Рекомендации по усилению управляемости",
    ],
    image: Image3,
  "finance-planning": {
    id: "finance-planning",
    title: "Финансовое планирование и модель роста",
    category: "ФИНАНСЫ",
    shortDesc: "Построение управляемой финансовой системы для масштабирования бизнеса.",
    description:
      "Создание финансовой модели, отражающей реальную экономику компании и её точки роста. Определяются ключевые метрики, принципы планирования и контроля. Моделируются сценарии развития с учётом рисков и ограничений. Настраивается система управленческой отчётности, поддерживающая стратегические решения. Формируется финансовая структура, позволяющая расти без потери устойчивости и контроля.",
    icon: Workflow,
    gradient: "from-blue-600 via-blue-700 to-indigo-600",
    accentBg: "bg-gradient-to-br from-blue-600 to-indigo-600",
    features: [
      "Создание финансовой модели компании",
      "Определение ключевых метрик и принципов контроля",
      "Сценарное моделирование с учётом рисков",
      "Система управленческой отчётности",
      "Финансовая структура для масштабирования",
    ],
    image:
      "https://images.unsplash.com/photo-1768839720586-71b7ff8b5c59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGdyb3d0aCUyMG1vZGVsfGVufDF8fHx8MTc3MjE5ODUzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  "finance-partnership": {
    id: "finance-partnership",
    title: "Долгосрочное стратегическое финансовое партнёрство",
    category: "ФИНАНСЫ",
    shortDesc: "Конфиденциальное сопровождение собственника по финансовым решениям.",
    description:
      "Долгосрочная работа с владельцем бизнеса на уровне ключевых финансовых и стратегических решений. Оценка инвестиционных инициатив, рисков и последствий управленческих действий. Моделирование стоимости бизнеса и долгосрочной финансовой устойчивости. Независимая позиция при обсуждении сложных решений, влияющих на капитализацию компании. Фокус на качестве мышления собственника и системности финансовых ориентиров.",
    icon: ShieldCheck,
    gradient: "from-indigo-600 via-violet-600 to-blue-700",
    accentBg: "bg-gradient-to-br from-indigo-600 to-violet-700",
    features: [
      "Долгосрочное сопровождение на уровне собственника",
      "Оценка инвестиционных инициатив и рисков",
      "Моделирование стоимости бизнеса",
      "Независимая экспертная позиция",
      "Системность финансовых ориентиров и качество мышления",
    ],
    image: Image 4,
};

export function ServiceDetailPage() {
  const { id } = useParams();
  const service = id ? servicesDetailData[id] : null;

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl mb-4">Услуга не найдена</h1>
        <Link to="/services" className="text-blue-600 hover:underline">
          Вернуться к списку услуг
        </Link>
      </div>
    );
  }

  const Icon = service.icon;
  const isMarketing = service.category === "МАРКЕТИНГ";

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <SEO 
        title={`${service.title} — Nexus Financial Advisory`}
        description={service.description}
        keywords={`${service.title}, ${service.category.toLowerCase()}, ${service.shortDesc}`}
      />
      {/* Hero */}
      <section
        className={`relative py-24 overflow-hidden bg-gradient-to-br ${service.gradient}`}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к услугам
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-semibold tracking-widest uppercase mb-6">
                {service.category}
              </span>
              <h1 className="text-white mb-6 leading-tight">{service.title}</h1>
              <p className="text-white/85 max-w-xl leading-relaxed">{service.shortDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm shadow-2xl border border-white/30">
                <Icon className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: description + features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gray-900 mb-6">Подробное описание</h2>
              <p className="text-gray-600 leading-relaxed mb-10">{service.description}</p>

              <h3 className="text-gray-900 mb-6">Что входит в услугу:</h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full ${service.accentBg} flex items-center justify-center shrink-0 mt-0.5 shadow-md`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: image + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              {/* CTA Card */}
              <div
                className={`p-8 rounded-3xl bg-gradient-to-br ${service.gradient} text-white shadow-xl`}
              >
                <h3 className="mb-3">Нужна консультация?</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Обсудите вашу задачу с экспертом и получите предварительную оценку проекта.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-gray-900 py-4 rounded-xl font-semibold hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg"
                >
                  Записаться на встречу
                </Link>
              </div>

              {/* Back to category */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Все {isMarketing ? "маркетинговые" : "финансовые"} услуги
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
