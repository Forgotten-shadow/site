import { motion } from "motion/react";
import { ImageWithFallback } from "../components/IMG_errors/ImageWithFallback";
import  Image  from '../assets/IMG_3828.JPG';
import { Stats } from '../components/Stats';
import { Target, Users, Layout, ShieldCheck, Zap } from "lucide-react";
import { SEO } from "../components/SEO";


export function AboutPage() {
  return (
    <div className="pt-20 bg-white">
      <SEO 
        title="О компании — Nexus Financial Advisory"
        description="Nexus Financial Advisory — команда профессионалов в области финансового и маркетингового консультирования. Создаём ясность в мире финансов и бизнеса."
        keywords="о компании, финансовое консультирование, маркетинговое агентство, команда консультантов, бизнес партнёры"
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0f172a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-blue-600 via-purple-600 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-300 text-base font-medium mb-6 border border-blue-500/20">
              О компании Nexus Financial Advisory
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Мы создаем ясность <br />
              <span className="text-blue-400">в мире финансов и бизнеса</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-gray-600"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Команда профессионалов</h2>
              <p className="mb-6">
                Мы команда молодых профессионалов с опытом в финансах, маркетинге и управлении проектами. Нас объединяет практическая работа с бизнесом разного масштаба и понимание того, как решения в одной области отражаются на всей системе.
              </p>
              <p className="mb-6">
                Мы подключаемся к компаниям на этапе роста, трансформации или пересборки стратегии. В основе нашей работы индивидуальный подход и нимательное отношение к деталям.
              </p>
              <p>
                Мы глубоко погружаемся в задачи клиента, изучаем цифры и процессы, задаём уточняющие вопросы и формируем решения, которые соответствуют реальным возможностям бизнеса. Для нас важно не просто предложить стратегию, а понять, как она будет реализована на практике.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Индивидуально</h3>
                <p className="text-base text-gray-600">Решения под конкретные возможности вашего бизнеса.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl">
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Практично</h3>
                <p className="text-base text-gray-600">Важна не только стратегия, но и её реализация.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src= {Image}
                alt="Professional team"
                className="w-full h-auto"
              />
            </motion.div>
            
            <div className="bg-gray-900 text-white p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Наш результат</h3>
              <p className="text-gray-400 mb-6 text-lg">
                Мы работаем так, чтобы у собственника появлялась ясность в цифрах и логике движения компании. Когда эта связность появляется, снижается доля интуитивных решений и бизнес начинает развиваться предсказуемо.
              </p>
              <div className="flex items-center gap-4">
                <Users className="w-10 h-10 text-blue-400" />
                <div>
                  <div className="text-xl font-bold">60+ проектов</div>
                  <div className="text-base text-gray-500">Успешно реализовано</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Готовы вывести бизнес на новый уровень?</h2>
          <a href="/contact" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  );
}