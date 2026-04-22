import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import Image from "../assets/IMG_2382.JPG";
import { About } from '../components/About';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="Nexus Financial Advisory — Финансовое и маркетинговое консультирование"
        description="Профессиональные финансовые и маркетинговые консультации для бизнеса. Стратегическое планирование, оптимизация, оценка и анализ компаний."
        keywords="финансовое консультирование, маркетинговая оценка, финансовая оценка, стратегическое планирование, бизнес консалтинг, финансовый анализ"
      />
      <Hero />
      <About />
      <Services />
      <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center justify-center px-4">
        <div className="w-full md:w-1/2 h-64 md:h-96 flex items-center justify-center p-6">
          <img
            src={Image}
            alt="Деловая встреча"
            className="w-full h-full object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
            style={{ filter: "saturate(1.15)" }}
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center py-12 px-8">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl text-gray-900 mb-4">Давайте познакомимся</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              На первой встрече мы познакомимся, вы расскажете о своём запросе, а мы обозначим возможные форматы работы. Разумеется, встреча проводится бесплатно.
            </p>
            <a
              href="/contact"
              className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
      <Stats />
      <Contact />
    </>
  );
}
