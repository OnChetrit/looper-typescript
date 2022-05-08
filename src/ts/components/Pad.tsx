import { Toggle } from './Toggle';
import { Slider } from './Slider';
import { ReactComponent as Replace } from '../../assets/imgs/replace.svg';
import { Track } from '../models/Track.model';

import '../../assets/styles/components/pad.scss';

interface PadProp {
  track: Track;
}

export const Pad = ({ track }: PadProp) => {
  const switchNextTrack = () => {};

  const setVolume = () => {};

  return (
    <div
      className="pad flex column br8"
      data-active={track.isActive}
      style={{ backgroundColor: track.isActive ? `${track.color}` : '#444444' }}
    >
      <div className="top flex">
        <div className="icon flex align-center">
          {track.currPlay + 1} / {track.path.length}
        </div>
        <div className="title flex align-center">{track.title}</div>
        <div className="pad-controls flex align-center">
          <button onClick={switchNextTrack}>
            <Replace />
          </button>
          <Toggle track={track} />
        </div>
      </div>
      <Slider track={track} />
    </div>
  );
};
