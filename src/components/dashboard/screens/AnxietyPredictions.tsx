import { Brain, AlertTriangle, CheckCircle, Wind, Target } from 'lucide-react';

interface AnxietyPredictionsProps {
  isDarkMode?: boolean;
}

export function AnxietyPredictions({ isDarkMode = true }: AnxietyPredictionsProps) {
  const stressWindows = [
    { time: '8:00 AM - 9:30 AM', risk: 'Low', percentage: 25, color: 'green' },
    { time: '12:00 PM - 2:00 PM', risk: 'High', percentage: 78, color: 'red' },
    { time: '5:00 PM - 7:00 PM', risk: 'Medium', percentage: 55, color: 'amber' },
    { time: '9:00 PM - 11:00 PM', risk: 'Medium', percentage: 62, color: 'amber' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Anxiety Predictions (AI)
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Predictive insights powered by machine learning
        </p>
      </div>

      {/* Main Risk Card */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-amber-900/20 via-slate-900/40 to-slate-900/40 border-amber-500/30' 
          : 'bg-gradient-to-br from-amber-50 to-white border-amber-200'
      }`}>
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Today's Anxiety Risk
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={`text-6xl ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
              63%
            </span>
            <span className={`text-xl ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}>
              Medium
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Based on current patterns and historical data
          </p>
        </div>

        {/* Risk Meter */}
        <div className={`h-3 rounded-full overflow-hidden mb-2 ${
          isDarkMode ? 'bg-slate-800' : 'bg-gray-200'
        }`}>
          <div className="h-full bg-gradient-to-r from-green-400 via-amber-400 to-red-500 rounded-full" style={{ width: '63%' }}></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>Low</span>
          <span className={isDarkMode ? 'text-amber-400' : 'text-amber-600'}>Medium</span>
          <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>High</span>
        </div>
      </div>

      {/* Timeline of Stress Windows */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Predicted Stress Windows
        </h2>
        <div className="space-y-4">
          {stressWindows.map((window, index) => (
            <div key={index} className={`p-4 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    window.color === 'green' 
                      ? 'bg-green-500/20 text-green-400'
                      : window.color === 'amber'
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {window.time}
                    </p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      Risk Level: {window.risk}
                    </p>
                  </div>
                </div>
                <span className={`text-xl ${
                  window.color === 'green' 
                    ? 'text-green-400'
                    : window.color === 'amber'
                    ? 'text-amber-400'
                    : 'text-red-400'
                }`}>
                  {window.percentage}%
                </span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${
                isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
              }`}>
                <div 
                  className={`h-full rounded-full ${
                    window.color === 'green' 
                      ? 'bg-green-500'
                      : window.color === 'amber'
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${window.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation Block */}
      <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-indigo-500/10 border-indigo-500/30' 
          : 'bg-indigo-50 border-indigo-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'
          }`}>
            <Brain className={`w-5 h-5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`} />
          </div>
          <div>
            <h3 className={`mb-2 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
              How We Predict Anxiety
            </h3>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Our AI analyzes multiple factors to predict anxiety risk throughout your day:
            </p>
            <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                Heart-rate variability (HRV) patterns
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                Sleep quality and duration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                Meal timing and skipped meals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                Historical anxiety episodes
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-all hover:scale-105 ${
          isDarkMode 
            ? 'bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20' 
            : 'bg-cyan-50 border-cyan-200 hover:bg-cyan-100'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Wind className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className={`mb-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                Start Breathing Exercise
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Reduce stress with guided breathing
              </p>
            </div>
          </div>
        </button>

        <button className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-all hover:scale-105 ${
          isDarkMode 
            ? 'bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20' 
            : 'bg-purple-50 border-purple-200 hover:bg-purple-100'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Target className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className={`mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                Review Your Triggers
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                See what's causing anxiety spikes
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
