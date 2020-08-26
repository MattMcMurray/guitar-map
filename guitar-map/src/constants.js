export const FLAT = "♭";
export const SHARP = "♯";

export const TUNINGS = {
  Standard: "E,A,D,G,B,E",
  "Open G": "D,G,D,G,B,D",
  "Open D": `D,A,D,F${SHARP},A,D`,
  C6: "C,A,C,G,C,E",
  DADGAD: "D,A,D,G,A,D",
  FACGCE: "F,A,C,G,C,E",
  Cabbage: `C,A,B${FLAT},A,G,E`,
  Custom: ",,,,,",
};

export const NOTE_ORDER_FLATS = [
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
];

export const NOTE_ORDER_SHARPS = [
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
];

export const ALL_VALID_NOTE_INPUTS = [
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
]