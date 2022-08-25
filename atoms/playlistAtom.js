import {atom} from "recoil";


export const playlistIdState = atom({
    key: 'playlistIdState',
    default:'0rQlXYajG4mLF12F7M4ON5',
  });


export const songIdState = atom({
  key: 'songIdState',
  default:'0rQlXYajG4mLF12F7M4ON5',
});



export const playlistState = atom({
  key:  "playlistState",
  default: "null",
});

export const audioFeaturesState = atom({
  key:  "audioFeaturesState",
  default: "null",
});