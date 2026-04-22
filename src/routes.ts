import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { LegalPage } from './pages/LegalPage';


export const router = createBrowserRouter([
  // Специальные роуты для SEO (без Root layout)

  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'services', Component: ServicesPage },
      { path: 'services/:id', Component: ServiceDetailPage },
      { path: 'about', Component: AboutPage },
      { path: 'contact', Component: ContactPage },
      { path: 'privacy', Component: PrivacyPage },
      { path: 'terms', Component: TermsPage },
      { path: 'legal', Component: LegalPage },
      { path: '*', Component: NotFound },
    ],
  },
]);
