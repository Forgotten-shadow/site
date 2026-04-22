import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { StructuredData } from '../components/StructuredData';
import { ForceIndexable } from '../components/ForceIndexable';

export function Root() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <StructuredData />
      <ForceIndexable />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}