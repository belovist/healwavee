import { Wind, Play, Pause, RotateCcw, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface GuidedBreathingProps {
  isDarkMode?: boolean;
  onNavigate?: (tab: string) => void;
}

type BreathPhase = 'inhale' | 'hold' | 'exhale' | 'ready';

export function GuidedBreathing({ isDarkMode = true }: GuidedBreathingProps) {
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [breathPhase, setBreathPhase] = useState<BreathPhase>('ready');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  // Breathing pattern: Inhale 4s, Hold 4s, Exhale 6s
  const breathingPattern = {
    inhale: 4000,
    hold: 4000,
    exhale: 6000
  };

  const totalCycleTime = 14000; // 14 seconds per cycle

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const endTime = startTime + (selectedDuration * 60 * 1000);
    setTimeRemaining(selectedDuration * 60);
    setSessionComplete(false);

    let phaseTimer: NodeJS.Timeout;
    let countdownTimer: NodeJS.Timeout;

    const runBreathingCycle = () => {
      // Inhale phase
      setBreathPhase('inhale');
      phaseTimer = setTimeout(() => {
        // Hold phase
        setBreathPhase('hold');
        phaseTimer = setTimeout(() => {
          // Exhale phase
          setBreathPhase('exhale');
          phaseTimer = setTimeout(() => {
            // Check if session should continue
            if (Date.now() < endTime && isPlaying) {
              runBreathingCycle();
            } else {
              setIsPlaying(false);
              setBreathPhase('ready');
              setSessionComplete(true);
            }
          }, breathingPattern.exhale);
        }, breathingPattern.hold);
      }, breathingPattern.inhale);
    };

    // Start the breathing cycle
    runBreathingCycle();

    // Countdown timer
    countdownTimer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeRemaining(remaining);
      setElapsedTime(selectedDuration * 60 - remaining);
      
      if (remaining === 0) {
        setIsPlaying(false);
        setBreathPhase('ready');
        setSessionComplete(true);
        clearInterval(countdownTimer);
      }
    }, 1000);

    return () => {
      clearTimeout(phaseTimer);
      clearInterval(countdownTimer);
    };
  }, [isPlaying, selectedDuration]);

  const handleReset = () => {
    setIsPlaying(false);
    setBreathPhase('ready');
    setTimeRemaining(0);
    setElapsedTime(0);
    setSessionComplete(false);
  };

  const getPhaseText = () => {
    switch (breathPhase) {
      case 'inhale': return 'Breathe In';
      case 'hold': return 'Hold';
      case 'exhale': return 'Breathe Out';
      default: return sessionComplete ? 'Session Complete!' : 'Ready to Begin';
    }
  };

  const getCircleScale = () => {
    if (breathPhase === 'inhale') return 'scale-125';
    if (breathPhase === 'exhale') return 'scale-90';
    return 'scale-100';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Guided Breathing
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Calm your mind and reduce anxiety with controlled breathing
        </p>
      </div>

      {/* Main Breathing Circle */}
      <div className={`backdrop-blur-xl rounded-3xl border p-12 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex flex-col items-center">
          {/* Breathing Animation Circle */}
          <div className="relative mb-12">
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 ${
              isPlaying ? 'animate-pulse' : ''
            } bg-gradient-to-br from-cyan-400 to-blue-500`}></div>
            <div className={`relative w-64 h-64 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl shadow-cyan-500/50 transition-transform duration-[4000ms] ease-in-out ${
              getCircleScale()
            }`} style={{ transitionDuration: breathPhase === 'inhale' ? '4000ms' : breathPhase === 'exhale' ? '6000ms' : '4000ms' }}>
              <div className={`w-56 h-56 rounded-full flex flex-col items-center justify-center ${
                isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'
              } backdrop-blur-xl`}>
                {sessionComplete ? (
                  <Check className={`w-24 h-24 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                ) : (
                  <Wind className={`w-24 h-24 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                )}
                {isPlaying && (
                  <p className={`mt-4 text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    {formatTime(timeRemaining)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Breathing Instruction */}
          <div className="text-center mb-8">
            <h2 className={`text-4xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {getPhaseText()}
            </h2>
            {!isPlaying && !sessionComplete && (
              <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Inhale 4s · Hold 4s · Exhale 6s
              </p>
            )}
            {sessionComplete && (
              <p className={`text-xl ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                Great job! You completed a {selectedDuration}-minute session.
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mb-8">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              disabled={sessionComplete}
              className={`w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30 flex items-center justify-center ${
                sessionComplete ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8" />
              ) : (
                <Play className="w-8 h-8 ml-1" />
              )}
            </button>
            <button 
              onClick={handleReset}
              className={`w-12 h-12 rounded-full transition-all flex items-center justify-center ${
                isDarkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>

          {/* Session Length Selector */}
          <div>
            <p className={`text-sm mb-3 text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Session Length
            </p>
            <div className="flex gap-3">
              {[3, 5, 10].map((duration) => (
                <button
                  key={duration}
                  onClick={() => {
                    if (!isPlaying) {
                      setSelectedDuration(duration);
                      setSessionComplete(false);
                    }
                  }}
                  disabled={isPlaying}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedDuration === duration
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                      : isDarkMode
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${isPlaying ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {duration} min
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* How It Works */}
        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            How It Reduces Anxiety
          </h3>
          <div className="space-y-3">
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              <strong>4-4-6 breathing</strong> activates your parasympathetic nervous system, which controls your body's "rest and digest" response.
            </p>
            <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              <li>• Slows heart rate by 10-15 bpm</li>
              <li>• Lowers blood pressure</li>
              <li>• Reduces cortisol (stress hormone)</li>
              <li>• Improves oxygen circulation</li>
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
          isDarkMode 
            ? 'bg-slate-900/40 border-slate-800/50' 
            : 'bg-white border-gray-200'
        }`}>
          <h3 className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Tips for Best Results
          </h3>
          <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
            <li>✓ Find a quiet, comfortable space</li>
            <li>✓ Close your eyes or soften your gaze</li>
            <li>✓ Breathe through your nose when possible</li>
            <li>✓ Let your belly expand with each inhale</li>
            <li>✓ Practice 2-3 times daily for best results</li>
          </ul>
        </div>
      </div>

      {/* Your Progress */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-indigo-900/20 via-slate-900/40 to-slate-900/40 border-indigo-500/30' 
          : 'bg-gradient-to-br from-indigo-50 to-white border-indigo-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Your Breathing Practice
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-white/50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              This Week
            </p>
            <p className={`text-3xl ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              12
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
              sessions
            </p>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-white/50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Total Time
            </p>
            <p className={`text-3xl ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              67
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
              minutes
            </p>
          </div>
          <div className={`p-4 rounded-2xl text-center ${
            isDarkMode ? 'bg-slate-800/30' : 'bg-white/50'
          }`}>
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Avg HR Drop
            </p>
            <p className={`text-3xl ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              -14
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
              bpm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}