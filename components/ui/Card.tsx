import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  onClick
}) => {
  const baseStyles = 'bg-[#1a2230] border border-[#232f48] rounded-2xl overflow-hidden';
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-300 hover:border-primary-DEFAULT/40 hover:shadow-lg hover:shadow-primary-DEFAULT/5 cursor-pointer' 
    : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-[#232f48] ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);