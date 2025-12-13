import { ChatPanel } from '../ChatPanel';
import { LiveStats } from '../LiveStats';
import { GraphPanel } from '../GraphPanel';
import { InsightsCards } from '../InsightsCards';

interface DashboardHomeProps {
  isDarkMode?: boolean;
  onNavigate?: (tab: string) => void;
}

export function DashboardHome({ isDarkMode = true, onNavigate }: DashboardHomeProps) {
  return (
    <div className="space-y-6">
      {/* Chat Panel */}
      <ChatPanel isDarkMode={isDarkMode} onNavigate={onNavigate} />
      
      {/* Live Stats */}
      <LiveStats isDarkMode={isDarkMode} />
      
      {/* Graph Panel */}
      <GraphPanel isDarkMode={isDarkMode} />
      
      {/* Insights Cards */}
      <InsightsCards isDarkMode={isDarkMode} />
      
      {/* Footer */}
      <div className={`text-center py-6 text-sm transition-colors ${
        isDarkMode ? 'text-slate-500' : 'text-gray-500'
      }`}>
        <p>This tool offers support, not medical advice.</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="#" className={`transition-colors ${
            isDarkMode ? 'hover:text-slate-400' : 'hover:text-gray-700'
          }`}>Privacy</a>
          <span>•</span>
          <a href="#" className={`transition-colors ${
            isDarkMode ? 'hover:text-slate-400' : 'hover:text-gray-700'
          }`}>Security</a>
          <span>•</span>
          <a href="#" className={`transition-colors ${
            isDarkMode ? 'hover:text-slate-400' : 'hover:text-gray-700'
          }`}>Terms</a>
        </div>
      </div>
    </div>
  );
}