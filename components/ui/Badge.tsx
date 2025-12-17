import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline';
  icon?: string;
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  icon,
  className = '',
  onClick
}) => {
  const variants = {
    primary: 'bg-primary-DEFAULT/10 text-primary-DEFAULT border-primary-DEFAULT/20',
    secondary: 'bg-primary-blue/10 text-primary-blue border-primary-blue/20',
    success: 'bg-green-500/10 text-green-400 border-green-500/20',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    danger: 'bg-red-500/10 text-red-400 border-red-500/20',
    outline: 'bg-transparent text-text-secondary border-text-secondary/30'
  };

  const baseStyles = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium border uppercase tracking-wider select-none';
  const clickableStyles = onClick ? 'cursor-pointer hover:bg-opacity-20 transition-colors' : '';

  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="material-symbols-outlined text-[14px]">{icon}</span>}
      {children}
    </span>
  );
};