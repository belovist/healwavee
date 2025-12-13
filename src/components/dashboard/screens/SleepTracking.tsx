import { Moon, TrendingUp, Clock, Zap, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SleepTrackingProps {
  isDarkMode?: boolean;
}

export function SleepTracking({ isDarkMode = true }: SleepTrackingProps) {
  const sleepPhases = [
    { time: '11:00 PM', phase: 1, label: 'Awake' },
    { time: '11:30 PM', phase: 2, label: 'Light' },
    { time: '12:00 AM', phase: 3, label: 'Deep' },
    { time: '12:30 AM', phase: 3, label: 'Deep' },
    { time: '1:00 AM', phase: 3, label: 'Deep' },
    { time: '1:30 AM', phase: 2, label: 'Light' },
    { time: '2:00 AM', phase: 4, label: 'REM' },
    { time: '2:30 AM', phase: 2, label: 'Light' },
    { time: '3:00 AM', phase: 3, label: 'Deep' },
    { time: '3:30 AM', phase: 3, label: 'Deep' },
    { time: '4:00 AM', phase: 2, label: 'Light' },
    { time: '4:30 AM', phase: 4, label: 'REM' },
    { time: '5:00 AM', phase: 2, label: 'Light' },
    { time: '5:30 AM', phase: 1, label: 'Awake' },
    { time: '5:45 AM', phase: 0, label: 'Awake' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Sleep Tracking
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Understand how sleep affects your mental health
        </p>
      </div>

      {/* Sleep Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Sleep Duration</p>
              <p className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>6h 45m</p>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>Last night</p>
        </div>

        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Sleep Quality</p>
              <p className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>72%</p>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>Good quality</p>
        </div>

        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Bedtime</p>
              <p className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>11:05 PM</p>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>Consistent this week</p>
        </div>
      </div>

      {/* Sleep Phases Timeline */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Sleep Phases - Last Night
        </h2>

        <div className="h-64" style={{ height: '300px', minHeight: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sleepPhases}>
              <defs>
                <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#334155' : '#e5e7eb'} opacity={0.3} />
              <XAxis 
                dataKey="time" 
                stroke={isDarkMode ? '#64748b' : '#9ca3af'}
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke={isDarkMode ? '#64748b' : '#9ca3af'}
                style={{ fontSize: '12px' }}
                domain={[0, 4]}
                ticks={[0, 1, 2, 3, 4]}
                tickFormatter={(value) => {
                  const labels = ['Awake', 'Awake', 'Light', 'Deep', 'REM'];
                  return labels[value] || '';
                }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDarkMode ? '#334155' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  color: isDarkMode ? '#e2e8f0' : '#1f2937'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="phase" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                fill="url(#sleepGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Awake</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Light Sleep</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Deep Sleep</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>REM Sleep</span>
          </div>
        </div>

        {/* Sleep Breakdown */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Deep Sleep</p>
            <p className={`text-2xl ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>2h 15m</p>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>33% of total</p>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>REM Sleep</p>
            <p className={`text-2xl ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>1h 30m</p>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>22% of total</p>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Light Sleep</p>
            <p className={`text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>3h 00m</p>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>45% of total</p>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-amber-500/10 border-amber-500/30' 
          : 'bg-amber-50 border-amber-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-amber-500/20' : 'bg-amber-200'
          }`}>
            <AlertTriangle className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`} />
          </div>
          <div>
            <h3 className={`text-lg mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
              Sleep & Anxiety Connection
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Short sleep duration (under 7 hours) <strong>increases next-day anxiety likelihood by 40%</strong>. 
              Your current average is 6h 45m. Try going to bed 30 minutes earlier to hit the recommended 7-9 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Trends */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Weekly Trends
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Avg Duration</p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>6h 52m</p>
            <div className="flex items-center justify-center gap-1 text-red-500 text-sm">
              <TrendingUp className="w-4 h-4 rotate-180" />
              <span>-12m</span>
            </div>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Avg Quality</p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>74%</p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+8%</span>
            </div>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Deep Sleep</p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>32%</p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+5%</span>
            </div>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Consistency</p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>85%</p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+12%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}