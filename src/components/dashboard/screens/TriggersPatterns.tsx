import { Target, AlertCircle, TrendingUp, Clock } from 'lucide-react';

interface TriggersPatternsProps {
  isDarkMode?: boolean;
}

export function TriggersPatterns({ isDarkMode = true }: TriggersPatternsProps) {
  const triggers = [
    {
      name: 'Skipped Meals',
      impact: 'High',
      frequency: '8 times this week',
      color: 'red',
      percentage: 85,
      icon: '🍽️'
    },
    {
      name: 'Poor Sleep',
      impact: 'Medium',
      frequency: '5 times this week',
      color: 'amber',
      percentage: 60,
      icon: '😴'
    },
    {
      name: 'Prolonged Screen Time',
      impact: 'Medium',
      frequency: '6 times this week',
      color: 'amber',
      percentage: 55,
      icon: '📱'
    },
    {
      name: 'Caffeine After 2 PM',
      impact: 'Low',
      frequency: '3 times this week',
      color: 'green',
      percentage: 30,
      icon: '☕'
    },
  ];

  const patterns = [
    {
      title: 'Afternoon Spikes',
      description: 'Anxiety spikes occur most often between 1–3 PM',
      timeframe: 'Consistent for 12 days',
      confidence: 92
    },
    {
      title: 'Weekend Recovery',
      description: 'Heart rate and anxiety levels normalize on weekends',
      timeframe: 'Observed for 3 weeks',
      confidence: 88
    },
    {
      title: 'Morning Routine Impact',
      description: 'Days with breakfast show 35% lower anxiety',
      timeframe: 'Data from 21 days',
      confidence: 95
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Triggers & Patterns
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Understanding what affects your mental health
        </p>
      </div>

      {/* Detected Triggers */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Detected Triggers
        </h2>
        <div className="space-y-4">
          {triggers.map((trigger, index) => (
            <div key={index} className={`p-5 rounded-2xl border transition-all hover:scale-102 ${
              isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{trigger.icon}</div>
                  <div>
                    <h3 className={`mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {trigger.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      {trigger.frequency}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  trigger.color === 'red'
                    ? isDarkMode ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-red-100 text-red-700 border border-red-200'
                    : trigger.color === 'amber'
                    ? isDarkMode ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-amber-100 text-amber-700 border border-amber-200'
                    : isDarkMode ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-green-100 text-green-700 border border-green-200'
                }`}>
                  {trigger.impact} Impact
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
                    Correlation strength
                  </span>
                  <span className={`${
                    trigger.color === 'red' ? 'text-red-400' 
                    : trigger.color === 'amber' ? 'text-amber-400' 
                    : 'text-green-400'
                  }`}>
                    {trigger.percentage}%
                  </span>
                </div>
                <div className={`h-2 rounded-full overflow-hidden ${
                  isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`h-full rounded-full ${
                      trigger.color === 'red' ? 'bg-red-500'
                      : trigger.color === 'amber' ? 'bg-amber-500'
                      : 'bg-green-500'
                    }`}
                    style={{ width: `${trigger.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pattern Insights */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Behavioral Patterns
        </h2>
        <div className="space-y-4">
          {patterns.map((pattern, index) => (
            <div key={index} className={`p-5 rounded-2xl border ${
              isDarkMode 
                ? 'bg-indigo-500/10 border-indigo-500/30' 
                : 'bg-indigo-50 border-indigo-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'
                }`}>
                  <TrendingUp className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
                      {pattern.title}
                    </h3>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      isDarkMode ? 'bg-indigo-500/20 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
                    }`}>
                      {pattern.confidence}% confidence
                    </span>
                  </div>
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    {pattern.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className={`w-4 h-4 ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`} />
                    <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                      {pattern.timeframe}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Pattern Insight */}
      <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-amber-900/20 via-slate-900/40 to-slate-900/40 border-amber-500/30' 
          : 'bg-gradient-to-br from-amber-50 to-white border-amber-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-amber-500/20' : 'bg-amber-200'
          }`}>
            <AlertCircle className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`} />
          </div>
          <div>
            <h3 className={`text-lg mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
              Key Finding
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Anxiety spikes occur most often between <strong>1–3 PM</strong>, typically following skipped or delayed lunch. 
              Your heart rate increases by an average of 18-22 bpm during these windows. Consider setting a lunch reminder to help stabilize your afternoon mood.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
