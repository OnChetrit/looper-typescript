import { AppControls } from './ts/components/AppControls';
import { PadList } from './ts/components/PadList';
import { TracksProvider, useTracksContext } from './ts/store/store';
import './assets/styles/styles.scss';
import { useEffect } from 'react';

const Home = () => {
  const { setAudioContext } = useTracksContext();
  useEffect(() => {
    const AudioContext = window.AudioContext;
    const actx = new AudioContext();
    setAudioContext(actx);
  }, []);
  return (
    <TracksProvider>
      <PadList />
      <AppControls />
    </TracksProvider>
  );
};

export default Home;
