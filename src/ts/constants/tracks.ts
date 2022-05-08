import bassC1 from "../../assets/sounds/bass_C_1.mp3";
import bassCm2 from "../../assets/sounds/bass_Cm_2.mp3";
import bassC3 from "../../assets/sounds/bass_c_3.mp3";
import bassC4 from "../../assets/sounds/bass_c_4.mp3";
import bassCm5 from "../../assets/sounds/bass_Cm_5.mp3";
import drums2 from "../../assets/sounds/drum_2.mp3";
import drum from "../../assets/sounds/drum.mp3";
import guitar from "../../assets/sounds/guitar_c_1.mp3";
import piano from "../../assets/sounds/piano_Cm_1.mp3";
import sax from "../../assets/sounds/sax_Cm_1.mp3";
import shaker from "../../assets/sounds/shaker.mp3";
import vocalsGetBack from "../../assets/sounds/vocal-get-back.mp3";
import vocalsCmin from "../../assets/sounds/vocal-loop-first-Cmin.mp3";
import vocalsOutOfMyLane from "../../assets/sounds/vocal-loop-outofmylane-wet-Cmin.mp3";
import vocalsOwnIt from "../../assets/sounds/vocal-loop-ownit-wet-Cmin.mp3";
import vocalsUhC from "../../assets/sounds/vocal-loop-uh-C.mp3";
import vocalsPhrase from "../../assets/sounds/vocal-phrase-almost-Cmin.mp3";
import { Track } from "../models/Track.model";

export const tracks: Track[] = [
  {
    id: 1,
    title: "Bass",
    path: [bassC1, bassCm2, bassC3, bassC4, bassCm5],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#166d3b",
  },
  {
    id: 2,
    title: "Drums",
    path: [drum, drums2],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#04619f",
  },
  {
    id: 3,
    title: "Shaker",
    path: [shaker],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#923cb5",
  },
  {
    id: 4,
    title: "Guitar",
    path: [guitar],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#b82e1f",
  },
  {
    id: 5,
    title: "Saxophone",
    path: [sax],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#ff8851",
  },
  {
    id: 6,
    title: "Piano",
    path: [piano],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#f25f85",
  },
  {
    id: 7,
    title: "Vocals",
    path: [
      vocalsGetBack,
      vocalsCmin,
      vocalsOutOfMyLane,
      vocalsOwnIt,
      vocalsUhC,
      vocalsPhrase,
    ],
    currPlay: 0,
    isActive: true,
    isMute: false,
    volume: 1,
    color: "#5fdff2",
  },
];
