import "../../assets/styles/components/slider.scss";

interface SliderProp {
  track: any;
  setVolume: Function;
}

export const Slider = ({ track, setVolume }: SliderProp) => {
  const { volume, isActive } = track;
  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        value={isActive ? (volume * 100).toString() : "0"}
        onChange={(e) => {
          if (track.isActive) {
            setVolume(+e.target.value);
          }
        }}
      />
      <progress max="100" value={isActive ? (volume * 100).toString() : "0"} />
    </div>
  );
};
