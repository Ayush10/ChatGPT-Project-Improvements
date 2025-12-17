import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  rightElement?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon,
  rightElement,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label className="text-white text-sm font-medium ml-1">{label}</label>}
      <div className="relative flex items-center group">
        {icon && (
          <div className="absolute left-3 text-text-secondary group-focus-within:text-primary-DEFAULT transition-colors">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>
        )}
        <input 
          className={`
            w-full rounded-xl bg-[#0f1d16] border border-border-green 
            text-white placeholder-text-secondary/70 
            focus:ring-1 focus:ring-primary-DEFAULT/30 focus:border-primary-DEFAULT 
            transition-all outline-none
            h-12 ${icon ? 'pl-10' : 'pl-4'} ${rightElement ? 'pr-12' : 'pr-4'}
          `}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
      {error && <span className="text-red-400 text-xs ml-1">{error}</span>}
    </div>
  );
};