import { Settings as SettingsIcon, Watch, Bell, Shield, Download, Moon, Sun, Smartphone, Mail, Lock } from 'lucide-react';

interface SettingsProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

export function Settings({ isDarkMode = true, onToggleTheme }: SettingsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Settings
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Manage your account and preferences
        </p>
      </div>

      {/* Wearable Connection */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Wearable Device
        </h2>
        <div className={`p-5 rounded-2xl border ${
          isDarkMode 
            ? 'bg-green-500/10 border-green-500/30' 
            : 'bg-green-50 border-green-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isDarkMode ? 'bg-green-500/20' : 'bg-green-200'
              }`}>
                <Watch className={`w-7 h-7 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`} />
              </div>
              <div>
                <h3 className={`mb-1 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
                  Apple Watch Series 8
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  Connected • Last sync: 2 minutes ago
                </p>
              </div>
            </div>
            <button className={`px-6 py-3 rounded-full border transition-all ${
              isDarkMode 
                ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' 
                : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
            }`}>
              Disconnect
            </button>
          </div>
        </div>

        <button className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
          isDarkMode 
            ? 'text-cyan-400 hover:bg-slate-800' 
            : 'text-cyan-600 hover:bg-gray-100'
        }`}>
          <Smartphone className="w-4 h-4" />
          <span className="text-sm">Add Another Device</span>
        </button>
      </div>

      {/* Notifications */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Notification Preferences
        </h2>
        <div className="space-y-4">
          {[
            { label: 'Anxiety Spike Alerts', description: 'Get notified when your heart rate indicates high anxiety', enabled: true },
            { label: 'Daily Check-ins', description: 'Remind me to log my mood each evening', enabled: true },
            { label: 'Breathing Reminders', description: 'Suggest breathing exercises during stress windows', enabled: true },
            { label: 'Weekly Reports', description: 'Summary of patterns and progress', enabled: false },
            { label: 'Community Replies', description: 'Notify me when someone replies to my posts', enabled: true },
          ].map((item, index) => (
            <div key={index} className={`p-5 rounded-2xl border flex items-center justify-between ${
              isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-start gap-3">
                <Bell className={`w-5 h-5 mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
                <div>
                  <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.label}
                  </h4>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
              <button className={`relative w-14 h-8 rounded-full transition-all ${
                item.enabled 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
                  : isDarkMode ? 'bg-slate-700' : 'bg-gray-300'
              }`}>
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all ${
                  item.enabled ? 'right-1' : 'left-1'
                }`}></div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Appearance */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Appearance
        </h2>
        <div className={`p-5 rounded-2xl border flex items-center justify-between ${
          isDarkMode ? 'bg-slate-800/30 border-slate-700/50' : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center gap-3">
            {isDarkMode ? (
              <Moon className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
            ) : (
              <Sun className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
            )}
            <div>
              <h4 className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Theme
              </h4>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                {isDarkMode ? 'Dark mode' : 'Light mode'}
              </p>
            </div>
          </div>
          <button 
            onClick={onToggleTheme}
            className={`relative w-14 h-8 rounded-full transition-all ${
              isDarkMode 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                : 'bg-gradient-to-r from-amber-400 to-orange-400'
            }`}
          >
            <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all ${
              isDarkMode ? 'right-1' : 'left-1'
            }`}></div>
          </button>
        </div>
      </div>

      {/* Data & Privacy */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Data & Privacy
        </h2>
        <div className="space-y-3">
          <button className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' 
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Download className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Export Your Data</span>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>→</span>
          </button>

          <button className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' 
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Shield className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Privacy Policy</span>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>→</span>
          </button>

          <button className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' 
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Lock className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Data Permissions</span>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>→</span>
          </button>
        </div>
      </div>

      {/* Account */}
      <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50' 
          : 'bg-white border-gray-200'
      }`}>
        <h2 className={`text-xl mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Account
        </h2>
        <div className="space-y-3">
          <button className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' 
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Mail className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
              <div className="text-left">
                <p className={isDarkMode ? 'text-white' : 'text-gray-900'}>Email Address</p>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>sarah.m@example.com</p>
              </div>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>Change</span>
          </button>

          <button className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${
            isDarkMode 
              ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' 
              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
          }`}>
            <div className="flex items-center gap-3">
              <Lock className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Change Password</span>
            </div>
            <span className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>→</span>
          </button>

          <button className={`w-full p-5 rounded-2xl border transition-all text-left ${
            isDarkMode 
              ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20' 
              : 'bg-red-50 border-red-200 hover:bg-red-100'
          }`}>
            <span className={`${isDarkMode ? 'text-red-400' : 'text-red-700'}`}>Delete Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}
