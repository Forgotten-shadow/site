import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white flex items-center justify-center px-4">
      <SEO 
        title="404 — Страница не найдена | Nexus Financial Advisory"
        description="Запрашиваемая страница не найдена. Вернитесь на главную страницу Nexus Financial Advisory для доступа к финансовым и маркетинговым услугам."
        keywords="404, страница не найдена"
      />
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Страница не найдена
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
          >
            <Home className="w-5 h-5" />
            На главную
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Вернуться назад
          </button>
        </div>
      </div>
    </div>
  );
}