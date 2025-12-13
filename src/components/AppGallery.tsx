import { LineChart, Activity, Sparkles } from 'lucide-react';

export function AppGallery() {
  const cards = [
    {
      icon: LineChart,
      title: "Emotional Patterns Dashboard",
      description: "Visualize your emotional journey with intuitive charts and insights that help you understand your mental health trends over time.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Activity,
      title: "HR Spike Detection",
      description: "Real-time heart rate monitoring with intelligent spike detection that alerts you to potential anxiety episodes before they escalate.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Recommendation Feed",
      description: "Get personalized, actionable suggestions tailored to your current state and proven to help you manage anxiety effectively.",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 transition-colors">
            Powerful Features in Your Pocket
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            Everything you need to understand and manage your mental health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-slate-700 hover:-translate-y-2 duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-gray-900 dark:text-white mb-4 transition-colors">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-300 transition-colors">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}