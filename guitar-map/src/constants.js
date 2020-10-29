const SHARP = "♯";
const FLAT = "♭";

const NATURAL = "natural";
const ACCIDENTAL = "accidental";

const NOTES = [
  {
    type: NATURAL,
    use: SHARP,
    note: {
      natural: "A",
    },
  },
  {
    type: ACCIDENTAL,
    use: FLAT,
    note: {
      sharp: `A${SHARP}`,
      flat: `B${FLAT}`,
    },
  },
  {
    type: NATURAL,
    use: SHARP,
    note: {
      natural: "B",
    },
  },
  {
    type: NATURAL,
    use: SHARP,
    note: {
      natural: "C",
    },
  },
  {
    type: ACCIDENTAL,
    use: FLAT,
    note: {
      sharp: `C${SHARP}`,
      flat: `D${FLAT}`,
    },
  },
  {
    type: NATURAL,
    use: SHARP,
    note: {
      natural: "D",
    },
  },
  {
    type: ACCIDENTAL,
    use: FLAT,
    note: {
      sharp: `D${SHARP}`,
      flat: `E${FLAT}`,
    },
  },
  {
    type: NATURAL,
    use: SHARP,
    note: {
      natural: "E",
    },
  },
  {
    type: NATURAL,
    use: FLAT,
    note: {
      natural: "F",
    },
  },
  {
    type: ACCIDENTAL,
    use: SHARP,
    note: {
      sharp: `F${SHARP}`,
      flat: `G${FLAT}`,
    },
  },
  {
    type: NATURAL,
    use: SHARP,
    note: {
      natural: "G",
    },
  },
  {
    type: ACCIDENTAL,
    use: FLAT,
    note: {
      sharp: `G${SHARP}`,
      flat: `A${FLAT}`,
    },
  },
];

module.exports = {
  FLAT,
  SHARP,
  TUNINGS: {
    Standard: "E,A,D,G,B,E",
    "Open G": "D,G,D,G,B,D",
    "Open D": `D,A,D,F${SHARP},A,D`,
    C6: "C,A,C,G,C,E",
    DADGAD: "D,A,D,G,A,D",
    FACGCE: "F,A,C,G,C,E",
    Cabbage: `C,A,B${FLAT},A,G,E`,
    Custom: ",,,,,",
  },
  NOTE_ORDER_FLATS: [
    "A♭",
    "A",
    "B♭",
    "B",
    "C",
    "D♭",
    "D",
    "E♭",
    "E",
    "F",
    "G♭",
    "G",
  ],

  NOTE_ORDER_SHARPS: [
    "A",
    "A♯",
    "B",
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
  ],

  ALL_VALID_NOTE_INPUTS: [
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ],
  ALL_VALID_NOTES: [
    `A${FLAT}`,
    `A`,
    `B${FLAT}`,
    `B`,
    `C`,
    `D${FLAT}`,
    `D`,
    `E${FLAT}`,
    `E`,
    `F`,
    `G${FLAT}`,
    `G`,
    `A`,
    `A${SHARP}`,
    `B`,
    `C`,
    `C${SHARP}`,
    `D`,
    `D${SHARP}`,
    `E`,
    `F`,
    `F${SHARP}`,
    `G`,
    `G${SHARP}`,
  ],
  NOTES,
  NATURAL,
  ACCIDENTAL,
};
