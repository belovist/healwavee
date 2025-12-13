import { Brain, Activity, Target, TrendingUp } from 'lucide-react';

export function TrustBadges() {
  const features = [
    {
      icon: Brain,
      title: "AI-powered emotional pattern detection",
    },
    {
      icon: Activity,
      title: "Real-time heart-rate spike alerts",
    },
    {
      icon: Target,
      title: "Personalized anxiety-reduction suggestions",
    },
    {
      icon: TrendingUp,
      title: "Builds long-term healthy routines",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-indigo-900/30 rounded-2xl hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 dark:bg-gradient-to-br dark:from-cyan-500 dark:to-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg dark:shadow-cyan-500/30">
                <feature.icon className="w-6 h-6" />
              </div>
              <p className="text-gray-700 dark:text-slate-300">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}