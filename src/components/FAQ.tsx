import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does heart-rate detection work?",
      answer: "HealWave connects to your wearable device (Apple Watch, Fitbit, or other compatible devices) and continuously monitors your heart rate throughout the day. Using advanced AI algorithms, we analyze patterns and detect anomalies that may indicate rising anxiety levels, giving you early warnings before you consciously feel anxious.",
    },
    {
      question: "How accurate are the predictions?",
      answer: "Our AI models are trained on millions of data points and achieve 85-90% accuracy in predicting anxiety episodes. The accuracy improves over time as the app learns your unique patterns. However, this tool is designed to complement, not replace, professional mental health care.",
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) to protect your data. All health information is stored securely and is never shared with third parties. You have complete control over your data and can delete it at any time. We're HIPAA compliant and take your privacy very seriously.",
    },
    {
      question: "What wearables are compatible?",
      answer: "HealWave works with most popular wearables including Apple Watch, Fitbit, Garmin, Samsung Galaxy Watch, and any device that tracks heart rate and syncs with Apple Health or Google Fit.",
    },
    {
      question: "Can I use this without a therapist?",
      answer: "While HealWave is a powerful tool for managing anxiety, it's designed to complement professional care, not replace it. We recommend using the app alongside therapy or counseling for the best results. If you're experiencing severe anxiety, please consult a mental health professional.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 transition-colors">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors">
            Everything you need to know about HealWave
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-indigo-300 dark:hover:border-cyan-500/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-indigo-50 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-lg text-gray-900 dark:text-white pr-8 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-indigo-600 dark:text-cyan-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 dark:text-slate-300 transition-colors">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}