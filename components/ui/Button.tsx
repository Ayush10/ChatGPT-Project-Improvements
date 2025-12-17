import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
  
  const variants = {
    primary: 'bg-primary-DEFAULT text-[#0b1610] shadow-glow-green hover:bg-[#2bc469]',
    secondary: 'bg-primary-blue text-white shadow-glow-blue hover:bg-blue-600',
    outline: 'border border-[#244732] bg-transparent text-text-secondary hover:border-primary-DEFAULT hover:text-primary-DEFAULT',
    ghost: 'bg-transparent text-text-secondary hover:bg-white/5 hover:text-white',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} group`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={`material-symbols-outlined ${size === 'sm' ? 'text-[16px]' : 'text-[20px]'} mr-2 transition-transform group-hover:scale-110`}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={`material-symbols-outlined ${size === 'sm' ? 'text-[16px]' : 'text-[18px]'} ml-2 transition-transform group-hover:translate-x-1`}>{icon}</span>
      )}
    </button>
  );
};