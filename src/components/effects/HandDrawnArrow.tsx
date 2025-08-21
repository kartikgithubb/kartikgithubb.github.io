import React from 'react';

interface HandDrawnArrowProps {
  className?: string;
}

const HandDrawnArrow = ({ className }: HandDrawnArrowProps) => {
  return (
    <svg
      className={`inline-block ml-2 ${className}`}
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8C6.5 7.5 11 7 15.5 8.5C17 9 18.5 9.5 20 8.5M20 8.5L17 6M20 8.5L17.5 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-draw"
      />
      <style>{`
        .animate-draw {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: draw 2s ease-in-out infinite;
        }
        
        @keyframes draw {
          0% { stroke-dashoffset: 30; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
      `}</style>
    </svg>
  );
};

export default HandDrawnArrow;