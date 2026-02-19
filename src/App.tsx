import React from 'react';
import { useGameLibrary } from './hooks/useGameLibrary';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { HeroBanner } from './components/HeroBanner';
import { ActionBar } from './components/ActionBar';
import { GameDetails } from './components/GameDetails';
import { GameOverlay } from './components/GameOverlay';
export function App() {
  const {
    games,
    activeIdx,
    activeGame,
    searchTerm,
    filteredGames,
    isOverlayOpen,
    playtimeSeconds,
    selectGame,
    filterGames,
    addGame,
    removeGame,
    launchGame,
    stopGame
  } = useGameLibrary();
  const playtimeMinutes = Math.floor(playtimeSeconds / 60);
  return (
    <>
      <GameOverlay
        isOpen={isOverlayOpen}
        gameUrl={activeGame?.url || ''}
        gameName={activeGame?.name}
        onStop={stopGame} />


      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--steam-bg)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>

        {/* Top navigation */}
        <TopNav activeGame={activeGame?.name} />

        {/* Main layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            flex: 1,
            overflow: 'hidden'
          }}>

          <Sidebar
            games={games}
            filteredGames={filteredGames}
            activeIdx={activeIdx}
            searchTerm={searchTerm}
            onSearch={filterGames}
            onSelect={selectGame}
            onRemove={removeGame}
            onAdd={addGame} />


          <main
            style={{
              overflowY: 'auto',
              background: 'var(--steam-bg)'
            }}>

            {activeGame ?
            <>
                <HeroBanner
                banner={activeGame.banner}
                title={activeGame.name} />

                <ActionBar
                playtimeMinutes={playtimeMinutes}
                onPlay={launchGame} />

                <GameDetails game={activeGame} />
              </> :

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                flexDirection: 'column',
                gap: '16px'
              }}>

                <div
                style={{
                  fontSize: '48px',
                  opacity: 0.2
                }}>

                  🎮
                </div>
                <p
                style={{
                  color: '#556772',
                  fontSize: '16px',
                  fontWeight: 500
                }}>

                  No games in your library
                </p>
                <p
                style={{
                  color: '#3d4450',
                  fontSize: '13px'
                }}>

                  Click "+ Add Game" to get started
                </p>
              </div>
            }
          </main>
        </div>
      </div>
    </>);

}