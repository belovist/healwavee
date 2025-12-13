import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bell, Lightbulb, BarChart3 } from 'lucide-react';

export function DetailedFeatures() {
  const features = [
    {
      icon: Bell,
      title: "Real-time Anxiety Alerts",
      description: "Detect heart-rate spikes early",
      details: "Our advanced AI monitors your heart rate continuously and can identify patterns that indicate rising anxiety levels. Get notified before anxiety becomes overwhelming, giving you time to use coping strategies.",
      image: "https://images.unsplash.com/photo-1682706841289-9d7ddf5eb999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHJhdGUlMjBtb25pdG9yJTIwaGVhbHRofGVufDF8fHx8MTc2NTUyOTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      reverse: false,
    },
    {
      icon: Lightbulb,
      title: "Personalized Recommendations",
      description: "Walk, grounding exercises, talking to someone, breathing routines",
      details: "Based on your unique patterns and what has worked for you in the past, get personalized suggestions like taking a walk, practicing grounding exercises, reaching out to a friend, or guided breathing sessions.",
      image: "https://images.unsplash.com/photo-1713428856240-100df77350bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnhpZXR5JTIwcmVsaWVmJTIwYnJlYXRoaW5nfGVufDF8fHx8MTc2NTUyOTI2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      reverse: true,
    },
    {
      icon: BarChart3,
      title: "Habit Insights",
      description: '"Eating at 2 PM reduces your anxiety" type insights',
      details: "Discover connections you never knew existed. Our AI analyzes your daily patterns and shows you insights like how eating lunch at a certain time, morning exercise, or sleep quality affects your anxiety levels.",
      image: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMG1vY2t1cHxlbnwxfHx8fDE3NjU1MTk1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      reverse: false,
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${feature.reverse ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={feature.reverse ? 'md:order-2' : ''}>
                <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-indigo-900 rounded-[3rem] p-8 shadow-xl transition-colors">
                  <ImageWithFallback 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${feature.reverse ? 'md:order-1' : ''}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 dark:bg-gradient-to-br dark:from-cyan-500 dark:to-indigo-500 rounded-2xl shadow-lg dark:shadow-cyan-500/30">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl text-gray-900 dark:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-indigo-600 dark:text-cyan-400 transition-colors">
                    {feature.description}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-slate-300 transition-colors">
                    {feature.details}
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