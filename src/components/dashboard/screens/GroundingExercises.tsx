import { Anchor, CheckCircle, Eye, Ear, Hand, Wind, Heart } from 'lucide-react';

interface GroundingExercisesProps {
  isDarkMode?: boolean;
}

export function GroundingExercises({ isDarkMode = true }: GroundingExercisesProps) {
  const fiveFourThreeTwoOne = [
    { sense: '5 Things You See', icon: Eye, items: ['The color of the walls', 'A picture or object', 'Shadows and light', 'Textures around you', 'Something you usually ignore'] },
    { sense: '4 Things You Touch', icon: Hand, items: ['Your feet on the floor', 'Your back against the chair', 'The texture of your clothes', 'Something smooth or rough'] },
    { sense: '3 Things You Hear', icon: Ear, items: ['Birds or traffic outside', 'Your own breathing', 'A distant sound'] },
    { sense: '2 Things You Smell', icon: Wind, items: ['The air around you', 'Your soap or perfume'] },
    { sense: '1 Thing You Taste', icon: Heart, items: ['The taste in your mouth'] },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Grounding Exercises
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Return to the present moment when anxiety feels overwhelming
        </p>
      </div>

      {/* 5-4-3-2-1 Technique */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                5-4-3-2-1 Sensory Grounding
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Takes 3-5 minutes · Brings you back to the present
              </p>
            </div>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
            This exercise helps interrupt anxiety by focusing your attention on your immediate surroundings.
            Work through each sense slowly and deliberately.
          </p>
        </div>

        <div className="space-y-4">
          {fiveFourThreeTwoOne.map((step, index) => (
            <div key={index} className={`p-5 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-100'
                }`}>
                  <step.icon className={`w-6 h-6 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {step.sense}
                  </h3>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className={`flex items-center gap-2 text-sm ${
                        isDarkMode ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isDarkMode ? 'border-slate-600' : 'border-gray-300'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
                          }`}></div>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30">
            Start Guided 5-4-3-2-1 Exercise
          </button>
        </div>
      </div>

      {/* Body Scan */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Body Scan Relaxation
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Takes 8-12 minutes · Releases physical tension
              </p>
            </div>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
            A progressive relaxation technique that helps you notice and release tension held in different parts of your body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { step: '1. Head & Face', description: 'Notice tension in your jaw, forehead, and scalp' },
            { step: '2. Neck & Shoulders', description: 'Often where we hold the most stress' },
            { step: '3. Arms & Hands', description: 'Relax from shoulders to fingertips' },
            { step: '4. Chest & Back', description: 'Feel your breath expand your chest' },
            { step: '5. Stomach & Hips', description: 'Let your belly soften and release' },
            { step: '6. Legs & Feet', description: 'Release tension down to your toes' },
          ].map((item, index) => (
            <div key={index} className={`p-4 rounded-2xl border ${
              isDarkMode ? 'bg-purple-500/10 border-purple-500/30' : 'bg-purple-50 border-purple-200'
            }`}>
              <div className="flex items-start gap-3">
                <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-purple-400' : 'text-purple-600'
                }`} />
                <div>
                  <h4 className={`mb-1 ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>
                    {item.step}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all shadow-lg shadow-purple-500/30">
            Start Guided Body Scan
          </button>
        </div>
      </div>

      {/* Why Grounding Works */}
      <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-indigo-500/10 border-indigo-500/30' 
          : 'bg-indigo-50 border-indigo-200'
      }`}>
        <h3 className={`text-lg mb-3 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
          Why Grounding Exercises Work
        </h3>
        <p className={`text-sm mb-3 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
          When you're anxious, your mind is often focused on the past or future. Grounding techniques interrupt this cycle by:
        </p>
        <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
          <li className="flex items-start gap-2">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>Shifting attention away from anxious thoughts</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>Activating your senses to anchor you in the present</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>Calming your nervous system's fight-or-flight response</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>Creating a sense of safety and control</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
