import { Track } from "../models/Track.model";

const toggleActive = (track: Track) => {
  track.isActive = !track.isActive;
  return track;
};

const switchTrack = (track: Track) => {
  let currPlay = 0;
  if (track.currPlay + 1 !== track.path.length) {
    currPlay = track.currPlay + 1;
  }
  return { ...track, currPlay };
};

export const loopService = { toggleActive, switchTrack };
