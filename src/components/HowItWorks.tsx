import { Activity, Brain, Heart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Activity,
      title: "Track",
      description: "Wearable continuously monitors heart rate + daily patterns",
      color: "indigo",
    },
    {
      number: "02",
      icon: Brain,
      title: "Understand",
      description: "AI detects triggers, routines, stress peaks",
      color: "purple",
    },
    {
      number: "03",
      icon: Heart,
      title: "Support",
      description: "Gives personalized recommendations that reduce anxiety",
      color: "pink",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 transition-colors">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            Three simple steps to understand and prevent anxiety
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 dark:from-indigo-500/30 dark:via-purple-500/30 dark:to-pink-500/30 z-0 transition-colors" style={{ top: '4rem', left: '10%', right: '10%' }}></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center border border-transparent dark:border-slate-700">
                {/* Circle number */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 text-white flex items-center justify-center mb-6 shadow-lg relative z-10`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-4">
                  <div className={`text-sm font-semibold text-${step.color}-600 dark:text-${step.color}-400 uppercase tracking-wide`}>
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl text-gray-900 dark:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}