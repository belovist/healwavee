import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { EmergencyButton } from './EmergencyButton';

// Import all screen components
import { DashboardHome } from './screens/DashboardHome';
import { HeartRateMonitor } from './screens/HeartRateMonitor';
import { AnxietyPredictions } from './screens/AnxietyPredictions';
import { DailyInsights } from './screens/DailyInsights';
import { SelfCareTools } from './screens/SelfCareTools';
import { GuidedBreathing } from './screens/GuidedBreathing';
import { GroundingExercises } from './screens/GroundingExercises';
import { EmergencyMode } from './screens/EmergencyMode';
import { SleepTracking } from './screens/SleepTracking';
import { CommunitySupport } from './screens/CommunitySupport';
import { Settings } from './screens/Settings';

interface DashboardProps {
  onBack: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  // Render the appropriate screen based on activeTab
  const renderScreen = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <DashboardHome isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Heart-Rate Monitor':
        return <HeartRateMonitor isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Anxiety Predictions (AI)':
        return <AnxietyPredictions isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Daily Insights':
        return <DailyInsights isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Self-Care Tools':
        return <SelfCareTools isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Guided Breathing':
        return <GuidedBreathing isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Grounding Exercises':
        return <GroundingExercises isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Emergency Mode':
        return <EmergencyMode isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Sleep Tracking':
        return <SleepTracking isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Community Support':
        return <CommunitySupport isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
      case 'Settings':
        return <Settings isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} />;
      default:
        return <DashboardHome isDarkMode={isDarkMode} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className={`min-h-screen overflow-hidden transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950' 
          : 'bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50'
      }`}>
        {/* Top Navigation */}
        <TopBar 
          onBack={onBack} 
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />
        
        <div className="flex h-[calc(100vh-4rem)]">
          {/* Left Sidebar */}
          <Sidebar 
            isDarkMode={isDarkMode} 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto px-8 py-6">
            <div className="max-w-6xl mx-auto">
              {renderScreen()}
            </div>
          </main>
        </div>
        
        {/* Emergency/SOS Button */}
        <EmergencyButton />
      </div>
    </div>
  );
}