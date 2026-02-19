import React from 'react';
import {
  MinusIcon,
  SquareIcon,
  XIcon,
  BellIcon,
  UserIcon,
  ChevronDownIcon,
  MessageSquareIcon } from
'lucide-react';
interface TopNavProps {
  activeGame?: string;
}
export function TopNav({ activeGame }: TopNavProps) {
  return (
    <nav
      style={{
        height: '36px',
        background: 'linear-gradient(to bottom, #2a3f54, #1b2838)',
        borderBottom: '1px solid rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: '0',
        flexShrink: 0,
        userSelect: 'none'
      }}>

      {/* Left: Logo + Nav */}
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch'
        }}>

        {/* Steam logo area */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0 16px',
            cursor: 'pointer'
          }}>

          <svg
            width="18"
            height="18"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path
              d="M32.5 0C15.2 0 1 13.2 0 30l17.4 7.2c1.5-1 3.3-1.7 5.3-1.7h.5l7.9-11.4v-.2c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12h-.3L31.7 44v.3c0 5-4 9-9 9-4.4 0-8-3.1-8.8-7.3L2.4 41C7.4 54.8 19 65 32.5 65 50.4 65 65 50.4 65 32.5S50.4 0 32.5 0z"
              fill="#c6d4df" />

          </svg>
          <span
            style={{
              color: '#c6d4df',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px'
            }}>

            Steam
          </span>
        </div>

        {/* Nav links */}
        <NavLink label="STORE" active={false} />
        <NavLink label="LIBRARY" active={true} />
        <NavLink label="COMMUNITY" active={false} />
      </div>

      {/* Right: User + Window controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch'
        }}>

        {/* Chat */}
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            color: '#8f98a0',
            transition: 'color 0.1s, background 0.1s'
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.background =
            'rgba(255,255,255,0.05)';
            (e.currentTarget as HTMLElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.background = 'none';
            (e.currentTarget as HTMLElement).style.color = '#8f98a0';
          }}
          aria-label="Friends & Chat">

          <MessageSquareIcon size={14} />
        </button>

        {/* Notifications */}
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            color: '#8f98a0',
            transition: 'color 0.1s, background 0.1s'
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.background =
            'rgba(255,255,255,0.05)';
            (e.currentTarget as HTMLElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.background = 'none';
            (e.currentTarget as HTMLElement).style.color = '#8f98a0';
          }}
          aria-label="Notifications">

          <BellIcon size={14} />
          <span
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '5px',
              height: '5px',
              background: '#1a9fff',
              borderRadius: '50%'
            }} />

        </button>

        {/* User */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
            padding: '0 12px',
            transition: 'background 0.1s'
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.background =
            'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.background = 'none';
          }}>

          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '2px',
              background: 'linear-gradient(135deg, #2a475e, #1b2838)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>

            <UserIcon
              size={12}
              style={{
                color: '#66c0f4'
              }} />

          </div>
          <span
            style={{
              color: '#8f98a0',
              fontSize: '11px',
              fontWeight: 500
            }}>

            Player
          </span>
          <ChevronDownIcon
            size={10}
            style={{
              color: '#556772'
            }} />

        </div>

        {/* Separator */}
        <div
          style={{
            width: '1px',
            background: 'rgba(255,255,255,0.06)',
            margin: '8px 0'
          }} />


        {/* Window controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch'
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
            aria-label="Close">

            <XIcon size={14} />
          </button>
        </div>
      </div>
    </nav>);

}
function NavLink({ label, active }: {label: string;active: boolean;}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0 14px',
        cursor: 'pointer',
        position: 'relative',
        color: active ? '#fff' : '#8f98a0',
        fontSize: '11px',
        fontWeight: active ? 600 : 500,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        background: active ? 'rgba(255,255,255,0.05)' : 'transparent',
        transition: 'color 0.1s, background 0.1s'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          ;(e.currentTarget as HTMLElement).style.color = '#fff';
          (e.currentTarget as HTMLElement).style.background =
          'rgba(255,255,255,0.03)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          ;(e.currentTarget as HTMLElement).style.color = '#8f98a0';
          (e.currentTarget as HTMLElement).style.background = 'transparent';
        }
      }}>

      {label}
      {active &&
      <span
        style={{
          position: 'absolute',
          bottom: '0',
          left: '14px',
          right: '14px',
          height: '2px',
          background: 'var(--steam-blue)'
        }} />

      }
    </div>);

}