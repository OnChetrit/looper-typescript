import { ReactComponent as Loop } from '../../assets/imgs/loop.svg';
import { ReactComponent as Play } from '../../assets/imgs/play.svg';
import { ReactComponent as Stop } from '../../assets/imgs/stop.svg';
import { ReactComponent as Pause } from '../../assets/imgs/pause.svg';
import { useEffect, useState } from 'react';
import { tracks } from '../constants/tracks';

import '../../assets/styles/components/app-controls.scss';

export const AppControls = () => {
  const [isLoop, setIsLoop] = useState(true);
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {}, []);

  const play = () => {
    setIsPlay(!isPlay);
  };

  const stop = () => {};

  const loop = () => {
    setIsLoop(!isLoop);
  };

  return (
    <div className="controls flex column auto-center">
      <div className="top flex">
        <button onClick={loop}>
          <Loop data-loop={isLoop} />
        </button>
        <button onClick={play}>{isPlay ? <Pause /> : <Play />}</button>
        <button onClick={stop}>
          <Stop />
        </button>
      </div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="100"
          value="0"
          // value={((tracks[0].audio?.currentPosition() / 100) * 1.25).toString()}
          onChange={(e) => {}}
        />
        <progress
          max="100"
          value="0"
          // value={((tracks[0].audio?.currentPosition() / 100) * 1.25).toString()}
        />
      </div>
    </div>
  );
};
