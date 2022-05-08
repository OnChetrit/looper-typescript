import React from "react";
import { Track } from "../models/Track.model";

export const toggleTrack = (tracks: Track[], id: number): Track[] => {
  console.log("id", id);

  return tracks.map((track: Track) => {
    return {
      ...track,
      isActive: track.id === id ? !track.isActive : track.isActive,
    };
  });
};

const useTracks = (initial: Track[]) => {
  const [tracks, setTracks] = React.useState<Track[]>(initial);
  return {
    tracks,
    toggleTrack(id: number) {
      setTracks((tracks) => toggleTrack(tracks, id));
    },
  };
};
export type UseTracksType = ReturnType<typeof useTracks>;

const TrackContext = React.createContext<UseTracksType | null>(null);

export const useTracksContext = () => React.useContext(TrackContext)!;

export const TracksProvider = ({ children }: { children: React.ReactNode }) => (
  <TrackContext.Provider value={useTracks([])}>
    {children}
  </TrackContext.Provider>
);
