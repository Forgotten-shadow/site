import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Search, Target, Users, BarChart3, Workflow, ShieldCheck } from "lucide-react";
import { servicesData } from "../data/services";
import { SEO } from "../components/SEO";

const iconMap: Record<string, any> = {
  "marketing-diagnostic": Search,
  "brand-strategy": Target,
  "marketing-partnership": Users,
  "finance-diagnostic": BarChart3,
  "finance-planning": Workflow,
  "finance-partnership": ShieldCheck,
};

const marketingServices = servicesData.filter((s) => s.category === "marketing");
const financeServices = servicesData.filter((s) => s.category === "finance");

const marketingGradients = [
  "from-blue-500 via-blue-600 to-cyan-500",
  "from-purple-500 via-purple-600 to-blue-500",
  "from-indigo-500 via-indigo-600 to-purple-500",
];
const financeGradients = [
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-blue-600 via-blue-700 to-indigo-600",
  "from-indigo-600 via-violet-600 to-blue-700",
];

function ServiceCard({
  service,
  index,
  gradients,
}: {
  service: (typeof servicesData)[0];
  index: number;
  gradients: string[];
}) {
  const Icon = iconMap[service.id] || BarChart3;
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-400 overflow-hidden flex flex-col"
    >
      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

      <div className="p-8 flex flex-col flex-1">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-gray-900 mb-4 leading-snug text-2xl">{service.title}</h3>

        {/* Short desc */}
        <p className="text-gray-500 leading-relaxed mb-8 flex-1 text-lg">{service.shortDesc}</p>

        {/* Button */}
        <Link
          to={`/services/${service.id}`}
          className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r ${gradient} text-white text-lg font-medium shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 w-fit`}
        >
          Подробнее
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}

function BlockHeader({
  label,
  title,
  subtitle,
  accent,
}: {
  label: string;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div className="mb-12">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-6 py-2 rounded-full text-base font-semibold tracking-widest uppercase bg-gradient-to-r ${accent} text-white shadow-md mb-6`}
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-900 mb-3 hidden"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="text-gray-500 max-w-2xl text-xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

export function ServicesPage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <SEO 
        title="Услуги — Nexus Financial Advisory"
        description="Маркетинговые и финансовые услуги для бизнеса: оценка, стратегическое планирование, долгосрочное партнёрство. Профессиональное консультирование для роста компании."
        keywords="маркетинговая оценка, финансовая оценка, стратегия бренда, финансовое планирование, партнёрство с бизнесом"
      />
      {/* Page Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-200 text-base font-medium tracking-widest uppercase mb-10"
          >
            Наши услуги
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-8 text-5xl sm:text-6xl lg:text-7xl"
          >
            Маркетинг и финансы
            <br />
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              для роста бизнеса
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-xl sm:text-2xl max-w-3xl mx-auto"
          >
            Стратегическое партнёрство для владельцев бизнеса — от оценки до долгосрочного сопровождения.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* BLOCK 1: МАРКЕТИНГ */}
        <section>
          <BlockHeader
            label="Маркетинг"
            title="Маркетинговые услуги"
            subtitle="Оценка, стратегия и долгосрочное партнёрство для системного роста бренда и продаж."
            accent="from-blue-500 to-cyan-500"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} gradients={marketingGradients} />
            ))}
          </div>
        </section>

        {/* BLOCK 2: ФИНАНСЫ */}
        <section>
          <BlockHeader
            label="Финансы"
            title="Финансовые услуги"
            subtitle="Финансовая оценка, планирование и стратегическое партнёрство для устойчивого масштабирования."
            accent="from-indigo-600 to-purple-600"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} gradients={financeGradients} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}