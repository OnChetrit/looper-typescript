import { useTracksContext } from '../store/store';
import { Track } from '../models/Track.model';
import { Pad } from './Pad';

import '../../assets/styles/components/pad-list.scss';

export const PadList = () => {
  const { tracks } = useTracksContext();
  return (
    <div className="pad-list main-container">
      {tracks.map((track: Track) => {
        return <Pad track={track} key={track.id} />;
      })}
    </div>
  );
};
