import ISong from "../shared/interfaces/ISong";
const songPool: ISong[] = [
  {
    booknumber: 1,
    bookOrder: 1,
    playingOrder: 1,
    name: "Twinkles"
  },
  {
    booknumber: 1,
    bookOrder: 2,
    playingOrder: 2,
    name: "Lightly Row"
  },
  {
    booknumber: 1,
    bookOrder: 3,
    playingOrder: 3,
    name: "Song of the Wind"
  },
  {
    booknumber: 1,
    bookOrder: 4,
    playingOrder: 4,
    name: "Go Tell Aunt Rhody"
  },
  {
    booknumber: 1,
    bookOrder: 5,
    playingOrder: 5,
    name: "O Come Little Children"
  },
  {
    booknumber: 1,
    bookOrder: 6,
    playingOrder: 6,
    name: "May Song"
  },
  {
    booknumber: 1,
    bookOrder: 7,
    playingOrder: 7,
    name: "Long Long Ago"
  },
  {
    booknumber: 1,
    bookOrder: 8,
    playingOrder: 8,
    name: "Allegro"
  },
  {
    booknumber: 1,
    bookOrder: 9,
    playingOrder: 9,
    name: "Perpetual Motion"
  },
  {
    booknumber: 1,
    bookOrder: 10,
    playingOrder: 10,
    name: "Allegretto"
  },
  {
    booknumber: 1,
    bookOrder: 11,
    playingOrder: 11,
    name: "Andantino"
  },
  {
    booknumber: 1,
    bookOrder: 12,
    playingOrder: 12,
    name: "Etude"
  },
  {
    booknumber: 1,
    bookOrder: 13,
    playingOrder: 13,
    name: "Minuet 1"
  },
  {
    booknumber: 1,
    bookOrder: 14,
    playingOrder: 14,
    name: "Minuet 2"
  },
  {
    booknumber: 1,
    bookOrder: 15,
    playingOrder: 15,
    name: "Minuet 3"
  },
  {
    booknumber: 1,
    bookOrder: 16,
    playingOrder: 16,
    name: "Happy Farmer"
  },
  {
    booknumber: 1,
    bookOrder: 17,
    playingOrder: 17,
    name: "Gavotte"
  }
];

export let songPoolAutoSelect = [] as any;
songPool.forEach((piece, index) => {
  songPoolAutoSelect[index] = {
    value: piece,
    label: piece.bookOrder + ". " + piece.name
  };
});

export default songPool;
