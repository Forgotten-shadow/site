import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';

export function ContactPage() {
  return (
    <div className="pt-20">
      <SEO 
        title="Контакты — Nexus Financial Advisory"
        description="Свяжитесь с Nexus Financial Advisory. Телефон: +7 (931) 972-97-12, Email: consult.nfa@gmail.com. Адрес: г. Кудрово, Ленинградская ул., д. 3"
        keywords="контакты, связаться, консультация, финансовый консультант, телефон, email"
      />
      <Contact />
    </div>
  );
}