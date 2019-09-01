import ISong from "../interfaces/ISong";

export const compareSongs = (a: ISong, b: ISong) => {
  if (a === null || b === null) {
    return 0;
  }
  if (a.playingOrder < b.playingOrder) {
    return -1;
  }
  if (a.playingOrder > b.playingOrder) {
    return 1;
  }
  return 0;
};
