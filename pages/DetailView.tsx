import React from 'react';
import { ARTIFACTS } from '../constants';

interface DetailViewProps {
  artifactId: string;
  onBack: () => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ artifactId, onBack }) => {
  const artifact = ARTIFACTS.find(a => a.id === artifactId) || ARTIFACTS[0];

  return (
    <div className="flex flex-1 overflow-hidden p-4 lg:p-6 gap-4 lg:gap-6 relative bg-[#112117]">
      {/* Viewer */}
      <section className="flex flex-col flex-[2] bg-[#182E21] rounded-[24px] overflow-hidden border border-[#244732] shadow-2xl relative group">
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#244732] bg-[#1F382A]/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
             <button onClick={onBack} className="text-text-secondary hover:text-white flex items-center"><span className="material-symbols-outlined">arrow_back</span></button>
             <div className="h-4 w-px bg-[#244732]"></div>
             <span className="text-text-secondary text-sm font-medium">Page 1 of 12</span>
          </div>
          <div className="flex items-center gap-3">
             <button className="text-text-secondary hover:text-white"><span className="material-symbols-outlined text-[20px]">fullscreen</span></button>
          </div>
        </div>
        
        {/* Fake PDF Content */}
        <div className="flex-1 overflow-y-auto bg-[#0E1511] p-8 flex justify-center custom-scrollbar">
           <div className="w-full max-w-[800px] bg-[#1a1a1a] min-h-[1200px] shadow-lg p-12 text-gray-300 relative rounded-sm">
              <div className="h-4 w-1/3 bg-gray-700 mb-8 rounded"></div>
              <div className="space-y-4 mb-12">
                <div className="h-3 w-full bg-gray-800 rounded"></div>
                <div className="h-3 w-full bg-gray-800 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-800 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-6 mb-12">
                 <div className="h-40 bg-gray-800 rounded border border-gray-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5"></div>
                    <span className="material-symbols-outlined text-gray-600 text-[48px]">bar_chart</span>
                 </div>
                 <div className="space-y-3">
                    <div className="h-3 w-full bg-gray-800 rounded"></div>
                    <div className="h-3 w-4/5 bg-gray-800 rounded"></div>
                    <div className="h-3 w-full bg-gray-800 rounded"></div>
                 </div>
              </div>
               <div className="space-y-4">
                <div className="h-3 w-full bg-gray-800 rounded"></div>
                <div className="h-3 w-full bg-gray-800 rounded"></div>
                <div className="h-3 w-4/5 bg-gray-800 rounded"></div>
              </div>
           </div>
        </div>
      </section>

      {/* Sidebar Info */}
      <aside className="hidden lg:flex flex-col w-[400px] shrink-0 bg-[#182E21] rounded-[24px] overflow-hidden border border-[#244732] shadow-xl">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
          
          <div className="space-y-3">
             <div className="flex items-start justify-between gap-4">
               <h1 className="text-2xl font-bold text-white leading-tight">{artifact.title}</h1>
               <span className="shrink-0 inline-flex items-center justify-center size-10 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                 <span className="material-symbols-outlined">picture_as_pdf</span>
               </span>
             </div>
             <div className="flex flex-wrap gap-2 text-sm text-text-secondary">
               <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> 2 days ago</span>
               <span>•</span>
               <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">person</span> {artifact.author}</span>
             </div>
          </div>

          <div className="space-y-2">
             <div className="flex justify-between items-end">
               <span className="text-sm font-medium text-white flex items-center gap-2">Source Coverage</span>
               <span className="text-sm font-bold text-primary-DEFAULT">94%</span>
             </div>
             <div className="h-2 w-full bg-[#244732] rounded-full overflow-hidden">
               <div className="h-full bg-primary-DEFAULT rounded-full" style={{ width: '94%' }}></div>
             </div>
             <p className="text-xs text-text-muted">High confidence based on verified internal sources.</p>
          </div>

          <div className="bg-gradient-to-b from-[#1F382A] to-[#182E21] border border-[#244732] rounded-2xl p-4 space-y-3 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10">
               <span className="material-symbols-outlined text-[64px] text-primary-DEFAULT">auto_awesome</span>
             </div>
             <h3 className="text-sm font-bold text-primary-DEFAULT flex items-center gap-2">
               <span className="material-symbols-outlined text-[18px]">auto_awesome</span> Key AI Insights
             </h3>
             <ul className="space-y-3">
               {['Revenue projected to stabilize by mid-Q4 despite supply chain volatility.', 
                 'Primary risk identified in the APAC region regarding regulatory compliance updates.',
                 'Cost reduction initiatives are 15% ahead of schedule.'].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary-DEFAULT shrink-0"></span>
                    <p className="text-sm text-gray-200 leading-relaxed">{item}</p>
                  </li>
               ))}
             </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Suggested Actions</h3>
            <div className="flex flex-wrap gap-2">
               <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F382A] border border-[#244732] hover:border-primary-DEFAULT/50 hover:bg-[#254231] transition-all text-sm text-white">
                 <span className="material-symbols-outlined text-[18px] text-primary-DEFAULT">summarize</span> Summarize
               </button>
               <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F382A] border border-[#244732] hover:border-primary-DEFAULT/50 hover:bg-[#254231] transition-all text-sm text-white">
                 <span className="material-symbols-outlined text-[18px] text-primary-DEFAULT">quiz</span> Questions
               </button>
            </div>
          </div>

        </div>

        <div className="p-4 border-t border-[#244732] bg-[#14261B] backdrop-blur-md shrink-0">
          <div className="flex items-center justify-between gap-2">
             <button className="flex flex-1 items-center justify-center gap-2 h-10 px-4 rounded-full bg-[#1F382A] hover:bg-white/10 transition-colors text-white text-sm font-bold border border-[#244732]">
               <span className="material-symbols-outlined text-[18px]">edit</span> Edit
             </button>
             <button className="size-10 flex items-center justify-center rounded-full bg-[#1F382A] hover:bg-white/10 transition-colors text-primary-DEFAULT border border-[#244732]">
               <span className="material-symbols-outlined text-[20px] fill-current">keep</span>
             </button>
          </div>
        </div>
      </aside>
    </div>
  );
};