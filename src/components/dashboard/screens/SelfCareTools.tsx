import { Wind, Music, BookOpen, Footprints, Heart, Brain, Sunrise, Moon } from 'lucide-react';

interface SelfCareToolsProps {
  isDarkMode?: boolean;
}

export function SelfCareTools({ isDarkMode = true }: SelfCareToolsProps) {
  const tools = [
    {
      name: 'Breathing Reset',
      description: 'Calm your nervous system with guided breathing exercises',
      duration: '2–5 mins',
      benefit: 'Reduces anxiety by 30-40%',
      icon: Wind,
      color: 'cyan',
      bgFrom: 'from-cyan-400',
      bgTo: 'to-blue-500'
    },
    {
      name: 'Guided Walk Reminder',
      description: 'Get notified when it\'s time for a stress-relieving walk',
      duration: '10–15 mins',
      benefit: 'Lowers heart rate by 12 bpm',
      icon: Footprints,
      color: 'green',
      bgFrom: 'from-green-400',
      bgTo: 'to-emerald-500'
    },
    {
      name: 'Expressive Journaling',
      description: 'Write freely about your thoughts and feelings',
      duration: '5–10 mins',
      benefit: 'Improves emotional clarity',
      icon: BookOpen,
      color: 'purple',
      bgFrom: 'from-purple-400',
      bgTo: 'to-indigo-500'
    },
    {
      name: 'Calm Music Session',
      description: 'Listen to scientifically-designed calming music',
      duration: '3–20 mins',
      benefit: 'Promotes relaxation',
      icon: Music,
      color: 'pink',
      bgFrom: 'from-pink-400',
      bgTo: 'to-rose-500'
    },
    {
      name: 'Body Scan Meditation',
      description: 'Progressive relaxation from head to toe',
      duration: '8–12 mins',
      benefit: 'Releases physical tension',
      icon: Heart,
      color: 'amber',
      bgFrom: 'from-amber-400',
      bgTo: 'to-orange-500'
    },
    {
      name: 'Cognitive Reframing',
      description: 'Challenge anxious thoughts with guided prompts',
      duration: '5–7 mins',
      benefit: 'Shifts perspective',
      icon: Brain,
      color: 'indigo',
      bgFrom: 'from-indigo-400',
      bgTo: 'to-purple-500'
    },
    {
      name: 'Morning Affirmations',
      description: 'Start your day with positive self-talk',
      duration: '2–3 mins',
      benefit: 'Sets positive tone',
      icon: Sunrise,
      color: 'yellow',
      bgFrom: 'from-yellow-400',
      bgTo: 'to-amber-500'
    },
    {
      name: 'Evening Wind-Down',
      description: 'Prepare your mind and body for restful sleep',
      duration: '10–15 mins',
      benefit: 'Improves sleep quality',
      icon: Moon,
      color: 'slate',
      bgFrom: 'from-slate-400',
      bgTo: 'to-slate-600'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Self-Care Tools
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Evidence-based techniques to manage anxiety
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <button 
            key={index}
            className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-all hover:scale-105 text-left ${
              isDarkMode 
                ? 'bg-slate-900/40 border-slate-800/50 hover:border-slate-700' 
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${tool.bgFrom} ${tool.bgTo} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className={`text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {tool.name}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {tool.description}
                </p>
              </div>
            </div>

            <div className={`flex items-center gap-4 pt-4 border-t ${
              isDarkMode ? 'border-slate-700/50' : 'border-gray-200'
            }`}>
              <div className="flex-1">
                <p className={`text-xs mb-1 ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                  Duration
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  {tool.duration}
                </p>
              </div>
              <div className="flex-1">
                <p className={`text-xs mb-1 ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                  Benefit
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  {tool.benefit}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Recommended for You */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-cyan-900/20 via-slate-900/40 to-slate-900/40 border-cyan-500/30' 
          : 'bg-gradient-to-br from-cyan-50 to-white border-cyan-200'
      }`}>
        <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Recommended for You Right Now
        </h2>
        <p className={`text-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
          Based on your current heart rate (78 bpm) and time of day, we suggest:
        </p>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Wind className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className={`text-lg mb-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
              Breathing Reset (3 mins)
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              Quick breathing exercise to stabilize your afternoon energy
            </p>
          </div>
          <button className={`px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30`}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
