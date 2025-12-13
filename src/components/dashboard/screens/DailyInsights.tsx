import { Lightbulb, TrendingUp, TrendingDown, Star, CheckCircle } from 'lucide-react';

interface DailyInsightsProps {
  isDarkMode?: boolean;
}

export function DailyInsights({ isDarkMode = true }: DailyInsightsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Daily Insights
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Personalized observations and recommendations
        </p>
      </div>

      {/* Mood Score */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-cyan-900/20 via-slate-900/40 to-slate-900/40 border-cyan-500/30' 
          : 'bg-gradient-to-br from-cyan-50 to-white border-cyan-200'
      }`}>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Star className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Today's Mood Score
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={`text-6xl ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
              65%
            </span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-6 h-6 text-green-500" />
              <span className="text-green-500 text-xl">+3%</span>
            </div>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Up from yesterday (62%)
          </p>

          {/* Mood Meter */}
          <div className={`h-3 rounded-full overflow-hidden mt-6 mb-2 ${
            isDarkMode ? 'bg-slate-800' : 'bg-gray-200'
          }`}>
            <div className="h-full bg-gradient-to-r from-red-400 via-amber-400 via-cyan-400 to-green-500 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="flex justify-between text-xs">
            <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>Low</span>
            <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>High</span>
          </div>
        </div>
      </div>

      {/* Positive Insights */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          What's Working Well
        </h2>
        <div className="space-y-4">
          <div className={`p-5 rounded-2xl border ${
            isDarkMode 
              ? 'bg-green-500/10 border-green-500/30' 
              : 'bg-green-50 border-green-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-green-500/20' : 'bg-green-200'
              }`}>
                <CheckCircle className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div>
                <h3 className={`mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Walking Reduced Stress
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Taking a short walk at 3:15 PM reduced your heart rate by <strong>12 bpm</strong> within 10 minutes. 
                  Your anxiety level dropped from 68% to 42%. Walking appears to be highly effective for you.
                </p>
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border ${
            isDarkMode 
              ? 'bg-green-500/10 border-green-500/30' 
              : 'bg-green-50 border-green-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-green-500/20' : 'bg-green-200'
              }`}>
                <CheckCircle className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div>
                <h3 className={`mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Improved Morning Routine
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  You've had breakfast 6 out of 7 days this week. On breakfast days, your anxiety levels average <strong>28% lower</strong> throughout the morning.
                </p>
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border ${
            isDarkMode 
              ? 'bg-green-500/10 border-green-500/30' 
              : 'bg-green-50 border-green-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-green-500/20' : 'bg-green-200'
              }`}>
                <CheckCircle className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div>
                <h3 className={`mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Consistent Sleep Schedule
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  You've been going to bed within the same 30-minute window for 4 consecutive nights. 
                  This consistency is associated with <strong>better morning mood scores</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Areas for Improvement */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Opportunities to Improve
        </h2>
        <div className="space-y-4">
          <div className={`p-5 rounded-2xl border ${
            isDarkMode 
              ? 'bg-amber-500/10 border-amber-500/30' 
              : 'bg-amber-50 border-amber-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-amber-500/20' : 'bg-amber-200'
              }`}>
                <Lightbulb className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`} />
              </div>
              <div>
                <h3 className={`mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  Lunch Timing
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Try eating lunch <strong>before 1:00 PM</strong> to avoid afternoon anxiety spikes. 
                  On days you eat early, your afternoon heart rate is 15% more stable.
                </p>
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-2xl border ${
            isDarkMode 
              ? 'bg-amber-500/10 border-amber-500/30' 
              : 'bg-amber-50 border-amber-200'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-amber-500/20' : 'bg-amber-200'
              }`}>
                <Lightbulb className={`w-6 h-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`} />
              </div>
              <div>
                <h3 className={`mb-2 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                  Evening Screen Time
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Reducing screen time after 9 PM may improve sleep quality. 
                  Late screen use is correlated with <strong>20% higher morning anxiety</strong> the next day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Summary */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          This Week's Progress
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Avg Mood
            </p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
              68%
            </p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+5%</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Calm Days
            </p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              5/7
            </p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+2</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Avg HR
            </p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>
              71
            </p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>-3 bpm</span>
            </div>
          </div>

          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Sleep Quality
            </p>
            <p className={`text-2xl mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>
              74%
            </p>
            <div className="flex items-center justify-center gap-1 text-green-500 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+8%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
