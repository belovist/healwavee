import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Zap, Users, Brain } from 'lucide-react';

export function FeatureCallout() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white transition-colors">
                Prevent Anxiety Before It Starts
              </h2>
              <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors">
                Your buddy learns your emotional patterns and gives proactive support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-500/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 dark:text-white mb-2">Early Detection</h3>
                  <p className="text-gray-600 dark:text-slate-300">Catches anxiety signals before you consciously feel them</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 dark:text-white mb-2">Smart Learning</h3>
                  <p className="text-gray-600 dark:text-slate-300">Adapts to your unique patterns and lifestyle</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-100 dark:bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 dark:text-white mb-2">Always There</h3>
                  <p className="text-gray-600 dark:text-slate-300">24/7 monitoring and support when you need it</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-slate-800 dark:to-purple-900 rounded-[3rem] p-8 shadow-2xl transition-colors">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1623826538391-4e066d422976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50YWwlMjBoZWFsdGglMjB3ZWxsbmVzcyUyMGNhbG18ZW58MXx8fHwxNzY1NTI5MjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person using calming tools on phone"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}