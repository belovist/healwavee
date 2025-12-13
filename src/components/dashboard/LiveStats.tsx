import { Activity, TrendingUp, AlertTriangle, Target } from 'lucide-react';

interface LiveStatsProps {
  isDarkMode?: boolean;
}

export function LiveStats({ isDarkMode = true }: LiveStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Current Heart Rate */}
      <div className={`backdrop-blur-xl rounded-2xl border p-5 shadow-xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Current Heart Rate</span>
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Activity className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
        <div className="flex items-end gap-2">
          <span className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>72</span>
          <span className={`text-lg mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>bpm</span>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400">Normal</span>
        </div>
      </div>

      {/* Stress Spike Indicator */}
      <div className={`backdrop-blur-xl rounded-2xl border p-5 shadow-xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Stress Spike</span>
          <div className="p-2 bg-amber-500/20 rounded-lg">
            <TrendingUp className="w-4 h-4 text-amber-400" />
          </div>
        </div>
        <div className="flex items-end gap-2">
          <span className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2</span>
          <span className={`text-lg mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>today</span>
        </div>
        <div className="mt-2">
          <span className="text-xs text-amber-400">Last at 2:15 PM</span>
        </div>
      </div>

      {/* Anxiety Prediction */}
      <div className={`backdrop-blur-xl rounded-2xl border p-5 shadow-xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Anxiety Prediction</span>
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-purple-400" />
          </div>
        </div>
        <div className="flex items-end gap-2">
          <span className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>28</span>
          <span className={`text-lg mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>%</span>
        </div>
        <div className="mt-2">
          <span className="text-xs text-green-400">Low risk today</span>
        </div>
      </div>

      {/* Last Detected Trigger */}
      <div className={`backdrop-blur-xl rounded-2xl border p-5 shadow-xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Last Trigger</span>
          <div className="p-2 bg-pink-500/20 rounded-lg">
            <Target className="w-4 h-4 text-pink-400" />
          </div>
        </div>
        <div className="flex items-end gap-2">
          <span className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skipped meal</span>
        </div>
        <div className="mt-2">
          <span className="text-xs text-pink-400">Detected at 2:15 PM</span>
        </div>
      </div>
    </div>
  );
}
