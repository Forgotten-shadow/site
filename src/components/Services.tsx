import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Target, Users, BarChart3, Workflow, ShieldCheck } from "lucide-react";
import { servicesData } from "../data/services";

const iconMap: Record<string, any> = {
  "marketing-diagnostic": Search,
  "brand-strategy": Target,
  "marketing-partnership": Users,
  "finance-diagnostic": BarChart3,
  "finance-planning": Workflow,
  "finance-partnership": ShieldCheck,
};

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

const marketingServices = servicesData.filter((s) => s.category === "marketing");
const financeServices = servicesData.filter((s) => s.category === "finance");

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
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />
      <div className="p-7 flex flex-col flex-1">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-gray-900 mb-2 leading-snug text-xl">{service.title}</h3>
        <p className="text-gray-500 leading-relaxed mb-5 flex-1 text-lg">{service.shortDesc}</p>
        <Link
          to={`/services/${service.id}`}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${gradient} text-white font-medium shadow hover:shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 w-fit text-base`}
        >
          Подробнее
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-xl font-semibold tracking-widest uppercase mb-6"
          >
            Наши услуги
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-900 mb-4 text-5xl md:text-6xl"
          >
            Маркетинг и финансы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-gray-500 max-w-2xl mx-auto text-2xl"
          >
            Стратегическое партнёрство для владельцев бизнеса — от оценки до долгосрочного сопровождения.
          </motion.p>
        </div>

        {/* МАРКЕТИНГ block */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md">
              Маркетинг
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketingServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} gradients={marketingGradients} />
            ))}
          </div>
        </div>

        {/* ФИНАНСЫ block */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-base font-semibold tracking-widest uppercase bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
              Финансы
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-transparent" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {financeServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} gradients={financeGradients} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            Все услуги
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}