import React from "react";
import { useSelector } from "react-redux";
import { Fret } from "./Fret";


const NUM_FRETS = 21;
const BASE_FRET_WIDTH = 60;

// TODO: refactor this out somewhere else
const noteOrderFlats = [
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

const noteOrderSharps = [
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


export function String(props) {
  const { useFlats } = useSelector((state) => state.controls);
  let noteOrder = useFlats ? noteOrderFlats : noteOrderSharps;
  let index = noteOrder.indexOf(props.startingNote);
  let frets = [];

  for (let i = 0; i <= NUM_FRETS; i++) {
    frets.push(
      <Fret width={`${BASE_FRET_WIDTH - i}px`}>{noteOrder[index]}</Fret>
    );

    if (index === noteOrder.length - 1) {
      index = 0;
    } else {
      index++;
    }
  }

  return <div style={{ display: "flex" }}>{frets}</div>;
}
