import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { LibraryView } from './pages/LibraryView';
import { DetailView } from './pages/DetailView';
import { ChatView } from './pages/ChatView';
import { StreamView } from './pages/StreamView';
import { Screen } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Library);
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | undefined>(undefined);

  const handleNavigate = (screen: Screen, artifactId?: string) => {
    setCurrentScreen(screen);
    if (artifactId) {
      setSelectedArtifactId(artifactId);
    }
  };

  return (
    <Layout activeScreen={currentScreen} onNavigate={(s) => handleNavigate(s)}>
      {currentScreen === Screen.Library && (
        <LibraryView onNavigate={handleNavigate} />
      )}
      {currentScreen === Screen.Detail && selectedArtifactId && (
        <DetailView artifactId={selectedArtifactId} onBack={() => handleNavigate(Screen.Library)} />
      )}
      {currentScreen === Screen.Chat && (
        <ChatView />
      )}
      {currentScreen === Screen.Stream && (
        <StreamView />
      )}
    </Layout>
  );
}