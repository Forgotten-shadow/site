import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css'; // Твой файл со стилями Tailwind

// Импорт Layout и страниц (проверь пути до папок, если они отличаются)
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFound } from './pages/NotFound';
import { robotsLoader } from './pages/RobotsTxtPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />, // Сработает, если страница не найдена
    children: [
      { 
        index: true, 
        element: <Home /> 
      },
      { 
        path: 'about', 
        element: <AboutPage /> 
      },
      { 
        path: 'services', 
        element: <ServicesPage /> 
      },
      { 
        path: 'services/:id', // Динамический роут для конкретной услуги
        element: <ServiceDetailPage /> 
      },
      { 
        path: 'contact', 
        element: <ContactPage /> 
      },
      { 
        path: 'legal', 
        element: <LegalPage /> 
      },
      { 
        path: 'privacy', 
        element: <PrivacyPage /> 
      },
    ],
  },
  {
    // Отдельный роут для генерации robots.txt без HTML-обертки
    path: '/robots.txt',
    loader: robotsLoader,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);