import React from "react";
import { String } from "./String";
import { Legend } from "./Legend";

export function Fretboard(props) {
  const tuning = props.tuning || "E,A,D,G,B,E";

  const strings = tuning
    .split(",")
    .reverse() // since tunings are listed top-to-bottom, but we need to display bottom to top
    .map((note) => <String startingNote={note} />);
  return (
    <div>
      <Legend />
      {strings}
      <Legend />
    </div>
  );
}
