import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const StreamView: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto bg-[#111722] relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(to right, #232f48 1px, transparent 1px), linear-gradient(to bottom, #232f48 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      
      <div className="relative z-10 mx-auto w-full max-w-[1200px] p-6 lg:p-10">
        
        {/* Project Overview */}
        <Card className="mb-10 shadow-xl shadow-black/20">
           <div className="mb-6 flex flex-col justify-between gap-4 border-b border-[#232f48] pb-6 sm:flex-row sm:items-center px-6 pt-6">
              <div>
                 <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">Project Overview Summary</h2>
                 <p className="text-sm text-text-secondary mt-1">Status at a glance for D1 Project: Alpha Launch</p>
              </div>
              <Button variant="outline" size="sm" icon="arrow_forward" iconPosition="right">
                 View Full Project Details
              </Button>
           </div>
           
           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-6 pb-6">
              <div className="flex flex-col rounded-xl border border-[#232f48] bg-[#111722]/50 p-4">
                 <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-secondary">Project Status</p>
                 <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-xl font-bold text-white">On Track</span>
                 </div>
              </div>
              <div className="flex flex-col rounded-xl border border-[#232f48] bg-[#111722]/50 p-4">
                 <div className="mb-2 flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-secondary">Completion</p>
                    <span className="text-xs font-bold text-white">85%</span>
                 </div>
                 <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#232f48]">
                    <div className="absolute left-0 top-0 h-full w-[85%] rounded-full bg-gradient-to-r from-primary-blue to-blue-400"></div>
                 </div>
                 <p className="mt-2 text-[10px] text-text-secondary">Target: 90% by Friday</p>
              </div>
              <div className="flex flex-col rounded-xl border border-[#232f48] bg-[#111722]/50 p-4">
                 <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-secondary">Key Milestones</p>
                 <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-yellow-500 text-[20px]">flag</span>
                    <span className="text-xl font-bold text-white">3 pending</span>
                 </div>
                 <p className="mt-1 text-[10px] text-text-secondary">Next: Beta Release v0.9</p>
              </div>
              <div className="flex flex-col rounded-xl border border-[#232f48] bg-[#111722]/50 p-4">
                 <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-secondary">Team Members</p>
                 <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">8 active</span>
                    <div className="flex -space-x-2">
                       <div className="h-6 w-6 rounded-full border-2 border-[#111722] bg-gray-700"></div>
                       <div className="h-6 w-6 rounded-full border-2 border-[#111722] bg-gray-600"></div>
                       <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#111722] bg-[#232f48] text-[9px] text-white font-medium">+6</div>
                    </div>
                 </div>
              </div>
           </div>
        </Card>

        {/* Activity Stream */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
           <div>
              <div className="flex items-center gap-2 mb-2">
                 <Badge variant="secondary">Timeline View</Badge>
                 <Badge variant="outline">V2.0.4</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Activity Stream</h1>
              <p className="mt-2 text-text-secondary">Track real-time project updates, artifacts, and team movements.</p>
           </div>
           <Button variant="secondary" icon="add_task">New Task</Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
           <div className="flex-1">
              <div className="relative flex flex-col gap-6">
                 {/* Line */}
                 <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-[#232f48]"></div>
                 
                 {/* Event 1 */}
                 <div className="relative flex group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#111722] bg-[#1a2230] text-primary-blue shadow-sm z-10">
                       <span className="material-symbols-outlined text-[20px]">add_circle</span>
                    </div>
                    <Card className="ml-4 flex-1" hoverEffect>
                       <CardContent className="p-4">
                           <div className="flex items-start justify-between">
                              <div>
                                 <p className="text-sm font-medium text-white"><span className="font-bold text-white">You</span> created new artifact <span className="text-primary-blue font-semibold">'Product Launch Deck v2'</span></p>
                                 <p className="mt-1 text-xs text-text-secondary">2 min ago in <span className="text-white">Marketing Assets</span></p>
                              </div>
                           </div>
                           <div className="mt-3 flex items-center gap-3">
                              <div className="flex items-center gap-2 rounded bg-[#232f48] p-2 pr-3">
                                 <div className="flex h-8 w-8 items-center justify-center rounded bg-red-500/20 text-red-400">
                                    <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-white">Launch_Deck_v2.pdf</span>
                                    <span className="text-[10px] text-text-secondary">2.4 MB</span>
                                 </div>
                              </div>
                           </div>
                       </CardContent>
                    </Card>
                 </div>

                 {/* Event 2 */}
                 <div className="relative flex group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#111722] bg-[#1a2230] text-yellow-400 shadow-sm z-10">
                       <span className="material-symbols-outlined text-[20px]">edit_document</span>
                    </div>
                    <Card className="ml-4 flex-1" hoverEffect>
                       <CardContent className="p-4">
                           <div>
                                 <p className="text-sm font-medium text-white"><span className="font-bold text-white">Sarah J.</span> updated <span className="text-primary-blue font-semibold">'Q4 Risk Summary'</span></p>
                                 <p className="mt-1 text-xs text-text-secondary">5 min ago • <span className="italic text-yellow-500/80">Pending Review</span></p>
                           </div>
                       </CardContent>
                    </Card>
                 </div>

                  {/* Event 3 */}
                 <div className="relative flex group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-[#111722] bg-[#1a2230] text-purple-400 shadow-sm z-10">
                       <span className="material-symbols-outlined text-[20px]">forum</span>
                    </div>
                    <Card className="ml-4 flex-1" hoverEffect>
                       <CardContent className="p-4">
                           <div>
                                 <p className="text-sm font-medium text-white"><span className="font-bold text-white">Mike T.</span> commented on <span className="text-primary-blue font-semibold">'Market Analysis Brazil'</span></p>
                                 <p className="mt-1 text-xs text-text-secondary">15 min ago</p>
                           </div>
                           <div className="mt-3 rounded-lg bg-[#232f48]/50 p-3 text-sm text-gray-300 italic border-l-2 border-purple-500">
                               "Should we include the Rio data set in this projection? The numbers seem off by ~10%."
                           </div>
                       </CardContent>
                    </Card>
                 </div>

              </div>
           </div>
        </div>
      </div>
    </div>
  );
};