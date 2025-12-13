import { 
  LayoutDashboard, 
  Activity, 
  Brain, 
  Lightbulb, 
  Heart, 
  Wind, 
  Anchor, 
  AlertCircle, 
  Moon, 
  Users, 
  Settings,
  Phone
} from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Sidebar({ isDarkMode, activeTab, onTabChange }: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Activity, label: 'Heart-Rate Monitor' },
    { icon: Brain, label: 'Anxiety Predictions (AI)' },
    { icon: Lightbulb, label: 'Daily Insights' },
    { icon: Heart, label: 'Self-Care Tools' },
    { icon: Wind, label: 'Guided Breathing' },
    { icon: Anchor, label: 'Grounding Exercises' },
    { icon: AlertCircle, label: 'Emergency Mode' },
    { icon: Moon, label: 'Sleep Tracking' },
    { icon: Users, label: 'Community Support' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`w-72 backdrop-blur-xl border-r overflow-y-auto transition-colors ${
      isDarkMode 
        ? 'bg-slate-900/30 border-slate-800/50' 
        : 'bg-white/50 border-gray-200'
    }`}>
      <div className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onTabChange(item.label)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              activeTab === item.label
                ? isDarkMode
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10'
                  : 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border border-indigo-300 shadow-md'
                : isDarkMode
                ? 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-300'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className={`p-4 space-y-3 border-t mt-4 ${
        isDarkMode ? 'border-slate-800/50' : 'border-gray-200'
      }`}>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/30">
          <Phone className="w-5 h-5" />
          <span className="text-sm">SOS Helpline</span>
        </button>
      </div>
    </aside>
  );
}