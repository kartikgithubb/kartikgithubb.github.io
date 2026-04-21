
import { useState, useEffect } from 'react';

export interface LanyardData {
  spotify: {
    track_id: string;
    timestamps: {
      start: number;
      end: number;
    };
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  } | null;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: {
    type: number;
    state: string;
    name: string;
    id: string;
    details?: string;
    timestamps?: {
      start: number;
    };
    assets?: {
      large_image: string;
      large_text: string;
    };
  }[];
}

// NOTE TO USER: Replace this placeholder with your actual Discord ID
// You can get it by enabling Developer Mode on Discord, right-clicking your profile, and clicking "Copy User ID".
const DEFAULT_DISCORD_ID = '322442431710035969'; 

export const useLanyard = (discordId: string = DEFAULT_DISCORD_ID) => {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!discordId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${discordId}`);
        const json = await response.json();
        if (json.success) {
          setData(json.data);
        } else {
          setError(new Error(json.error?.message || 'Failed to fetch Lanyard data'));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Poll every 30s

    return () => clearInterval(interval);
  }, [discordId]);

  return { data, loading, error };
};
