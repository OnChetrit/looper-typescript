import { AppControls } from "./ts/components/AppControls";
import { PadList } from "./ts/components/PadList";
import { TracksProvider } from "./ts/store/store";
import "./assets/styles/styles.scss";

const Home = () => {
  return (
    <TracksProvider>
      <PadList />
      <AppControls />
    </TracksProvider>
  );
};

export default Home;
