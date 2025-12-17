import React, { useState } from 'react';
import { SaveModal } from '../components/SaveModal';

export const ChatView: React.FC = () => {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  const handleSave = () => {
    setIsSaveModalOpen(false);
    setShowSaveToast(true);
    setTimeout(() => setShowSaveToast(false), 3000);
  };

  return (
    <div className="flex flex-col flex-1 relative bg-[#102220] h-full overflow-hidden">
      {/* Toast */}
      {showSaveToast && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top-4 duration-300">
           <div className="bg-[#1a3224] border border-primary-DEFAULT/40 rounded-xl shadow-lg p-4 flex items-start gap-3 relative overflow-hidden">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-DEFAULT"></div>
             <div className="flex-shrink-0 mt-0.5 text-primary-DEFAULT"><span className="material-symbols-outlined filled" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span></div>
             <div>
                <p className="text-sm font-semibold text-white leading-tight mb-1">Saved to Deep Library</p>
                <p className="text-xs text-text-secondary">Q4 Risk Summary v3</p>
             </div>
           </div>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-32">
           
           {/* Header */}
           <div className="flex items-center justify-between pb-4 border-b border-[#234845]/30">
              <div>
                 <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-1">Risk Assessment Brainstorm</h1>
                 <p className="text-primary-DEFAULT/80 text-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    Private Thread • Started today at 9:41 AM
                 </p>
              </div>
              <button className="size-8 flex items-center justify-center rounded hover:bg-white/5 text-text-secondary transition-colors"><span className="material-symbols-outlined text-xl">more_horiz</span></button>
           </div>

           {/* User Message */}
           <div className="flex gap-4 flex-row-reverse group">
              <div className="size-10 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 mt-1">
                 <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEDWvrR6Pge1sPHI5yxVCoeNDYbWNS5-E0kMr4KwmK2gDY3EV3tYj2xsXvz3-Eb0377RWjNHqIM0feCb639AmSdtiINtPXq-GiOs2i1jpEN9l0rKSE27uVJak3E8CkPMiaa2Aq7aeXAur7xxzv7412FQTFkq5X1tpRnXbptXWmOOhnsHUMvlvXgk4ki_c5kNlP5vLuA9FNRLbH7JaeuX6pbF_XLZw7Tkp3j22m9kSorjbEXGhurIcbnFoOrXMS6rhE8tahVgk6AC7N" alt="User" />
              </div>
              <div className="flex flex-col items-end gap-1 max-w-[80%]">
                 <div className="bg-[#2A4D4A] text-white px-5 py-3 rounded-2xl rounded-tr-sm border border-[#3A5D5A]">
                    <p className="text-sm leading-relaxed">Can you generate a risk assessment for the Alpha Launch based on our current infrastructure and budget constraints?</p>
                 </div>
                 <span className="text-[11px] text-[#5a7d7a] font-medium mr-1">9:42 AM</span>
              </div>
           </div>

           {/* Assistant Message */}
           <div className="flex gap-4 relative group/message">
              <div className="size-10 rounded-lg bg-gradient-to-br from-primary-DEFAULT to-blue-600 flex items-center justify-center shrink-0 shadow-lg mt-1">
                 <span className="material-symbols-outlined text-[#112221] text-xl">smart_toy</span>
              </div>
              
              <div className="flex flex-col gap-2 max-w-[85%] w-full">
                 <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-sm font-bold">D1 Assistant</span>
                    <span className="bg-primary-DEFAULT/20 text-primary-DEFAULT text-[10px] px-1.5 py-0.5 rounded font-mono font-medium">AI MODEL 4.0</span>
                 </div>

                 <div className="bg-[#1A2C2A] border border-[#234845] rounded-xl p-6 shadow-xl relative overflow-hidden transition-all hover:border-primary-DEFAULT/30">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-DEFAULT to-transparent opacity-50"></div>
                    
                    {/* Hover Toolbar */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover/message:opacity-100 transition-opacity duration-200 z-10 bg-[#112221]/90 backdrop-blur rounded-lg p-1 border border-[#234845] shadow-lg">
                       <button onClick={() => setIsSaveModalOpen(true)} className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-primary-DEFAULT/10 hover:bg-primary-DEFAULT/20 text-primary-DEFAULT transition-colors text-xs font-bold border border-primary-DEFAULT/20">
                          <span className="material-symbols-outlined text-[16px] fill-current">bookmark</span> Save to Library
                       </button>
                    </div>

                    <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                       <div>
                          <h3 className="text-white font-semibold text-base mb-2 flex items-center gap-2">
                             <span className="size-1.5 rounded-full bg-primary-DEFAULT inline-block"></span> Executive Summary
                          </h3>
                          <p className="pl-3.5 border-l border-[#234845]/50">
                             Analysis of alpha launch vectors indicates a <span className="text-white font-medium">Moderate to High</span> risk profile. While the core product is stable, infrastructure scaling and budget overruns present the most significant threats.
                          </p>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-[#112221]/50 p-4 rounded-lg border border-[#234845]/50">
                             <h4 className="text-white font-medium mb-2 text-xs uppercase tracking-wider text-red-400">Operational Risks</h4>
                             <ul className="list-disc list-inside space-y-1 marker:text-red-400/50">
                                <li>Server load balancing during peak times</li>
                                <li>API latency spikes (&gt;200ms)</li>
                             </ul>
                          </div>
                          <div className="bg-[#112221]/50 p-4 rounded-lg border border-[#234845]/50">
                             <h4 className="text-white font-medium mb-2 text-xs uppercase tracking-wider text-orange-400">Financial Exposure</h4>
                             <ul className="list-disc list-inside space-y-1 marker:text-orange-400/50">
                                <li>Cloud compute overruns (est. +15%)</li>
                                <li>Unoptimized vector search queries</li>
                             </ul>
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-2 pl-1 mt-1 opacity-0 group-hover/message:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="material-symbols-outlined text-[#5a7d7a] text-sm">info</span>
                    <p className="text-xs text-[#5a7d7a]">Save key outputs to Deep Library so you can find them later.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pt-2 bg-gradient-to-t from-[#112221] via-[#112221] to-transparent z-20">
         <div className="max-w-4xl mx-auto relative">
            <div className="absolute bottom-full mb-2 left-0 flex gap-2">
               <button className="bg-[#1A2C2A] border border-[#234845] hover:border-primary-DEFAULT/50 text-xs text-primary-DEFAULT/80 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span> Brainstorm
               </button>
               <button className="bg-[#1A2C2A] border border-[#234845] hover:border-primary-DEFAULT/50 text-xs text-primary-DEFAULT/80 px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-sm">code</span> Code Review
               </button>
            </div>
            <div className="relative bg-[#1A2C2A] border border-[#234845] rounded-xl shadow-lg focus-within:ring-1 focus-within:ring-primary-DEFAULT/50 focus-within:border-primary-DEFAULT/50 transition-all">
               <textarea className="w-full bg-transparent border-none text-white placeholder-[#5a7d7a] focus:ring-0 p-4 pr-12 resize-none min-h-[56px]" placeholder="Send a message to D1 Project..." rows={1}></textarea>
               <div className="absolute right-2 bottom-2 p-1">
                  <button className="p-2 bg-primary-DEFAULT hover:bg-[#0fd6c5] text-[#112221] rounded-lg transition-colors"><span className="material-symbols-outlined text-[20px] block">arrow_upward</span></button>
               </div>
            </div>
         </div>
      </div>

      <SaveModal isOpen={isSaveModalOpen} onClose={() => setIsSaveModalOpen(false)} onSave={handleSave} />
    </div>
  );
};