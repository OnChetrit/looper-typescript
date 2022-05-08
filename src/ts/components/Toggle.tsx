import { motion } from "framer-motion";
import "../../assets/styles/components/toggle.scss";
import { Track } from "../models/Track.model";
import { useTracksContext } from "../store/store";

interface ToggleProp {
  track: Track;
}

export const Toggle = ({ track }: ToggleProp) => {
  const { toggleTrack } = useTracksContext();
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
    restSpeed: 0.4,
  };

  return (
    <div
      className="switch"
      data-active={track.isActive}
      onClick={() => toggleTrack(track.id)}
    >
      <motion.div className="handle" layout transition={spring} />
    </div>
  );
};
