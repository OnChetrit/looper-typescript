import React from 'react';
import { tracks } from '../constants/tracks';
import { ActiveTrack, Track } from '../models/Track.model';

export const toggleTrack = (tracks: Track[], id: number): Track[] => {
  return tracks.map((track: Track) => {
    return {
      ...track,
      isActive: track.id === id ? !track.isActive : track.isActive,
    };
  });
};

export const changeTrackVol = (
  tracks: Track[],
  id: number,
  volume: number
): Track[] => {
  return tracks.map((track: Track) => {
    return {
      ...track,
      volume: track.id === id ? volume : track.volume,
    };
  });
};

const useTracks: any = (initial: Track[]) => {
  const [tracks, setTracks] = React.useState<Track[]>(initial);
  const [audioContext, setAudioContext] = React.useState<AudioContext | null>(
    null
  );
  const [activeTracks, SetActiveTracks] = React.useState<ActiveTrack[] | null>(
    null
  );

  return {
    tracks,
    audioContext,
    activeTracks,
    toggleTrack(id: number) {
      setTracks((tracks) => toggleTrack(tracks, id));
    },
    changeTrackVol(id: number, volume: number) {
      setTracks((tracks) => changeTrackVol(tracks, id, volume));
    },
    setAudioContext(atcx: AudioContext) {
      setAudioContext(atcx);
    },
    SetActiveTracks(activeTracks: ActiveTrack[]) {
      SetActiveTracks(activeTracks);
    },
  };
};
export type UseTracksType = ReturnType<typeof useTracks>;

const TrackContext = React.createContext<UseTracksType | null>(null);

export const useTracksContext = () => React.useContext(TrackContext)!;

export const TracksProvider = ({ children }: { children: React.ReactNode }) => (
  <TrackContext.Provider value={useTracks(tracks)}>
    {children}
  </TrackContext.Provider>
);
