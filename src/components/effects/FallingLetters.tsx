import React, { useEffect, useState } from 'react';

interface FallingLettersProps {
  text: string;
  className?: string;
}

const FallingLetters = ({ text, className = "" }: FallingLettersProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [letters, setLetters] = useState<Array<{ char: string; id: number; color: string }>>([]);

  // Aesthetic color palette for each letter
  const colors = [
    'from-pink-400 via-rose-300 to-pink-500',
    'from-blue-400 via-cyan-300 to-blue-500', 
    'from-purple-400 via-violet-300 to-purple-500',
    'from-green-400 via-emerald-300 to-green-500',
    'from-yellow-400 via-amber-300 to-yellow-500',
    'from-orange-400 via-orange-300 to-orange-500',
    'from-teal-400 via-teal-300 to-teal-500',
    'from-indigo-400 via-indigo-300 to-indigo-500',
    'from-red-400 via-red-300 to-red-500',
    'from-lime-400 via-lime-300 to-lime-500',
    'from-sky-400 via-sky-300 to-sky-500',
    'from-fuchsia-400 via-fuchsia-300 to-fuchsia-500'
  ];

  useEffect(() => {
    // Convert text to letters with colors
    const textLetters = text.split('').map((char, index) => ({
      char,
      id: index,
      color: colors[index % colors.length]
    }));
    setLetters(textLetters);

    // Start animation after component mounts
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <style>{`
        @keyframes fall-and-settle {
          0% {
            transform: translateY(-200px) rotate(180deg) scale(0.5);
            opacity: 0;
          }
          60% {
            transform: translateY(20px) rotate(-10deg) scale(1.1);
            opacity: 1;
          }
          80% {
            transform: translateY(-5px) rotate(5deg) scale(0.95);
          }
          100% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes gentle-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-3px) scale(1.02);
          }
          50% {
            transform: translateY(0px) scale(1);
          }
          75% {
            transform: translateY(-1px) scale(1.01);
          }
        }

        .falling-letter {
          animation: fall-and-settle 2s ease-out forwards, gentle-float 4s ease-in-out 2s infinite;
        }
      `}</style>
      
      <div className={`relative ${className}`}>
        <div className="flex flex-wrap justify-center items-center gap-1 min-h-[120px]">
          {letters.map((letter, index) => (
            <span
              key={letter.id}
              className={`
                inline-block font-bold bg-gradient-to-r ${letter.color} bg-clip-text text-transparent
                transition-all duration-1000 ease-out transform-gpu
                ${isAnimating 
                  ? 'translate-y-0 opacity-100 scale-100 rotate-0 falling-letter' 
                  : 'translate-y-[-200px] opacity-0 scale-50 rotate-12'
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: isAnimating ? `${index * 100}ms, ${2 + index * 100}ms` : undefined
              }}
            >
              {letter.char === ' ' ? '\u00A0' : letter.char}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default FallingLetters;