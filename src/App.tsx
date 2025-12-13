import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { HowItWorks } from './components/HowItWorks';
import { FeatureCallout } from './components/FeatureCallout';
import { DetailedFeatures } from './components/DetailedFeatures';
import { AppGallery } from './components/AppGallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Dashboard } from './components/dashboard/Dashboard';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (showDashboard) {
    return <Dashboard onBack={() => setShowDashboard(false)} />;
  }

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Navbar 
          onOpenDashboard={() => setShowDashboard(true)} 
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />
        <Hero onOpenDashboard={() => setShowDashboard(true)} />
        <TrustBadges />
        <HowItWorks />
        <FeatureCallout />
        <DetailedFeatures />
        <AppGallery />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenDashboard={() => setShowDashboard(true)} />
        <Footer />
      </div>
    </div>
  );
}
