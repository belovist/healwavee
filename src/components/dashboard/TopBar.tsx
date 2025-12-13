import { Bell, ChevronDown, ArrowLeft, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/15afd7401eca5cff1d86e0a226d9ff25fdc5283b.png';

interface TopBarProps {
  onBack: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function TopBar({ onBack, isDarkMode, onToggleTheme }: TopBarProps) {
  const [moodLevel] = useState(65); // 0-100 mood score

  return (
    <div className={`h-16 backdrop-blur-xl border-b px-6 flex items-center justify-between sticky top-0 z-40 transition-colors ${
      isDarkMode 
        ? 'bg-slate-900/50 border-slate-800/50' 
        : 'bg-white/50 border-gray-200'
    }`}>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onBack}
          className={`p-2 rounded-xl transition-colors mr-2 ${
            isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-gray-100'
          }`}
          title="Back to landing page"
        >
          <ArrowLeft className={`w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`} />
        </button>
        <img 
          src={logo} 
          alt="HealWave Logo" 
          className="h-10 w-auto"
        />
        <span className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>HealWave</span>
      </div>

      {/* Right Side Elements */}
      <div className="flex items-center gap-6">
        {/* Mood Meter */}
        <div className={`flex items-center gap-3 rounded-full px-4 py-2 border ${
          isDarkMode 
            ? 'bg-slate-800/50 border-slate-700/50' 
            : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Mood</span>
          <div className={`w-32 h-2 rounded-full overflow-hidden ${
            isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transition-all shadow-lg shadow-cyan-500/50"
              style={{ width: `${moodLevel}%` }}
            ></div>
          </div>
          <span className="text-sm text-cyan-400">{moodLevel}%</span>
        </div>

        {/* Theme Toggle */}
        <button 
          onClick={onToggleTheme}
          className={`p-2 rounded-xl transition-colors ${
            isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-gray-100'
          }`}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-slate-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Notifications */}
        <button className={`relative p-2 rounded-xl transition-colors ${
          isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-gray-100'
        }`}>
          <Bell className={`w-5 h-5 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`} />
          <span className={`absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full ring-2 ${
            isDarkMode ? 'ring-slate-900' : 'ring-white'
          }`}></span>
        </button>

        {/* User Avatar */}
        <button className={`flex items-center gap-3 rounded-full pl-1 pr-4 py-1 transition-colors ${
          isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-gray-100'
        }`}>
          <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm ${
            isDarkMode ? 'border-slate-700 bg-slate-700 text-slate-300' : 'border-gray-300 bg-gray-200 text-gray-600'
          }`}>
            VK
          </div>
          <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Vineet K.</span>
          <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`} />
        </button>
      </div>
    </div>
  );
}