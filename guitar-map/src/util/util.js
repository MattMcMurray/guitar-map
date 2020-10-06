const { SHARP, FLAT, NATURAL_NOTES } = require("../constants");

// Clockwise from top
const circleOfFifthsMajors = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  `F${SHARP}`,
  `D${FLAT}`,
  `A${FLAT}`,
  `E${FLAT}`,
  `B${FLAT}`,
  "F",
];

/**
 * Given a major key, return the relative minor key
 *
 * @param {string} key the major key
 */
const getRelativeMinor = (key) => {
  const noteIndex = circleOfFifthsMajors.indexOf(key.toUpperCase());

  if (noteIndex < 0) {
    throw new Error(`Input key ("${key}") was not valid`);
  }

  const relMinorIndex = noteIndex + 3;

  let relMinor;
  if (relMinorIndex > circleOfFifthsMajors.length) {
    relMinor =
      circleOfFifthsMajors[relMinorIndex - circleOfFifthsMajors.length];
  } else {
    relMinor = circleOfFifthsMajors[relMinorIndex];
  }

  return relMinor;
};

/**
 * Given a key, return all the notes in its scale in order
 *
 * @param {string} key
 */
const getMajorScale = (key) => {
  // TODO: this needs to work with accidentals
  const keyIndex = circleOfFifthsMajors.indexOf(key.toUpperCase());
  let sharps = ["F", ...circleOfFifthsMajors.slice(0, keyIndex)];
  sharps.pop();

  const scale = buildNaturalNoteScale(key).map((note) =>
    sharps.includes(note) ? `${note}${SHARP}` : note
  );

  return scale.join(",");
};

/**
 * Builds a "scale" consisting of only natural notes, beginning at the given note
 * @param {string} note
 */
const buildNaturalNoteScale = (note) => {
  const scale = [];

  let noteIndex = NATURAL_NOTES.indexOf(note.toUpperCase());
  if (noteIndex < 0) {
    throw new Error(`Input note ("${note}") is not valid`);
  }

  while (scale.length < 7) {
    scale.push(NATURAL_NOTES[noteIndex]);

    if (noteIndex === NATURAL_NOTES.length - 1) {
      noteIndex = 0;
    } else {
      noteIndex++;
    }
  }

  return scale;
};

module.exports = {
  getRelativeMinor,
  getMajorScale,
  buildNaturalNoteScale,
};
