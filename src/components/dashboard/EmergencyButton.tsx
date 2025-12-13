import { AlertCircle, X, Wind } from 'lucide-react';
import { useState, useEffect } from 'react';

export function EmergencyButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [breathCycle, setBreathCycle] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    if (!isOpen) return;

    const cycleTimer = setInterval(() => {
      setBreathCycle((current) => {
        if (current === 'inhale') return 'hold';
        if (current === 'hold') return 'exhale';
        return 'inhale';
      });
    }, 4000);

    return () => clearInterval(cycleTimer);
  }, [isOpen]);

  const getBreathText = () => {
    switch (breathCycle) {
      case 'inhale': return 'Breathe In...';
      case 'hold': return 'Hold...';
      case 'exhale': return 'Breathe Out...';
    }
  };

  const getBreathScale = () => {
    switch (breathCycle) {
      case 'inhale': return 'scale-150';
      case 'hold': return 'scale-150';
      case 'exhale': return 'scale-100';
    }
  };

  return (
    <>
      {/* Emergency Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-2xl shadow-pink-500/50 flex items-center justify-center hover:scale-110 transition-all z-50 animate-pulse"
      >
        <AlertCircle className="w-8 h-8 text-white" />
      </button>

      {/* Emergency Mode Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-slate-300" />
            </button>

            {/* Content */}
            <div className="text-center space-y-8">
              {/* Title */}
              <div className="space-y-2">
                <h2 className="text-3xl text-white">Emergency Calm Mode</h2>
                <p className="text-slate-400">Follow the breathing exercise below</p>
              </div>

              {/* Breathing Circle */}
              <div className="relative flex items-center justify-center h-80">
                <div 
                  className={`absolute w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 blur-xl transition-all duration-[4000ms] ${getBreathScale()}`}
                ></div>
                <div 
                  className={`absolute w-32 h-32 rounded-full border-4 border-cyan-400/50 flex items-center justify-center transition-all duration-[4000ms] ${getBreathScale()}`}
                >
                  <Wind className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <p className="text-2xl text-white">{getBreathText()}</p>
                </div>
              </div>

              {/* Grounding Steps */}
              <div className="bg-slate-900/50 rounded-2xl border border-slate-800/50 p-6">
                <h3 className="text-lg text-white mb-4">5-4-3-2-1 Grounding Technique</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-cyan-400">5</span>
                    </div>
                    <p className="text-sm text-slate-300">Name 5 things you can see around you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-400">4</span>
                    </div>
                    <p className="text-sm text-slate-300">Name 4 things you can touch</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400">3</span>
                    </div>
                    <p className="text-sm text-slate-300">Name 3 things you can hear</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400">2</span>
                    </div>
                    <p className="text-sm text-slate-300">Name 2 things you can smell</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-400">1</span>
                    </div>
                    <p className="text-sm text-slate-300">Name 1 thing you can taste</p>
                  </div>
                </div>
              </div>

              {/* Crisis Resources */}
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-2xl p-6">
                <p className="text-sm text-pink-300 mb-3">If you're in crisis, please reach out:</p>
                <div className="space-y-2">
                  <a href="tel:988" className="block w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all shadow-lg shadow-pink-500/30">
                    Call 988 (Suicide & Crisis Lifeline)
                  </a>
                  <a href="sms:741741" className="block w-full px-6 py-3 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-xl hover:bg-slate-700/50 transition-all">
                    Text HOME to 741741 (Crisis Text Line)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
