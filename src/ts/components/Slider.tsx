import '../../assets/styles/components/slider.scss';
import { Track } from '../models/Track.model';
import { useTracksContext } from '../store/store';

interface SliderProp {
  track: Track;
}

export const Slider = ({ track }: SliderProp) => {
  const { volume, isActive } = track;
  const { changeTrackVol } = useTracksContext();
  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        value={isActive ? (volume * 100).toString() : '0'}
        onChange={(e) => {
          if (track.isActive) {
            changeTrackVol(track.id, +e.target.value / 100);
          }
        }}
      />
      <progress max="100" value={isActive ? (volume * 100).toString() : '0'} />
    </div>
  );
};
