import React from 'react';

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export const SaveModal: React.FC<SaveModalProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-[580px] flex flex-col bg-[#13231a] rounded-2xl border border-border-green shadow-2xl overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-DEFAULT to-transparent opacity-50"></div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-green/50">
          <h3 className="text-white tracking-tight text-xl font-bold leading-tight">Save to Deep Library</h3>
          <button onClick={onClose} className="group p-2 rounded-lg hover:bg-white/5 transition-colors text-text-secondary hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-6">
          
          {/* Artifact Title */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium ml-1">Artifact Title</label>
            <div className="flex w-full items-center rounded-xl bg-[#0f1d16] border border-border-green focus-within:border-primary-DEFAULT focus-within:ring-1 focus-within:ring-primary-DEFAULT/30 transition-all">
              <input className="flex-1 bg-transparent border-none text-white focus:ring-0 placeholder-text-secondary px-4 py-3.5 h-12 text-base" defaultValue="Q4 Risk Summary v3" />
              <div className="flex items-center justify-center pr-4 pl-2 border-l border-border-green/30 h-8 my-2">
                <div className="flex items-center gap-1.5 text-primary-DEFAULT bg-primary-DEFAULT/10 px-2 py-0.5 rounded text-xs font-medium select-none">
                  <span className="material-symbols-outlined text-[16px] filled" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <span>AI Suggestion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-white text-sm font-medium">Tags</label>
              <span className="text-xs text-primary-DEFAULT font-medium cursor-pointer hover:underline">Auto-tagging active</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 w-full min-h-[52px] rounded-xl bg-[#0f1d16] border border-border-green p-2 focus-within:border-primary-DEFAULT focus-within:ring-1 focus-within:ring-primary-DEFAULT/30">
              
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-[#244732] pl-2.5 pr-1.5 border border-transparent">
                <span className="material-symbols-outlined text-primary-DEFAULT text-[18px]">bolt</span>
                <p className="text-white text-sm font-medium">Risk</p>
                <button className="text-text-secondary hover:text-white rounded-full p-0.5">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>

              <div className="flex h-8 shrink-0 items-center justify-center gap-x-1.5 rounded-lg bg-[#244732] pl-2.5 pr-1.5 border border-transparent">
                <span className="material-symbols-outlined text-primary-DEFAULT text-[18px]">calendar_today</span>
                <p className="text-white text-sm font-medium">Q4</p>
                <button className="text-text-secondary hover:text-white rounded-full p-0.5">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              </div>

              <input className="flex-1 min-w-[120px] bg-transparent border-none text-white focus:ring-0 placeholder-text-secondary/70 h-8 text-sm px-2" placeholder="Add a tag..." />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-1">
              <p className="text-text-secondary text-xs font-medium py-1.5 mr-1">Suggestions:</p>
              {['Financial', 'AI Analysis', 'Summary'].map((tag) => (
                <button key={tag} className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-dashed border-border-green text-text-secondary hover:text-white hover:border-primary-DEFAULT hover:bg-primary-DEFAULT/5 transition-all text-xs font-medium group">
                  <span className="material-symbols-outlined text-[14px] text-primary-DEFAULT group-hover:scale-110 transition-transform">add</span>
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-medium ml-1">Notes <span className="text-text-secondary font-normal">(Optional)</span></label>
            <textarea className="w-full h-24 rounded-xl bg-[#0f1d16] border border-border-green text-white placeholder-text-secondary/70 p-4 focus:outline-0 focus:border-primary-DEFAULT focus:ring-1 focus:ring-primary-DEFAULT/30 resize-none text-sm leading-relaxed" placeholder="Add context regarding this artifact..."></textarea>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-5 gap-3 border-t border-border-green/50 bg-[#0f1d16]/50">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl text-white text-sm font-medium hover:bg-white/5 transition-colors">
            Cancel
          </button>
          <button onClick={onSave} className="relative overflow-hidden px-6 py-2.5 rounded-xl bg-primary-DEFAULT text-[#0b1610] text-sm font-bold shadow-glow-green hover:bg-[#2bc469] transition-all flex items-center justify-center gap-2 group">
            <span className="relative z-10">Save to Library</span>
            <span className="material-symbols-outlined text-[18px] relative z-10 transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};