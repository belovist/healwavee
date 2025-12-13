import { ArrowRight, PlayCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onOpenDashboard: () => void;
}

export function Hero({ onOpenDashboard }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 transition-colors">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 dark:bg-indigo-500/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-500/20 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-200 dark:bg-pink-500/20 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white transition-colors">
                Your Smart Mental-Health Companion
              </h1>
              <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors">
                HealWave understands your emotional patterns through heart-rate spikes and daily habits — helping prevent anxiety before it starts.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenDashboard}
                className="flex items-center gap-2 px-8 py-4 bg-indigo-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-500 text-white rounded-full hover:bg-indigo-700 dark:hover:from-cyan-600 dark:hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl dark:shadow-cyan-500/30"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 border-2 border-indigo-600 dark:border-cyan-500 rounded-full hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all">
                <PlayCircle className="w-5 h-5" />
                How it Works
              </button>
            </div>
          </div>
          
          {/* Right side - Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-slate-800 dark:to-indigo-900 rounded-[3rem] p-8 shadow-2xl transition-colors">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1734896454854-51b77c9647e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3ZWFyaW5nJTIwc21hcnR3YXRjaCUyMGZpdG5lc3MlMjB0cmFja2VyfGVufDF8fHx8MTc2NTUyOTI2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person wearing heart-rate wearable"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4 max-w-[200px] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Heart Rate</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">Normal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}