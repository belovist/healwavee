import { Moon, Sun } from 'lucide-react';
import logo from 'figma:asset/15afd7401eca5cff1d86e0a226d9ff25fdc5283b.png';

interface NavbarProps {
  onOpenDashboard: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ onOpenDashboard, isDarkMode, onToggleTheme }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-800/50 border-b border-transparent dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="HealWave Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl text-gray-900 dark:text-white transition-colors">HealWave</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#how-it-works" className="text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                How It Works
              </a>
              <a href="#features" className="text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                Features
              </a>
              <a href="#faq" className="text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-gray-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={onToggleTheme}
              className="p-2.5 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button 
              onClick={onOpenDashboard}
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-indigo-500 text-white rounded-full hover:bg-indigo-700 dark:hover:from-cyan-600 dark:hover:to-indigo-600 transition-all shadow-lg dark:shadow-cyan-500/30"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}