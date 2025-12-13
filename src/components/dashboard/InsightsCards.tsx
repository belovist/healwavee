import { Clock, Target, TrendingUp } from 'lucide-react';

interface InsightsCardsProps {
  isDarkMode?: boolean;
}

export function InsightsCards({ isDarkMode = true }: InsightsCardsProps) {
  const recommendations = [
    {
      text: "Take a 2-minute breathing break",
      color: "cyan",
    },
    {
      text: "Your heart-rate spikes usually happen before lunch — eat on time",
      color: "amber",
    },
    {
      text: "Try a short walk, HR is high",
      color: "purple",
    },
    {
      text: "Talk to someone — emotional tension detected",
      color: "pink",
    },
    {
      text: "Your anxiety levels are decreasing today — good job!",
      color: "green",
    },
  ];

  const insights = [
    {
      icon: Clock,
      title: "Daily Emotional Pattern",
      description: "Your calm periods are typically 8-11 AM and 6-9 PM. Stress peaks occur around 2-4 PM.",
      gradient: "from-cyan-500 to-indigo-500",
      stats: [
        { label: "Calm", value: "65%", color: "text-green-400" },
        { label: "Stressed", value: "25%", color: "text-amber-400" },
        { label: "Anxious", value: "10%", color: "text-red-400" },
      ]
    },
    {
      icon: Target,
      title: "Trigger Detector",
      description: "Your biggest trigger today was: delayed meals",
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Skipping lunch increased anxiety by 40%",
        "Similar pattern detected 4 times this week",
        "Consider setting meal reminders"
      ]
    },
    {
      icon: TrendingUp,
      title: "Helpful Habits",
      description: "Eating at 2 PM reduces your anxiety consistently",
      gradient: "from-emerald-500 to-teal-500",
      details: [
        "Morning exercise reduces daily anxiety by 35%",
        "7+ hours sleep correlates with 50% lower stress",
        "Breathing exercises lower HR by avg 12 bpm"
      ]
    },
  ];

  return (
    <div className="space-y-6">
      {/* Personalized Recommendations */}
      <div>
        <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Personalized Recommendations</h2>
        <div className="flex flex-wrap gap-3">
          {recommendations.map((rec, index) => (
            <button
              key={index}
              className={`px-4 py-2.5 rounded-full text-sm border transition-all hover:scale-105 ${
                rec.color === 'cyan' 
                  ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 shadow-lg shadow-cyan-500/20'
                  : rec.color === 'amber'
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20 shadow-lg shadow-amber-500/20'
                  : rec.color === 'purple'
                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-400 hover:bg-purple-500/20 shadow-lg shadow-purple-500/20'
                  : rec.color === 'pink'
                  ? 'bg-pink-500/10 border-pink-500/30 text-pink-400 hover:bg-pink-500/20 shadow-lg shadow-pink-500/20'
                  : 'bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20 shadow-lg shadow-green-500/20'
              }`}
            >
              {rec.text}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Insights Cards */}
      <div>
        <h2 className={`text-xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pattern Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`backdrop-blur-xl rounded-2xl border p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-slate-900/40 border-slate-800/50' 
                  : 'bg-white border-gray-200'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 bg-gradient-to-br ${insight.gradient} rounded-xl mb-4 shadow-lg`}>
                <insight.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className={`text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{insight.title}</h3>
              <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{insight.description}</p>

              {/* Stats or Details */}
              {insight.stats ? (
                <div className="flex gap-4">
                  {insight.stats.map((stat, idx) => (
                    <div key={idx}>
                      <div className={`text-xl ${stat.color} mb-1`}>{stat.value}</div>
                      <div className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {insight.details?.map((detail, idx) => (
                    <div key={idx} className={`flex items-start gap-2 text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}