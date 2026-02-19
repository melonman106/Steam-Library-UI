import { useState, useEffect, useCallback, useRef } from 'react';
import type { Game } from '../types/game';

const STORAGE_KEY = 'steam_games';

const DEFAULT_GAMES: Game[] = [
{
  name: 'Hollow Knight',
  url: './games/Hollow-Knight/index.html',
  banner:
  'https://cdn2.steamgriddb.com/hero/222c44c26a02c54e3a9fd0d895b12df4.png',
  trailer: 'UAO2urG23S4',
  desc: 'Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.',
  developer: 'Team Cherry',
  genre: 'Action, Adventure, Indie',
  releaseDate: 'Feb 24, 2017'
}];


function loadGames(): Game[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return [...DEFAULT_GAMES];
}

function saveGames(games: Game[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
}

function getPlaytime(gameName: string): number {
  return parseInt(localStorage.getItem('time_' + gameName) || '0', 10);
}

function setPlaytimeStorage(gameName: string, seconds: number) {
  localStorage.setItem('time_' + gameName, String(seconds));
}

export function useGameLibrary() {
  const [games, setGames] = useState<Game[]>(loadGames);
  const [activeIdx, setActiveIdx] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [playtimeSeconds, setPlaytimeSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filteredGames = games.filter((g) =>
  g.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeGame: Game | null = games[activeIdx] ?? null;

  useEffect(() => {
    if (activeGame) {
      setPlaytimeSeconds(getPlaytime(activeGame.name));
    }
  }, [activeGame?.name]);

  const selectGame = useCallback((globalIndex: number) => {
    setActiveIdx(globalIndex);
  }, []);

  const filterGames = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const addGame = useCallback(() => {
    const name = window.prompt('Game Name:');
    if (!name) return;
    const folderName = window.prompt('Game Folder Name (inside ./games/):');
    if (!folderName) return;
    const url = `./games/${folderName}/index.html`;
    const banner = window.prompt('Banner Image URL (optional):') || '';
    const trailer = window.prompt('YouTube Trailer ID (optional):') || '';
    const desc = window.prompt('Description (optional):') || '';

    setGames((prev) => {
      const next = [...prev, { name, url, banner, trailer, desc }];
      saveGames(next);
      return next;
    });
  }, []);

  const removeGame = useCallback(
    (globalIndex: number) => {
      const gameName = games[globalIndex]?.name;
      if (!gameName) return;
      if (
      !window.confirm(
        `WARNING:\n\nRemove "${gameName}"?\n\nThis cannot be undone.`
      ))

      return;

      setGames((prev) => {
        const next = [...prev];
        next.splice(globalIndex, 1);
        saveGames(next);
        return next;
      });
      setActiveIdx(0);
    },
    [games]
  );

  const launchGame = useCallback(() => {
    if (!activeGame) return;
    setIsOverlayOpen(true);

    timerRef.current = setInterval(() => {
      const current = getPlaytime(activeGame.name);
      const next = current + 1;
      setPlaytimeStorage(activeGame.name, next);
      setPlaytimeSeconds(next);
    }, 1000);
  }, [activeGame]);

  const stopGame = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setIsOverlayOpen(false);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return {
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
  };
}