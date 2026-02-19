import React from 'react';
import type { Game } from '../types/game';
import { TagIcon, CalendarIcon, CodeIcon, MonitorIcon } from 'lucide-react';
interface GameDetailsProps {
  game: Game;
}
export function GameDetails({ game }: GameDetailsProps) {
  const embedUrl = game.trailer ?
  `https://www.youtube.com/embed/${game.trailer}?mute=1&autoplay=0` :
  '';
  return (
    <div
      style={{
        padding: '30px 50px 50px',
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '40px'
      }}>

      {/* Left: Media + Description */}
      <div>
        {/* Video */}
        {embedUrl &&
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            background: '#000',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}>

            <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Game trailer" />

          </div>
        }

        {/* Description */}
        {game.desc &&
        <div
          style={{
            marginTop: '24px'
          }}>

            <h3
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '12px'
            }}>

              About This Game
            </h3>
            <p
            style={{
              lineHeight: 1.7,
              color: '#acb2b8',
              fontSize: '14px',
              margin: 0
            }}>

              {game.desc}
            </p>
          </div>
        }
      </div>

      {/* Right: Info Panel */}
      <div>
        <div
          style={{
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '4px',
            border: '1px solid rgba(255,255,255,0.04)',
            overflow: 'hidden'
          }}>

          {/* Game info header */}
          <div
            style={{
              padding: '16px',
              borderBottom: '1px solid rgba(255,255,255,0.04)'
            }}>

            <h3
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 4px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>

              Game Details
            </h3>
          </div>

          {/* Info rows */}
          <div
            style={{
              padding: '0'
            }}>

            <InfoRow
              icon={<CodeIcon size={13} />}
              label="Developer"
              value={game.developer || 'Unknown'} />

            <InfoRow
              icon={<TagIcon size={13} />}
              label="Genre"
              value={game.genre || 'Not specified'} />

            <InfoRow
              icon={<CalendarIcon size={13} />}
              label="Release Date"
              value={game.releaseDate || 'Unknown'} />

            <InfoRow
              icon={<MonitorIcon size={13} />}
              label="Platform"
              value="Web Browser" />

          </div>

          {/* Game path */}
          <div
            style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(255,255,255,0.04)',
              fontSize: '11px',
              color: '#556772'
            }}>

            <span
              style={{
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.3px'
              }}>

              Location
            </span>
            <div
              style={{
                marginTop: '4px',
                padding: '6px 8px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '2px',
                fontFamily: 'monospace',
                fontSize: '11px',
                color: '#8f98a0',
                wordBreak: 'break-all'
              }}>

              {game.url}
            </div>
          </div>
        </div>
      </div>
    </div>);

}
function InfoRow({
  icon,
  label,
  value




}: {icon: React.ReactNode;label: string;value: string;}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
        gap: '10px'
      }}>

      <span
        style={{
          color: '#556772',
          display: 'flex',
          flexShrink: 0
        }}>

        {icon}
      </span>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0
        }}>

        <span
          style={{
            fontSize: '10px',
            color: '#556772',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
            marginBottom: '1px'
          }}>

          {label}
        </span>
        <span
          style={{
            fontSize: '13px',
            color: '#c6d4df'
          }}>

          {value}
        </span>
      </div>
    </div>);

}