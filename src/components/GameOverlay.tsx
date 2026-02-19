import React from 'react';
import { XIcon, MinusIcon, SquareIcon, GamepadIcon } from 'lucide-react';
interface GameOverlayProps {
  isOpen: boolean;
  gameUrl: string;
  gameName?: string;
  onStop: () => void;
}
export function GameOverlay({
  isOpen,
  gameUrl,
  gameName,
  onStop
}: GameOverlayProps) {
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column'
      }}>

      {/* Title bar - mimics Steam's in-game overlay bar */}
      <div
        style={{
          height: '32px',
          background: 'linear-gradient(to bottom, #2a3f54, #1b2838)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0',
          flexShrink: 0,
          borderBottom: '1px solid rgba(0,0,0,0.5)',
          userSelect: 'none'
        }}>

        {/* Left: game info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingLeft: '12px'
          }}>

          <GamepadIcon
            size={13}
            style={{
              color: '#66c0f4'
            }} />

          <span
            style={{
              color: '#c6d4df',
              fontSize: '12px',
              fontWeight: 600
            }}>

            {gameName || 'Game'}
          </span>
          <span
            style={{
              fontSize: '10px',
              color: '#75b022',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>

            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#75b022',
                display: 'inline-block',
                boxShadow: '0 0 6px rgba(117,176,34,0.5)'
              }} />

            Running
          </span>
        </div>

        {/* Right: window controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            height: '100%'
          }}>

          <button
            style={{
              width: '36px',
              background: 'none',
              border: 'none',
              color: '#8f98a0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.1s, color 0.1s'
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background =
              'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'none';
              (e.currentTarget as HTMLElement).style.color = '#8f98a0';
            }}
            aria-label="Minimize">

            <MinusIcon size={14} />
          </button>
          <button
            style={{
              width: '36px',
              background: 'none',
              border: 'none',
              color: '#8f98a0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.1s, color 0.1s'
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background =
              'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'none';
              (e.currentTarget as HTMLElement).style.color = '#8f98a0';
            }}
            aria-label="Maximize">

            <SquareIcon size={12} />
          </button>
          <button
            onClick={onStop}
            style={{
              width: '36px',
              background: 'none',
              border: 'none',
              color: '#8f98a0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.1s, color 0.1s'
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = '#e81123';
              (e.currentTarget as HTMLElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = 'none';
              (e.currentTarget as HTMLElement).style.color = '#8f98a0';
            }}
            aria-label="Close game">

            <XIcon size={14} />
          </button>
        </div>
      </div>

      {/* Game iframe */}
      <iframe
        src={gameUrl}
        style={{
          flex: 1,
          width: '100%',
          border: 'none'
        }}
        title="Game" />

    </div>);

}