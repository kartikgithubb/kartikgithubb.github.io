import React, { useEffect, useState } from 'react';

const MathBackground: React.FC = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    content: string;
    x: number;
    y: number;
    animationDelay: number;
    size: number;
  }>>([]);

  const mathSymbols = [
    '∑', '∆', '∞', '≈', '≤', '≥', '∫', '∂', '√', '±', 'π', 'α', 'β', 'γ', 'θ', 'λ', 'μ', 'σ', 'φ', 'ψ',
    '2x + 3y = 15', 'f(x) = x²', 'y = mx + b', 'a² + b² = c²', 'lim x→∞', 'dx/dt', '∮', '∇', '∃', '∀',
    '📊', '📈', '📉', '🔢', '📋', '📐', '🧮', '⚡', '🎯', '💡', '🔍', '⚙️', '🚀', '💎', '🌟',
    'UX/UI', 'CSS', 'HTML', 'JS', 'API', 'SQL', 'AI', 'ML', 'IoT', 'CRM', 'KPI', 'ROI',
    '{...}', '[0,1]', '<div>', '</>', 'const', 'var', 'let', '=>', '&&', '||', '!==', '===',
    '01010', '11001', '10110', '00111', '11010', '01101', '10011', '11100'
  ];

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 50; i++) {
        newElements.push({
          id: i,
          content: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          animationDelay: Math.random() * 10,
          size: Math.random() * 0.5 + 0.5
        });
      }
      setElements(newElements);
    };

    generateElements();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900">
        {elements.map((element) => (
          <div
            key={element.id}
            className="absolute text-white opacity-5 select-none animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}rem`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: '15s',
              animationDirection: 'reverse',
              transform: 'translateZ(0)',
            }}
          >
            {element.content}
          </div>
        ))}
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="animate-pulse">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Mathematical formulas scrolling */}
      <div className="absolute top-1/4 left-0 w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-white opacity-5 text-sm font-mono">
          ∫f(x)dx = F(x) + C &nbsp;&nbsp;&nbsp; lim(h→0) [f(x+h) - f(x)]/h &nbsp;&nbsp;&nbsp; ∑(i=1 to n) xi = x1 + x2 + ... + xn &nbsp;&nbsp;&nbsp; 
          ∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z) &nbsp;&nbsp;&nbsp; E = mc² &nbsp;&nbsp;&nbsp; F = ma &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute border border-white opacity-5 animate-float"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MathBackground;