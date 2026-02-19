import React, { useState } from 'react';
import type { Game } from '../types/game';
import { SearchIcon, PlusIcon, XIcon, CheckCircleIcon } from 'lucide-react';
interface SidebarProps {
  games: Game[];
  filteredGames: Game[];
  activeIdx: number;
  searchTerm: string;
  onSearch: (term: string) => void;
  onSelect: (globalIndex: number) => void;
  onRemove: (globalIndex: number) => void;
  onAdd: () => void;
}
export function Sidebar({
  games,
  filteredGames,
  activeIdx,
  searchTerm,
  onSearch,
  onSelect,
  onRemove,
  onAdd
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<'ALL' | 'RECENT' | 'COLLECTIONS'>(
    'ALL'
  );
  const tabs: Array<'ALL' | 'RECENT' | 'COLLECTIONS'> = [
  'ALL',
  'RECENT',
  'COLLECTIONS'];

  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        background: 'var(--steam-sidebar)',
        borderRight: '1px solid rgba(0,0,0,0.6)'
      }}>

      {/* Header */}
      <div
        style={{
          padding: '16px 16px 0'
        }}>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>

          <span
            style={{
              fontSize: '20px',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '1.5px'
            }}>

            LIBRARY
          </span>
          <button
            onClick={onAdd}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#8f98a0',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              padding: '4px 8px',
              borderRadius: '2px',
              transition: 'color 0.15s, background 0.15s'
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = '#fff';
              (e.currentTarget as HTMLElement).style.background =
              'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = '#8f98a0';
              (e.currentTarget as HTMLElement).style.background = 'none';
            }}
            aria-label="Add game">

            <PlusIcon size={13} />
            <span
              style={{
                fontWeight: 600
              }}>

              ADD
            </span>
          </button>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>

          {tabs.map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === tab ? '#fff' : '#8f98a0',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.5px',
              padding: '8px 12px 10px',
              cursor: 'pointer',
              position: 'relative',
              transition: 'color 0.15s'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab)
              (e.currentTarget as HTMLElement).style.color = '#c6d4df';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab)
              (e.currentTarget as HTMLElement).style.color = '#8f98a0';
            }}>

              {tab}
              {activeTab === tab &&
            <span
              style={{
                position: 'absolute',
                bottom: '-1px',
                left: '12px',
                right: '12px',
                height: '2px',
                background: 'var(--steam-blue)',
                borderRadius: '1px'
              }} />

            }
            </button>
          )}
        </div>
      </div>

      {/* Search */}
      <div
        style={{
          padding: '10px 12px'
        }}>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '6px 10px',
            borderRadius: '2px',
            background: '#12171c',
            border: '1px solid #2a3a4a'
          }}>

          <SearchIcon
            size={13}
            style={{
              color: '#556772',
              marginRight: '8px',
              flexShrink: 0
            }} />

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search by name..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#fff',
              fontSize: '12px',
              width: '100%',
              fontFamily: 'inherit'
            }} />

        </div>
      </div>

      {/* Count header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '2px 16px 6px',
          fontSize: '10px',
          color: '#556772',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>

        <span>Games</span>
        <span>{filteredGames.length}</span>
      </div>

      {/* Game list */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto'
        }}>

        {filteredGames.map((game) => {
          const globalIndex = games.indexOf(game);
          const isActive = globalIndex === activeIdx;
          return (
            <div
              key={`${game.name}-${globalIndex}`}
              className="game-item-row"
              onClick={() => onSelect(globalIndex)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                cursor: 'pointer',
                color: isActive ? '#fff' : '#8f98a0',
                background: isActive ?
                'linear-gradient(to right, rgba(61,68,80,0.8), rgba(33,36,41,0.4))' :
                'transparent',
                boxShadow: isActive ?
                'inset 3px 0 0 var(--steam-blue)' :
                'none',
                transition: 'background 0.1s',
                height: '40px',
                padding: '0 10px 0 0'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#8f98a0';
                }
              }}>

              {/* Game capsule/icon - uses banner image cropped small, or colored initial */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  flexShrink: 0,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: game.banner ?
                  `url(${game.banner}) center/cover no-repeat` :
                  'linear-gradient(135deg, #2a475e, #1b2838)',
                  fontSize: game.banner ? '0' : '14px',
                  fontWeight: 700,
                  color: '#66c0f4'
                }}>

                {!game.banner && game.name.charAt(0).toUpperCase()}
              </div>

              {/* Game name */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  padding: '0 14px',
                  display: 'flex',
                  alignItems: 'center'
                }}>

                <span
                  style={{
                    fontSize: '13px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontWeight: isActive ? 500 : 400,
                    flex: 1
                  }}>

                  {game.name}
                </span>
              </div>

              {/* Right side: installed + remove */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  flexShrink: 0
                }}>

                <CheckCircleIcon
                  size={12}
                  style={{
                    color: isActive ? '#75b022' : '#3d4450'
                  }} />

                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(globalIndex);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#556772',
                    borderRadius: '2px',
                    transition: 'color 0.1s, background 0.1s'
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.background =
                    '#b02a22';
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = '#556772';
                    (e.currentTarget as HTMLElement).style.background = 'none';
                  }}
                  aria-label={`Remove ${game.name}`}>

                  <XIcon size={12} />
                </button>
              </div>
            </div>);

        })}
      </div>

      {/* Bottom add button */}
      <div
        style={{
          padding: '10px 12px',
          borderTop: '1px solid rgba(255,255,255,0.04)'
        }}>

        <button
          onClick={onAdd}
          style={{
            width: '100%',
            padding: '7px',
            background: 'rgba(26,159,255,0.12)',
            border: '1px solid rgba(26,159,255,0.25)',
            color: '#66c0f4',
            fontWeight: 600,
            fontSize: '12px',
            borderRadius: '2px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            transition: 'background 0.15s, border-color 0.15s',
            fontFamily: 'inherit'
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.background =
            'rgba(26,159,255,0.22)';
            (e.currentTarget as HTMLElement).style.borderColor =
            'rgba(26,159,255,0.45)';
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.background =
            'rgba(26,159,255,0.12)';
            (e.currentTarget as HTMLElement).style.borderColor =
            'rgba(26,159,255,0.25)';
          }}>

          <PlusIcon size={13} />
          Add Game
        </button>
      </div>
    </aside>);

}