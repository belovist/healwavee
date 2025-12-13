import { Mic, Send } from 'lucide-react';
import { useState } from 'react';
import catMascot from 'figma:asset/15afd7401eca5cff1d86e0a226d9ff25fdc5283b.png';

interface ChatPanelProps {
  isDarkMode?: boolean;
  onNavigate?: (tab: string) => void;
}

interface Message {
  type: 'user' | 'ai';
  content: string;
  suggestions?: string[];
}

export function ChatPanel({ isDarkMode = true, onNavigate }: ChatPanelProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: "Good afternoon! I've been monitoring your heart rate. I noticed a slight spike around 2 PM. Would you like me to analyze what might have caused it?"
    },
    {
      type: 'user',
      content: "Yes, please! I'm not sure what triggered it."
    },
    {
      type: 'ai',
      content: "Based on your patterns, I found that you skipped lunch today. Your anxiety levels tend to rise when you delay meals beyond 1:30 PM.",
      suggestions: [
        "Set a reminder to eat lunch by 1 PM",
        "Keep healthy snacks nearby for busy days"
      ]
    }
  ]);

  const quickPrompts = [
    "Why am I feeling anxious?",
    "Analyze my today's heart-rate pattern",
    "Help me calm down",
    "What triggered my spike earlier?",
    "Give me a grounding exercise",
  ];

  const getAIResponse = (userMessage: string): Message => {
    const lowerMsg = userMessage.toLowerCase();
    
    if (lowerMsg.includes('anxious') || lowerMsg.includes('why')) {
      return {
        type: 'ai',
        content: "I've analyzed your recent data. Your anxiety appears linked to irregular sleep patterns and skipped meals. Your heart rate variability shows stress markers around 2-3 PM daily.",
        suggestions: [
          "Try eating lunch by 12:30 PM",
          "Set a consistent sleep schedule",
          "Take short breaks every 90 minutes"
        ]
      };
    }
    
    if (lowerMsg.includes('heart') || lowerMsg.includes('pattern')) {
      return {
        type: 'ai',
        content: "Today's heart rate pattern shows 3 notable spikes: 9:45 AM (meeting prep), 2:10 PM (post-lunch dip), and 8:30 PM (evening worry). Your average HR is 72 bpm, which is within healthy range.",
        suggestions: [
          "Review detailed heart rate chart",
          "Identify trigger moments"
        ]
      };
    }
    
    if (lowerMsg.includes('calm') || lowerMsg.includes('help')) {
      return {
        type: 'ai',
        content: "I can help you calm down right now. Would you like to try a quick breathing exercise or grounding technique?",
        suggestions: [
          "Start 3-minute breathing session",
          "Try 5-4-3-2-1 grounding technique",
          "Listen to calming sounds"
        ]
      };
    }
    
    if (lowerMsg.includes('trigger') || lowerMsg.includes('spike')) {
      return {
        type: 'ai',
        content: "Your spike at 2:10 PM was likely caused by skipping lunch. I've noticed this pattern 4 times this week. Low blood sugar often triggers anxiety responses.",
        suggestions: [
          "Set meal reminders",
          "View trigger patterns",
          "Track food-mood connection"
        ]
      };
    }
    
    if (lowerMsg.includes('ground') || lowerMsg.includes('exercise')) {
      return {
        type: 'ai',
        content: "Here's a quick grounding exercise: Find 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. This brings you back to the present moment.",
        suggestions: [
          "Start guided grounding session",
          "Try body scan relaxation",
          "View all grounding exercises"
        ]
      };
    }
    
    return {
      type: 'ai',
      content: "I'm here to help with anxiety management, heart-rate insights, breathing exercises, and emotional support. What would you like to explore?",
      suggestions: [
        "View today's insights",
        "Check anxiety predictions",
        "Start self-care session"
      ]
    };
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const userMessage: Message = {
      type: 'user',
      content: message
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      setMessages(prev => [...prev, aiResponse]);
    }, 800);
  };

  const handleQuickPrompt = (prompt: string) => {
    const userMessage: Message = {
      type: 'user',
      content: prompt
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    setTimeout(() => {
      const aiResponse = getAIResponse(prompt);
      setMessages(prev => [...prev, aiResponse]);
      
      // Handle special navigation
      if (prompt.includes('calm down') && onNavigate) {
        setTimeout(() => {
          onNavigate('Guided Breathing');
        }, 1500);
      }
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`backdrop-blur-xl rounded-3xl border p-8 shadow-2xl transition-colors ${
      isDarkMode 
        ? 'bg-slate-900/40 border-slate-800/50' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <img 
            src={catMascot} 
            alt="HealWave Cat Mascot" 
            className="w-32 h-32 object-contain"
          />
        </div>
        <h1 className={`text-2xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Hi, I'm HealWave - Your Mental-Health Companion 👋
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          I help you understand your emotions using your heart-rate patterns.
        </p>
      </div>

      {/* Chat Messages Area */}
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
            {msg.type === 'ai' && (
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img 
                  src={catMascot} 
                  alt="HealWave" 
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className={`${msg.type === 'user' ? 'flex-1 max-w-md' : 'flex-1'} rounded-2xl ${msg.type === 'user' ? 'rounded-tr-sm' : 'rounded-tl-sm'} p-4 border ${
              msg.type === 'user'
                ? isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-500/30' 
                  : 'bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-200'
                : isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-sm ${
                msg.type === 'user'
                  ? isDarkMode ? 'text-slate-200' : 'text-gray-900'
                  : isDarkMode ? 'text-slate-300' : 'text-gray-700'
              }`}>
                {msg.content}
              </p>
              {msg.suggestions && (
                <div className="space-y-2 mt-3">
                  {msg.suggestions.map((suggestion, i) => (
                    <div key={i} className="flex items-center gap-2 text-cyan-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span>{suggestion}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {msg.type === 'user' && (
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
              }`}>
                <span className="text-sm">👤</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Prompts */}
      <div className="mb-6">
        <p className={`text-xs mb-3 ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>SUGGESTED PROMPTS</p>
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm rounded-full border transition-all ${
                isDarkMode 
                  ? 'bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 border-slate-700/50 hover:border-cyan-500/30' 
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-indigo-300'
              }`}
              onClick={() => handleQuickPrompt(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <div className={`flex items-center gap-3 rounded-2xl border p-2 focus-within:border-cyan-500/30 transition-all ${
        isDarkMode 
          ? 'bg-slate-800/50 border-slate-700/50' 
          : 'bg-gray-50 border-gray-200'
      }`}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message or ask for help..."
          className={`flex-1 bg-transparent px-3 py-2 outline-none ${
            isDarkMode 
              ? 'text-slate-300 placeholder:text-slate-500' 
              : 'text-gray-900 placeholder:text-gray-400'
          }`}
          onKeyPress={handleKeyPress}
        />
        <button className={`p-2 rounded-xl transition-colors ${
          isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-200'
        }`}>
          <Mic className={`w-5 h-5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`} />
        </button>
        <button className="p-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl hover:from-cyan-600 hover:to-indigo-600 transition-all shadow-lg shadow-cyan-500/30" onClick={handleSendMessage}>
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}