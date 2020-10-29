const {
  SHARP,
  FLAT,
  NOTES,
  NATURAL,
} = require("../constants");

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

const WHOLE = "W";
const HALF = "H";

const MAJOR_SCALE_INTERVALS = [WHOLE, WHOLE, HALF, WHOLE, WHOLE, WHOLE];

/**
 * Given a major key, return the relative minor key
 *
 * @param {string} key the major key
 */
const getRelativeMinor = (key) => {
  const noteIndex = circleOfFifthsMajors.indexOf(key.toUpperCase());

  if (noteIndex < 0) {
    throw new Error(`Input key ("${key}") is not valid`);
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
  const upperKey = key.toUpperCase();

  const rootIndex = NOTES.findIndex(
    (n) =>
      n.note.natural === upperKey ||
      n.note.sharp === upperKey ||
      n.note.flat === upperKey
  );

  if (rootIndex < 0) {
    throw new Error(`Input key (\"${key}\") is not valid)`);
  }

  const root = NOTES[rootIndex];
  const scale = [upperKey];

  let interval = 0;
  for (let i = 0; i < MAJOR_SCALE_INTERVALS.length; i++) {
    switch (MAJOR_SCALE_INTERVALS[i]) {
      case WHOLE:
        interval += 2;
        break;
      case HALF:
        interval += 1;
        break;
    }

    const note = NOTES[(rootIndex + interval) % NOTES.length];

    if (note.type === NATURAL) {
      scale.push(note.note.natural);
    } else if (root.use === SHARP) {
      scale.push(note.note.sharp);
    } else {
      scale.push(note.note.flat);
    }
  }

  return scale.join(",");
};

module.exports = {
  getRelativeMinor,
  getMajorScale,
};
