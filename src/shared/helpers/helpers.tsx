import ISong from "../interfaces/ISong";

export const compareSongs = (a: ISong, b: ISong) => {
  if (a === null || b === null) {
    return 0;
  }
  if (a.bookOrder < b.bookOrder) {
    return -1;
  }
  if (a.bookOrder > b.bookOrder) {
    return 1;
  }
  return 0;
};
