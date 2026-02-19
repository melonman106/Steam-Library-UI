import React from 'react';
import { PlayIcon, SettingsIcon, MoreHorizontalIcon } from 'lucide-react';
interface ActionBarProps {
  playtimeMinutes: number;
  onPlay: () => void;
}
export function ActionBar({ playtimeMinutes, onPlay }: ActionBarProps) {
  return (
    <div
      style={{
        background:
        'linear-gradient(to bottom, rgba(23,26,33,0.0), rgba(23,26,33,1) 20%)',
        padding: '0 50px',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '18px 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>

        {/* Play button */}
        <button
          onClick={onPlay}
          className="steam-play-btn"
          style={{
            background: 'linear-gradient(to right, #75b022, #588a1b)',
            border: 'none',
            color: '#fff',
            padding: '10px 50px',
            fontSize: '18px',
            fontWeight: 800,
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            letterSpacing: '0.5px',
            fontFamily: 'inherit',
            boxShadow: '0 2px 8px rgba(117,176,34,0.25)'
          }}>

          <PlayIcon size={16} fill="white" strokeWidth={0} />
          PLAY
        </button>

        {/* Icon buttons */}
        <IconButton icon={<SettingsIcon size={15} />} label="Settings" />
        <IconButton icon={<MoreHorizontalIcon size={15} />} label="More" />

        {/* Divider */}
        <div
          style={{
            width: '1px',
            height: '24px',
            background: 'rgba(255,255,255,0.08)',
            margin: '0 6px'
          }} />


        {/* Stats */}
        <StatBox
          label="Playtime"
          value={playtimeMinutes > 0 ? `${playtimeMinutes} min` : 'None'} />

        <StatBox label="Last Played" value="Today" />
      </div>
    </div>);

}
function IconButton({ icon, label }: {icon: React.ReactNode;label: string;}) {
  return (
    <button
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '2px',
        padding: '8px 10px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        color: '#8f98a0',
        transition: 'background 0.15s, color 0.15s'
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.background =
        'rgba(255,255,255,0.1)';
        (e.currentTarget as HTMLElement).style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.background =
        'rgba(255,255,255,0.05)';
        (e.currentTarget as HTMLElement).style.color = '#8f98a0';
      }}
      aria-label={label}>

      {icon}
    </button>);

}
function StatBox({ label, value }: {label: string;value: string;}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0 12px'
      }}>

      <span
        style={{
          fontSize: '10px',
          color: '#556772',
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '0.5px',
          marginBottom: '1px'
        }}>

        {label}
      </span>
      <span
        style={{
          fontSize: '13px',
          color: '#c6d4df',
          fontWeight: 500
        }}>

        {value}
      </span>
    </div>);

}