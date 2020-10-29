const {
  ALL_VALID_NOTES,
  FLAT,
  NATURAL,
  NOTES,
  SHARP,
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

const validateNote = (note) => {
  return ALL_VALID_NOTES.includes(note.toUpperCase());
};

/**
 * Given a major key, return the relative minor key
 *
 * @param {string} key the major key
 */
const getRelativeMinor = (key) => {
  if (!validateNote(key)) {
    throw new Error(`Input key (\"${key}\") is not valid)`);
  }

  const noteIndex = circleOfFifthsMajors.indexOf(key.toUpperCase());
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
 * Given a minor key, return the relative major key
 *
 * @param {string} key the major key
 */
const getRelativeMajor = (key) => {
  if (!validateNote(key)) {
    throw new Error(`Input key (\"${key}\") is not valid)`);
  }

  const noteIndex = circleOfFifthsMajors.indexOf(key.toUpperCase());
  const relMajorIndex = noteIndex - 3;

  let relMinor;
  if (relMajorIndex < 0) {
    relMinor =
      circleOfFifthsMajors[circleOfFifthsMajors.length + relMajorIndex];
  } else {
    relMinor = circleOfFifthsMajors[relMajorIndex];
  }

  return relMinor;
};

/**
 * Given a key, return all the notes in its scale in order
 *
 * @param {string} key
 */
const getMajorScale = (key) => {
  if (!validateNote(key)) {
    throw new Error(`Input key (\"${key}\") is not valid)`);
  }

  // TODO: choose usage of FLAT/SHARP for accidentals dynamically
  // e.g., Eb and D# are technically the same, but represented differently

  const upperKey = key.toUpperCase();

  const rootIndex = NOTES.findIndex(
    (n) =>
      n.note.natural === upperKey ||
      n.note.sharp === upperKey ||
      n.note.flat === upperKey
  );

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

const getMinorScale = (key) => {
  if (!validateNote(key)) {
    throw new Error(`Input key (\"${key}\") is not valid)`);
  }

  const relMajor = getRelativeMajor(key);
  const majorScale = getMajorScale(relMajor).split(",");

  const sectionA = majorScale.slice(-2);
  const sectionB = majorScale.slice(0, -2);

  const minorScale = [...sectionA, ...sectionB];

  return minorScale.join(",");
};

module.exports = {
  getMajorScale,
  getMinorScale,
  getRelativeMajor,
  getRelativeMinor,
};
