import React, { useState, useMemo } from 'react';
import { ARTIFACTS } from '../constants';
import { Artifact, Screen } from '../types';

interface LibraryViewProps {
  onNavigate: (screen: Screen, artifactId?: string) => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({ onNavigate }) => {
  // State for Filters and View Options
  const [selectedSentiments, setSelectedSentiments] = useState<string[]>(['Positive']);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Derive unique filter options from data
  const uniqueTopics = useMemo(() => Array.from(new Set(ARTIFACTS.map(a => a.topic))), []);
  const uniqueSentiments = ['Positive', 'Neutral', 'Negative'];

  // Helper to get counts for badges
  const getCount = (key: 'sentiment' | 'topic', value: string) => 
    ARTIFACTS.filter(a => a[key] === value).length;

  // Filter and Sort Logic
  const filteredArtifacts = useMemo(() => {
    return ARTIFACTS.filter(artifact => {
      const sentimentMatch = selectedSentiments.length === 0 || selectedSentiments.includes(artifact.sentiment);
      const topicMatch = selectedTopics.length === 0 || selectedTopics.includes(artifact.topic);
      return sentimentMatch && topicMatch;
    }).sort((a, b) => {
      return sortOrder === 'desc' ? b.aiScore - a.aiScore : a.aiScore - b.aiScore;
    });
  }, [selectedSentiments, selectedTopics, sortOrder]);

  // Toggle Handler
  const toggleFilter = (
    list: string[], 
    setList: React.Dispatch<React.SetStateAction<string[]>>, 
    item: string
  ) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* Sidebar Filters */}
      <aside className="hidden lg:flex w-[280px] min-w-[280px] flex-col bg-[#0b1610] border-r border-[#244732] overflow-y-auto p-4 gap-6">
        <div className="flex items-center justify-between pb-2 border-b border-[#244732]/50">
          <h3 className="text-white text-sm font-bold uppercase tracking-wider">Semantic Filters</h3>
          <button 
            onClick={() => {setSelectedSentiments([]); setSelectedTopics([]);}}
            className="material-symbols-outlined text-text-secondary text-sm cursor-pointer hover:text-white transition-colors"
            title="Clear Filters"
          >
            tune
          </button>
        </div>

        {/* Sentiment Filter */}
        <div className="flex flex-col gap-4">
          <details className="group" open>
            <summary className="flex cursor-pointer items-center justify-between gap-2 py-2 list-none select-none">
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">Sentiment</span>
                <span className="text-[10px] font-medium text-primary-DEFAULT bg-primary-DEFAULT/10 px-1.5 py-0.5 rounded uppercase w-fit mt-1">AI Suggest</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="pt-3 flex flex-col gap-2 pl-1">
              {uniqueSentiments.map((sentiment) => (
                <label key={sentiment} className="flex items-center gap-3 cursor-pointer group/item select-none">
                  <input 
                    type="checkbox" 
                    checked={selectedSentiments.includes(sentiment)}
                    onChange={() => toggleFilter(selectedSentiments, setSelectedSentiments, sentiment)}
                    className="h-4 w-4 rounded border-[#244732] border-2 bg-transparent accent-primary-DEFAULT focus:ring-0 focus:ring-offset-0 cursor-pointer" 
                  />
                  <span className={`text-sm ${selectedSentiments.includes(sentiment) ? 'text-white' : 'text-text-secondary'} group-hover/item:text-white transition-colors`}>
                    {sentiment} <span className="text-text-secondary/50 text-xs ml-1">({getCount('sentiment', sentiment)})</span>
                  </span>
                </label>
              ))}
            </div>
          </details>
          
          <div className="h-px bg-[#244732]/50 w-full"></div>

          {/* Topic Filter */}
          <details className="group" open>
            <summary className="flex cursor-pointer items-center justify-between gap-2 py-2 list-none select-none">
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">Topic</span>
                <span className="text-[10px] font-medium text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded uppercase w-fit mt-1">AI Categorize</span>
              </div>
              <span className="material-symbols-outlined text-text-secondary group-open:rotate-180 transition-transform">expand_more</span>
            </summary>
            <div className="pt-3 flex flex-col gap-2 pl-1">
               {uniqueTopics.map((topic) => (
                <label key={topic} className="flex items-center gap-3 cursor-pointer group/item select-none">
                  <input 
                    type="checkbox"
                    checked={selectedTopics.includes(topic)}
                    onChange={() => toggleFilter(selectedTopics, setSelectedTopics, topic)}
                    className="h-4 w-4 rounded border-[#244732] border-2 bg-transparent accent-primary-DEFAULT focus:ring-0 focus:ring-offset-0 cursor-pointer" 
                  />
                  <span className={`text-sm ${selectedTopics.includes(topic) ? 'text-white' : 'text-text-secondary'} group-hover/item:text-white transition-colors truncate`}>
                    {topic} <span className="text-text-secondary/50 text-xs ml-1">({getCount('topic', topic)})</span>
                  </span>
                </label>
              ))}
            </div>
          </details>
        </div>
      </aside>

      {/* Main Grid */}
      <main className="flex-1 flex flex-col bg-[#112117] overflow-y-auto">
        <div className="flex flex-col p-6 lg:p-10 gap-8 max-w-[1600px] w-full mx-auto">
          
          {/* Controls Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              Deep Library Artifacts 
              <span className="px-2.5 py-0.5 rounded-full bg-[#182e22] border border-[#244732] text-text-secondary text-sm font-normal">
                {filteredArtifacts.length}
              </span>
            </h1>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                className="flex items-center gap-2 px-4 py-2 bg-[#182e22] border border-[#244732] rounded-full text-sm font-medium text-white hover:border-primary-DEFAULT/50 transition-colors select-none"
              >
                <span>Relevance {sortOrder === 'desc' ? '(High)' : '(Low)'}</span>
                <span className={`material-symbols-outlined text-text-secondary text-lg transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`}>arrow_drop_down</span>
              </button>
              <div className="flex bg-[#182e22] rounded-full border border-[#244732] p-1">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-[#244732] text-white' : 'text-text-secondary hover:text-white'}`}
                  title="Grid View"
                >
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-full transition-colors ${viewMode === 'list' ? 'bg-[#244732] text-white' : 'text-text-secondary hover:text-white'}`}
                  title="List View"
                >
                  <span className="material-symbols-outlined text-lg">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Area */}
          {filteredArtifacts.length > 0 ? (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {filteredArtifacts.map((artifact: Artifact) => (
                <div 
                  key={artifact.id} 
                  onClick={() => onNavigate(Screen.Detail, artifact.id)}
                  className={`
                    group relative flex bg-[#182e22] border border-[#244732] hover:border-primary-DEFAULT/40 rounded-[2rem] overflow-hidden transition-all hover:shadow-lg hover:shadow-primary-DEFAULT/5 cursor-pointer
                    ${viewMode === 'grid' ? 'flex-col h-full' : 'flex-row items-center p-2 pr-6 h-32'}
                  `}
                >
                  {/* Header Gradient / Image */}
                  <div className={`
                    relative bg-gradient-to-br ${artifact.gradient}
                    ${viewMode === 'grid' ? 'h-32 w-full' : 'h-full w-32 shrink-0 rounded-3xl'}
                  `}>
                    <div className="absolute top-4 left-4 flex gap-2">
                       <span className={`px-2 py-1 bg-[#112117]/60 backdrop-blur text-[10px] font-bold tracking-wider rounded-md border border-white/10 uppercase
                        ${artifact.type === 'SHEET' ? 'text-emerald-400 border-emerald-400/20' : 
                          artifact.type === 'DRAFT' ? 'text-orange-300 border-orange-300/20' : 
                          artifact.type === 'DOC' ? 'text-cyan-300 border-cyan-300/20' : 'text-white'}`}>
                          {artifact.type}
                       </span>
                    </div>
                    
                    {/* Score Gauge */}
                    <div className={`
                      absolute z-10
                      ${viewMode === 'grid' ? 'bottom-[-14px] left-5' : 'bottom-3 right-3'}
                    `}>
                      <div className="flex items-center gap-1.5 bg-[#112117] border border-primary-DEFAULT/30 rounded-full pl-1.5 pr-2.5 py-1 shadow-lg">
                        <div className="relative size-5 flex items-center justify-center">
                           <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                            <path className={`${artifact.aiScore > 90 ? 'text-primary-DEFAULT' : artifact.aiScore > 88 ? 'text-cyan-400' : 'text-yellow-400'}`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray={`${artifact.aiScore}, 100`} strokeWidth="4"></path>
                          </svg>
                        </div>
                        <span className={`text-xs font-bold ${artifact.aiScore > 90 ? 'text-primary-DEFAULT' : artifact.aiScore > 88 ? 'text-cyan-400' : 'text-yellow-400'}`}>{artifact.aiScore}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`flex flex-col gap-2 flex-1 ${viewMode === 'grid' ? 'p-5 pt-7' : 'px-6 py-2 justify-center'}`}>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-primary-DEFAULT transition-colors line-clamp-1">{artifact.title}</h3>
                      <p className="text-text-secondary text-sm line-clamp-2">{artifact.description}</p>
                    </div>

                    <div className={`flex flex-wrap gap-2 ${viewMode === 'grid' ? 'mt-auto' : 'mt-1'}`}>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-text-secondary">
                        <span className={`material-symbols-outlined text-[14px] ${artifact.sentiment === 'Positive' ? 'text-primary-DEFAULT' : 'text-yellow-400'}`}>
                          {artifact.sentiment === 'Positive' ? 'sentiment_satisfied' : 'sentiment_neutral'}
                        </span>
                        <span>{artifact.sentiment}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] text-text-secondary">
                        <span className="material-symbols-outlined text-[14px] text-purple-400">label</span>
                        <span>{artifact.topic}</span>
                      </div>
                    </div>

                    <div className={`
                      flex items-center justify-between text-[11px] text-text-secondary font-medium
                      ${viewMode === 'grid' ? 'pt-3 mt-1 border-t border-[#244732]' : 'hidden'}
                    `}>
                      <span>{artifact.date}</span>
                      <div className="flex items-center gap-1">
                        <div className="size-4 rounded-full bg-white/20 bg-cover bg-center" style={{ backgroundImage: `url(${artifact.authorAvatar})`}}></div>
                        <span>{artifact.author}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center py-20 opacity-50">
                <span className="material-symbols-outlined text-[48px] text-text-muted mb-4">filter_list_off</span>
                <p className="text-white text-lg font-medium">No artifacts found</p>
                <p className="text-text-secondary text-sm">Try adjusting your filters</p>
                <button onClick={() => {setSelectedSentiments([]); setSelectedTopics([]);}} className="mt-4 text-primary-DEFAULT hover:underline text-sm font-medium">Clear all filters</button>
             </div>
          )}
          
          {filteredArtifacts.length > 0 && (
            <div className="flex justify-center mt-6">
              <button className="group flex items-center gap-2 px-8 py-3 rounded-full border border-[#244732] bg-[#182e22] hover:border-primary-DEFAULT hover:text-primary-DEFAULT transition-all text-sm font-bold text-text-secondary">
                <span>Load More Artifacts</span>
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};