import React from 'react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeScreen, onNavigate }) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background-dark">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between border-b border-[#232f48] bg-[#111722] px-6 py-3 z-20">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-white cursor-pointer" onClick={() => onNavigate(Screen.Stream)}>
            <div className={`size-8 flex items-center justify-center rounded-lg ${activeScreen === Screen.Library || activeScreen === Screen.Detail ? 'bg-primary-DEFAULT/20 text-primary-DEFAULT' : 'bg-primary-blue/20 text-primary-blue'}`}>
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-tight">D1 Project: Alpha Launch</h2>
          </div>
          {/* Global Search */}
          <div className="hidden md:flex relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-secondary">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input className="block w-64 rounded-lg border-none bg-[#232f48] py-2 pl-10 pr-3 text-sm text-white placeholder-text-secondary focus:ring-2 focus:ring-primary-blue/50 transition-all" placeholder="Search workspace..." type="text"/>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <kbd className="inline-flex items-center border border-[#3b4b68] rounded px-1.5 font-sans text-xs text-text-secondary">⌘K</kbd>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-text-secondary hover:text-white hover:bg-[#232f48] rounded-lg transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#111722]"></span>
          </button>
          <div className="h-6 w-px bg-[#232f48]"></div>
          <div className="relative size-8 rounded-full bg-cover bg-center border border-[#232f48]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfrBjJ7p-2ptW8hj8Uy7mS9P7aZutzz_kKrxZ9UUtmgSFjMTjyFELQLLTgQYy9XlGIvyEnGY86oC2knG5mzR4lTYsfXnl7_-4X0UIR_K8LLbGFSApr1xqSYJgFtlRNlH-hFbXaCyfMAHUNMH6FdxxRp3D584rzbIHwp2Jx7KHabJXc5RK0zkG37Kqf1m8zPoDQHQAhc18d0ytK32-R_G6SPGMFGV80FujsbA8VoYbVEatEszL71ExmCyNhJt_zr-To5X5dM8E5G9AR')" }}>
             <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-green-500 border-2 border-[#111722]"></span>
          </div>
        </div>
      </header>
      
      {/* Main Content Area (With Tabs) */}
      <div className="flex flex-1 overflow-hidden flex-col">
         {/* Top Tabs */}
         <div className="border-b border-[#232f48] bg-[#111722] px-6 pt-2">
           <div className="flex gap-8 max-w-[1400px] mx-auto w-full">
             <button 
               onClick={() => onNavigate(Screen.Chat)}
               className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 group transition-all ${activeScreen === Screen.Chat ? 'border-primary-blue text-white' : 'border-transparent text-text-secondary hover:text-white'}`}>
               <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat_bubble_outline</span>
               <p className="text-sm font-bold tracking-[0.015em]">Chats</p>
             </button>
             <button 
               onClick={() => onNavigate(Screen.Stream)}
               className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 group transition-all ${activeScreen === Screen.Stream ? 'border-primary-blue text-white' : 'border-transparent text-text-secondary hover:text-white'}`}>
               <span className="material-symbols-outlined group-hover:scale-110 transition-transform">folder_open</span>
               <p className="text-sm font-bold tracking-[0.015em]">Files</p>
             </button>
             <button 
               onClick={() => onNavigate(Screen.Library)}
               className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 group transition-all ${activeScreen === Screen.Library || activeScreen === Screen.Detail ? 'border-primary-DEFAULT text-white' : 'border-transparent text-text-secondary hover:text-white'}`}>
               <span className={`material-symbols-outlined ${activeScreen === Screen.Library || activeScreen === Screen.Detail ? 'text-primary-DEFAULT' : ''}`} style={{ fontVariationSettings: "'FILL' 1" }}>library_books</span>
               <p className={`${activeScreen === Screen.Library || activeScreen === Screen.Detail ? 'text-white' : ''} text-sm font-bold tracking-[0.015em]`}>Deep Library</p>
             </button>
           </div>
         </div>

         {/* Screen Content */}
         {children}
      </div>
    </div>
  );
};