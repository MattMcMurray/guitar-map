import React from "react";
import { String } from "./String";
import { Legend } from "./Legend";

export function Fretboard(props) {
  const tuning = props.tuning || "E,A,D,G,B,E";

  const strings = tuning.split(",").map(note => <String startingNote={note} />);
  return (
    <div>
      <Legend />
      {strings}
      <Legend />
    </div>
  );
}
