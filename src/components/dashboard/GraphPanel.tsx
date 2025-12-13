import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface GraphPanelProps {
  isDarkMode?: boolean;
}

export function GraphPanel({ isDarkMode = true }: GraphPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const heartRateData = [
    { time: '8:00', bpm: 68, anxiety: 15 },
    { time: '9:00', bpm: 72, anxiety: 20 },
    { time: '10:00', bpm: 75, anxiety: 25 },
    { time: '11:00', bpm: 70, anxiety: 18 },
    { time: '12:00', bpm: 73, anxiety: 22 },
    { time: '13:00', bpm: 78, anxiety: 30 },
    { time: '14:00', bpm: 95, anxiety: 65 }, // Spike
    { time: '15:00', bpm: 82, anxiety: 40 },
    { time: '16:00', bpm: 74, anxiety: 25 },
    { time: '17:00', bpm: 71, anxiety: 20 },
  ];

  return (
    <div className={`backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-colors ${
      isDarkMode 
        ? 'bg-slate-900/40 border-slate-800/50' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Header */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between p-6 transition-colors ${
          isDarkMode ? 'hover:bg-slate-800/30' : 'hover:bg-gray-50'
        }`}
      >
        <div>
          <h2 className={`text-xl mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Real-Time Monitoring</h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Heart rate and anxiety patterns throughout the day</p>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${
          isDarkMode ? 'text-slate-400' : 'text-gray-500'
        } ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Graphs */}
      {isExpanded && (
        <div className="p-6 pt-0 space-y-8">
          {/* Heart Rate Graph */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Heart Rate (BPM)</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>
                <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Live Data</span>
              </div>
            </div>
            <div className={`rounded-2xl p-4 ${
              isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
            }`} style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={heartRateData}>
                  <defs>
                    <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis 
                    dataKey="time" 
                    stroke="#64748b" 
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    style={{ fontSize: '12px' }}
                    domain={[60, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      color: '#e2e8f0'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="bpm" 
                    stroke="#22d3ee" 
                    strokeWidth={3}
                    fill="url(#heartRateGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Anxiety Index Graph */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>Anxiety Index</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>
                <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>AI Prediction</span>
              </div>
            </div>
            <div className={`rounded-2xl p-4 ${
              isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
            }`} style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={heartRateData}>
                  <defs>
                    <linearGradient id="anxietyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084fc" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#c084fc" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                  <XAxis 
                    dataKey="time" 
                    stroke="#64748b" 
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#64748b" 
                    style={{ fontSize: '12px' }}
                    domain={[0, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #334155',
                      borderRadius: '8px',
                      color: '#e2e8f0'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="anxiety" 
                    stroke="#c084fc" 
                    strokeWidth={3}
                    fill="url(#anxietyGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Spike Notes */}
          <div className={`border rounded-xl p-4 ${
            isDarkMode 
              ? 'bg-amber-500/10 border-amber-500/30' 
              : 'bg-amber-50 border-amber-200'
          }`}>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lg">⚠️</span>
              </div>
              <div className="flex-1">
                <h4 className={`text-sm mb-1 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>Spike Detected at 2:00 PM</h4>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>AI Analysis: Skipped lunch pattern detected. Heart rate increased from 73 to 95 bpm. Similar pattern observed on 3 other occasions when meals were delayed.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
