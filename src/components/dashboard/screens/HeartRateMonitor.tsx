import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Heart, TrendingUp, Activity, Lightbulb } from 'lucide-react';

interface HeartRateMonitorProps {
  isDarkMode?: boolean;
}

export function HeartRateMonitor({ isDarkMode = true }: HeartRateMonitorProps) {
  const heartRateData = [
    { time: '6:00', bpm: 62 },
    { time: '7:00', bpm: 65 },
    { time: '8:00', bpm: 68 },
    { time: '9:00', bpm: 72 },
    { time: '10:00', bpm: 75 },
    { time: '11:00', bpm: 70 },
    { time: '12:00', bpm: 73 },
    { time: '13:00', bpm: 78 },
    { time: '14:00', bpm: 88, spike: true }, // Spike at 2:10 PM
    { time: '14:10', bpm: 95, spike: true },
    { time: '15:00', bpm: 82 },
    { time: '16:00', bpm: 74 },
    { time: '17:00', bpm: 71 },
    { time: '18:00', bpm: 69 },
    { time: '19:00', bpm: 72 },
    { time: '20:00', bpm: 75 },
    { time: '21:00', bpm: 85 },
    { time: '21:40', bpm: 92, spike: true }, // Spike at 9:40 PM
    { time: '22:00', bpm: 80 },
    { time: '23:00', bpm: 70 },
    { time: '00:00', bpm: 66 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Heart-Rate Monitor
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Real-time tracking from your wearable device
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Current HR */}
        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/30">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Current HR</p>
              <p className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>78</p>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>bpm</p>
        </div>

        {/* Average Today */}
        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Average Today</p>
              <p className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>72</p>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>bpm</p>
        </div>

        {/* Resting HR */}
        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Resting HR</p>
              <p className={`text-3xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>64</p>
            </div>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>bpm</p>
        </div>
      </div>

      {/* Main Chart */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="mb-6">
          <h2 className={`text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Today's Heart Rate
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            6:00 AM – 12:00 AM
          </p>
        </div>

        <div className="h-96" style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%" minHeight={400}>
            <LineChart data={heartRateData}>
              <defs>
                <linearGradient id="hrGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
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
                domain={[50, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: isDarkMode ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDarkMode ? '#334155' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  color: isDarkMode ? '#e2e8f0' : '#1f2937'
                }}
              />
              <ReferenceLine y={80} stroke="#f59e0b" strokeDasharray="3 3" />
              <Line 
                type="monotone" 
                dataKey="bpm" 
                stroke="#ec4899" 
                strokeWidth={3}
                fill="url(#hrGradient)"
                dot={(props: any) => {
                  const { cx, cy, payload } = props;
                  if (payload.spike) {
                    return (
                      <circle 
                        cx={cx} 
                        cy={cy} 
                        r={6} 
                        fill="#f59e0b" 
                        stroke="#fff" 
                        strokeWidth={2}
                      />
                    );
                  }
                  return null;
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Spike Annotations */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            isDarkMode 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
              : 'bg-amber-50 border-amber-200 text-amber-700'
          }`}>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-sm">Spike at 2:10 PM (95 bpm)</span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            isDarkMode 
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' 
              : 'bg-amber-50 border-amber-200 text-amber-700'
          }`}>
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
            <span className="text-sm">Spike at 9:40 PM (92 bpm)</span>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-indigo-500/10 border-indigo-500/30' 
          : 'bg-indigo-50 border-indigo-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'
          }`}>
            <Lightbulb className={`w-5 h-5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`} />
          </div>
          <div>
            <h3 className={`mb-2 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
              Pattern Detected
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Your heart rate increases consistently in the afternoon, especially between 2–3 PM. This pattern has been observed for 5 consecutive days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}