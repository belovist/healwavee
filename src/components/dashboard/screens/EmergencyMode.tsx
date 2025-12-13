import { AlertCircle, Phone, MessageCircle, Shield, Heart, Wind, Users } from 'lucide-react';

interface EmergencyModeProps {
  isDarkMode?: boolean;
}

export function EmergencyMode({ isDarkMode = true }: EmergencyModeProps) {
  const emergencyContacts = [
    { name: '988 Suicide & Crisis Lifeline', number: '988', description: '24/7 free and confidential support', type: 'crisis' },
    { name: 'Crisis Text Line', number: 'Text HOME to 741741', description: 'Free 24/7 text support', type: 'text' },
    { name: 'SAMHSA National Helpline', number: '1-800-662-4357', description: 'Mental health and substance abuse', type: 'support' },
  ];

  const immediateSteps = [
    { step: 'Take slow, deep breaths', description: 'Inhale for 4, hold for 4, exhale for 6', icon: Wind },
    { step: 'Ground yourself in the present', description: 'Name 5 things you can see right now', icon: Eye },
    { step: 'Reach out for support', description: 'Call a trusted friend or helpline', icon: Phone },
    { step: 'Move to a safe, comfortable space', description: 'Physical safety is priority', icon: Shield },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Emergency Support
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Immediate help when you need it most
        </p>
      </div>

      {/* SOS Button */}
      <div className={`backdrop-blur-xl rounded-3xl border p-12 shadow-2xl transition-colors text-center ${
        isDarkMode 
          ? 'bg-gradient-to-br from-red-900/30 via-slate-900/40 to-slate-900/40 border-red-500/30' 
          : 'bg-gradient-to-br from-red-50 to-white border-red-200'
      }`}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 animate-pulse">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h2 className={`text-3xl mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Need Immediate Help?
        </h2>
        <p className={`text-lg mb-8 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
          If you're in crisis or having thoughts of self-harm
        </p>
        <button className="px-12 py-5 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-full hover:from-red-600 hover:to-rose-600 transition-all shadow-2xl shadow-red-500/50 text-xl">
          Call 988 Now
        </button>
        <p className={`text-sm mt-4 ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
          Free, confidential support available 24/7
        </p>
      </div>

      {/* Immediate Calming Steps */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Immediate Steps to Take Right Now
        </h2>
        <div className="space-y-4">
          {immediateSteps.map((item, index) => (
            <div key={index} className={`p-5 rounded-2xl border ${
              isDarkMode 
                ? 'bg-cyan-500/10 border-cyan-500/30' 
                : 'bg-cyan-50 border-cyan-200'
            }`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-200'
                }`}>
                  <item.icon className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`} />
                </div>
                <div>
                  <h3 className={`mb-1 text-lg ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                    {index + 1}. {item.step}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          24/7 Crisis Resources
        </h2>
        <div className="space-y-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className={`p-5 rounded-2xl border ${
              isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    contact.type === 'crisis' 
                      ? 'bg-red-500/20'
                      : contact.type === 'text'
                      ? 'bg-blue-500/20'
                      : 'bg-purple-500/20'
                  }`}>
                    {contact.type === 'text' ? (
                      <MessageCircle className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    ) : (
                      <Phone className={`w-6 h-6 ${
                        contact.type === 'crisis' 
                          ? isDarkMode ? 'text-red-400' : 'text-red-600'
                          : isDarkMode ? 'text-purple-400' : 'text-purple-600'
                      }`} />
                    )}
                  </div>
                  <div>
                    <h3 className={`mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {contact.name}
                    </h3>
                    <p className={`text-sm mb-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                      {contact.description}
                    </p>
                    <p className={`text-lg ${
                      contact.type === 'crisis' 
                        ? 'text-red-400'
                        : contact.type === 'text'
                        ? 'text-blue-400'
                        : 'text-purple-400'
                    }`}>
                      {contact.number}
                    </p>
                  </div>
                </div>
                <button className={`px-6 py-3 rounded-full transition-all ${
                  contact.type === 'crisis'
                    ? 'bg-gradient-to-r from-red-500 to-rose-500 text-white hover:from-red-600 hover:to-rose-600 shadow-lg shadow-red-500/30'
                    : contact.type === 'text'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 shadow-lg shadow-purple-500/30'
                }`}>
                  {contact.type === 'text' ? 'Text' : 'Call'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reassurance Message */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-indigo-500/10 border-indigo-500/30' 
          : 'bg-indigo-50 border-indigo-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'
          }`}>
            <Heart className={`w-7 h-7 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`} />
          </div>
          <div>
            <h3 className={`text-xl mb-3 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
              You Are Not Alone
            </h3>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              What you're feeling is valid, and help is available. Crisis counselors are trained professionals who want to support you through this difficult moment.
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              <strong>Remember:</strong> This feeling is temporary. You deserve support, safety, and care. 
              Reaching out is a sign of strength, not weakness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Import Eye icon that was used
import { Eye } from 'lucide-react';
