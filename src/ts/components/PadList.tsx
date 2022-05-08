import { tracks } from "../constants/tracks";
import { Pad } from "./Pad";

import "../../assets/styles/components/pad-list.scss";

export const PadList = () => {
  return (
    <div className="pad-list main-container">
      {tracks.map((track) => {
        return <Pad track={track} key={track.id} />;
      })}
    </div>
  );
};
