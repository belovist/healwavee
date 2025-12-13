import { Users, Heart, MessageCircle, ThumbsUp, Shield } from 'lucide-react';

interface CommunitySupportProps {
  isDarkMode?: boolean;
}

export function CommunitySupport({ isDarkMode = true }: CommunitySupportProps) {
  const posts = [
    {
      author: 'Anonymous User',
      time: '2 hours ago',
      tags: ['Anxiety', 'Work Stress'],
      content: 'Has anyone else noticed their anxiety gets worse during big presentations? I have one coming up and I\'m already feeling the heart rate spikes.',
      replies: 12,
      likes: 24,
      avatar: '😊'
    },
    {
      author: 'Anonymous User',
      time: '5 hours ago',
      tags: ['College Stress', 'Sleep'],
      content: 'Just wanted to share that I finally got 8 hours of sleep last night for the first time in weeks. My anxiety today has been so much more manageable. Don\'t underestimate rest!',
      replies: 8,
      likes: 42,
      avatar: '🌟'
    },
    {
      author: 'Anonymous User',
      time: '1 day ago',
      tags: ['Burnout', 'Self-Care'],
      content: 'Reminder: Taking breaks is not being lazy. I took a full day off yesterday with no guilt, and I feel recharged. You deserve rest too.',
      replies: 15,
      likes: 67,
      avatar: '💙'
    },
    {
      author: 'Anonymous User',
      time: '1 day ago',
      tags: ['Anxiety', 'Progress'],
      content: 'Small win: I used the 5-4-3-2-1 grounding technique during a panic attack and it actually helped! Still shaking a bit but I\'m proud of myself for trying.',
      replies: 19,
      likes: 89,
      avatar: '🎯'
    },
    {
      author: 'Anonymous User',
      time: '2 days ago',
      tags: ['Breathing', 'Mindfulness'],
      content: 'The breathing exercises on here have been life-changing. I do them every morning now and my baseline anxiety has dropped noticeably.',
      replies: 6,
      likes: 31,
      avatar: '🌿'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-3xl mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Community Support
        </h1>
        <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
          Connect with others who understand what you're going through
        </p>
      </div>

      {/* Community Guidelines */}
      <div className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
        isDarkMode 
          ? 'bg-gradient-to-br from-cyan-900/20 via-slate-900/40 to-slate-900/40 border-cyan-500/30' 
          : 'bg-gradient-to-br from-cyan-50 to-white border-cyan-200'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
            isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-200'
          }`}>
            <Shield className={`w-6 h-6 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`} />
          </div>
          <div>
            <h3 className={`text-lg mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
              Safe & Supportive Space
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              This is an anonymous, moderated community. Be kind, respectful, and supportive. 
              Share your experiences, but avoid giving medical advice. If you're in crisis, please use the Emergency Mode tab.
            </p>
          </div>
        </div>
      </div>

      {/* New Post Button */}
      <button className={`w-full backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-all hover:scale-102 text-left ${
        isDarkMode 
          ? 'bg-slate-900/40 border-slate-800/50 hover:border-slate-700' 
          : 'bg-white border-gray-200 hover:border-gray-300'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Share your thoughts or ask for support...
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Your post will be anonymous
            </p>
          </div>
        </div>
      </button>

      {/* Community Posts */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className={`backdrop-blur-xl rounded-3xl border p-6 shadow-2xl transition-colors ${
            isDarkMode 
              ? 'bg-slate-900/40 border-slate-800/50' 
              : 'bg-white border-gray-200'
          }`}>
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-xl">
                {post.avatar}
              </div>
              <div className="flex-1">
                <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                  {post.author}
                </p>
                <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
                  {post.time}
                </p>
              </div>
              <div className="flex gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-3 py-1 rounded-full text-xs ${
                    isDarkMode 
                      ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                      : 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Content */}
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
              {post.content}
            </p>

            {/* Post Actions */}
            <div className={`flex items-center gap-4 pt-4 border-t ${
              isDarkMode ? 'border-slate-700/50' : 'border-gray-200'
            }`}>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isDarkMode 
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-pink-400' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-pink-600'
              }`}>
                <Heart className="w-4 h-4" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                isDarkMode 
                  ? 'hover:bg-slate-800 text-slate-400 hover:text-cyan-400' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-cyan-600'
              }`}>
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{post.replies} replies</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <button className={`w-full py-4 rounded-full border transition-all ${
        isDarkMode 
          ? 'bg-slate-800/30 border-slate-700/50 text-slate-300 hover:bg-slate-800/50' 
          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
      }`}>
        Load More Posts
      </button>
    </div>
  );
}
