import ISong from "../shared/interfaces/ISong";
const bookOne: ISong[] = [
  {
    bookOrder: 1,
    playingOrder: 1,
    name: "Twinkles"
  },
  {
    bookOrder: 2,
    playingOrder: 2,
    name: "Lightly Row"
  },
  {
    bookOrder: 3,
    playingOrder: 3,
    name: "Song of the Wind"
  },
  {
    bookOrder: 4,
    playingOrder: 4,
    name: "Go Tell Aunt Rhody"
  },
  {
    bookOrder: 5,
    playingOrder: 5,
    name: "O Come Little Children"
  },
  {
    bookOrder: 6,
    playingOrder: 6,
    name: "May Song"
  },
  {
    bookOrder: 7,
    playingOrder: 7,
    name: "Long Long Ago"
  },
  {
    bookOrder: 8,
    playingOrder: 8,
    name: "Allegro"
  },
  {
    bookOrder: 9,
    playingOrder: 9,
    name: "Perpetual Motion"
  },
  {
    bookOrder: 10,
    playingOrder: 10,
    name: "Allegretto"
  },
  {
    bookOrder: 11,
    playingOrder: 11,
    name: "Andantino"
  },
  {
    bookOrder: 12,
    playingOrder: 12,
    name: "Etude"
  },
  {
    bookOrder: 13,
    playingOrder: 13,
    name: "Minuet 1"
  },
  {
    bookOrder: 14,
    playingOrder: 14,
    name: "Minuet 2"
  },
  {
    bookOrder: 15,
    playingOrder: 15,
    name: "Minuet 3"
  },
  {
    bookOrder: 16,
    playingOrder: 16,
    name: "Happy Farmer"
  },

  {
    bookOrder: 17,
    playingOrder: 17,
    name: "Gavotte"
  }
];

export let bookOneAutoSelect = [] as any;
bookOne.forEach((piece, index) => {
  bookOneAutoSelect[index] = {
    value: piece,
    label: piece.bookOrder + ". " + piece.name
  };
});

export default bookOne;
