import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import HeroSection from './components/HeroSection';
import SystemStatsCard from './components/SystemStatsCard';
import LatestCommitsCard from './components/LatestCommitsCard';
import CodeSnippetCard from './components/CodeSnippetCard';
import FeaturedProjectsCarousel from './components/FeaturedProjectsCarousel';
import TechStackSection from './components/TechStackSection';
import QuickAccessSection from './components/QuickAccessSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="main-content flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Breadcrumbs />
        </div>

        <HeroSection />

        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              <FeaturedProjectsCarousel />
              <LatestCommitsCard />
            </div>
          </div>
        </section>

        <QuickAccessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Homepage;