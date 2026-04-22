import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./IMG_errors/ImageWithFallback";
import Image from "../assets/photo_2026-03-03_14-39-19 (2).jpg";
import { Link } from "react-router";

export function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Мы превращаем финансовые данные в <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">стратегическое преимущество</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы команда молодых профессионалов с опытом в финансах, маркетинге и управлении проектами. Нас объединяет практическая работа с бизнесом разного масштаба и понимание того, как решения в одной области отражаются на всей системе.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Мы подключаемся к компаниям на этапе роста, трансформации или пересборки стратегии, помогая собственникам обрести ясность и предсказуемость в развитии бизнеса.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Глубокое погружение в бизнес-процессы",
                "Индивидуальные финансовые модели",
                "Связь стратегии с практическими цифрами",
                "Снижение доли интуитивных решений"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Link 
              to="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              Узнать больше о нас
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src={Image}
                alt="Nexus Strategy Meeting"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}