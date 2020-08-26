import React from "react";
import { String } from "./String";
import { Legend } from "./Legend";
import { useDispatch } from "react-redux";
import { updateCustomTuning } from "../controls/controlSlice";

export function Fretboard(props) {
  const dispatch = useDispatch();

  const tuning = props.tuning || "E,A,D,G,B,E";

  const onCustomBaseNoteChange = (note, i) => {
    dispatch(updateCustomTuning({ note, index: i }));
  };

  const strings = tuning
    .split(",")
    .map((note, i) => (
      <String
        startingNote={note}
        key={`${note}-${i}`}
        showEditableHelp={i === 5}
        onBaseNoteChange={(note) => onCustomBaseNoteChange(note, i)}
      />
    ))
    .reverse(); // by convention tunings are listed top-to-bottom, but we need to display bottom to top
  return (
    <div>
      <Legend />
      {strings}
      <Legend />
    </div>
  );
}
