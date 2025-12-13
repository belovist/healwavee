import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenDashboard: () => void;
}

export function FinalCTA({ onOpenDashboard }: FinalCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 relative overflow-hidden transition-colors">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
            Start building a calmer life with a companion that understands you
          </h2>
          <p className="text-xl text-indigo-100">
            Join thousands of users who are taking control of their anxiety with AI-powered insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onOpenDashboard}
              className="flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}