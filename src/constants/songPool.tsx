import ISong from "../shared/interfaces/ISong";
const songPool: ISong[] = [
  {
    booknumber: 1,
    bookOrder: 1,
    playingOrder: 1,
    name: "Twinkles",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 2,
    playingOrder: 2,
    name: "Lightly Row",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 3,
    playingOrder: 3,
    name: "Song of the Wind",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 4,
    playingOrder: 4,
    name: "Go Tell Aunt Rhody",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 5,
    playingOrder: 5,
    name: "O Come Little Children",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 6,
    playingOrder: 6,
    name: "May Song",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 7,
    playingOrder: 7,
    name: "Long Long Ago",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 8,
    playingOrder: 8,
    name: "Allegro",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 9,
    playingOrder: 9,
    name: "Perpetual Motion",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 10,
    playingOrder: 10,
    name: "Allegretto",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 11,
    playingOrder: 11,
    name: "Andantino",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 12,
    playingOrder: 12,
    name: "Etude",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 13,
    playingOrder: 13,
    name: "Minuet 1",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 14,
    playingOrder: 14,
    name: "Minuet 2",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 15,
    playingOrder: 15,
    name: "Minuet 3",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 16,
    playingOrder: 16,
    name: "Happy Farmer",
    composer: null,
  },
  {
    booknumber: 1,
    bookOrder: 17,
    playingOrder: 17,
    name: "Gavotte",
    composer: null,
  },
  {
    booknumber: 2,
    bookOrder: 1,
    playingOrder: 18,
    name: "Chorus",
    composer: "Handel",
  },
  {
    booknumber: 2,
    bookOrder: 2,
    playingOrder: 19,
    name: "Musette",
    composer: "Bach",
  },
  {
    booknumber: 2,
    bookOrder: 3,
    playingOrder: 20,
    name: "Hunters' Chorus",
    composer: "Weber",
  },
  {
    booknumber: 2,
    bookOrder: 4,
    playingOrder: 21,
    name: "Long, Long Ago",
    composer: "Bayly",
  },
  {
    booknumber: 2,
    bookOrder: 5,
    playingOrder: 22,
    name: "Waltz",
    composer: "Brahms",
  },
  {
    booknumber: 2,
    bookOrder: 6,
    playingOrder: 23,
    name: "Bourrée",
    composer: "Handel",
  },
  {
    booknumber: 2,
    bookOrder: 7,
    playingOrder: 24,
    name: "The Two Grenadiers",
    composer: "Schumann",
  },
  {
    booknumber: 2,
    bookOrder: 8,
    playingOrder: 25,
    name: "Witches' Dance",
    composer: "Paganini",
  },
  {
    booknumber: 2,
    bookOrder: 9,
    playingOrder: 26,
    name: "Gavotte from Mignon",
    composer: "Thomas",
  },
  {
    booknumber: 2,
    bookOrder: 10,
    playingOrder: 27,
    name: "Gavotte",
    composer: "Lully",
  },
  {
    booknumber: 2,
    bookOrder: 11,
    playingOrder: 28,
    name: "Minuet in G",
    composer: "Beethoven",
  },
  {
    booknumber: 2,
    bookOrder: 12,
    playingOrder: 29,
    name: "Minuet",
    composer: "Boccherini",
  },
];

export interface ISongPoolAutoSelect {
  value: ISong;
  label: string;
}

export const songPoolAutoSelect = songPool.map((piece) => {
  const composer = piece.composer ? " (" + piece.composer + ")" : "";
  return {
    value: piece,
    label: piece.bookOrder + ". " + piece.name + composer,
  } as ISongPoolAutoSelect;
});

export default songPool;
