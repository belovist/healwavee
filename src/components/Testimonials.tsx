import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Vineet Kumar",
      role: "Marketing Manager",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=VK&backgroundColor=6366f1",
      text: "Helped me predict anxiety before it hit. The heart-rate insights are incredible - I can now recognize my patterns and take action before anxiety becomes overwhelming.",
      rating: 5,
    },
    {
      name: "James Peterson",
      role: "Software Developer",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=JP&backgroundColor=8b5cf6",
      text: "The heart-rate insights changed my life. I never realized how my work schedule was affecting my anxiety until this app showed me the patterns.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "Teacher",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=EC&backgroundColor=ec4899",
      text: "Finally, a tool that understands ME. The personalized recommendations actually work because they're based on my own data and what helps me specifically.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 transition-colors">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 transition-colors">
            Real stories from people managing their anxiety better
          </p>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-transparent dark:border-slate-700 transition-colors">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Avatar */}
              <img 
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full border-4 border-indigo-100"
              />
              
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-xl text-gray-700 dark:text-slate-300 max-w-2xl transition-colors">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Name and role */}
              <div>
                <p className="text-lg text-gray-900 dark:text-white transition-colors">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600 dark:text-slate-400 transition-colors">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-50 dark:hover:bg-slate-700 transition-colors border border-transparent dark:border-slate-700"
          >
            <ChevronRight className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-indigo-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}