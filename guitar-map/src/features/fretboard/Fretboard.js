import React from "react";
import { String } from "./String";
import { Legend } from "./Legend";

export function Fretboard() {
  return (
    <div>
      <String startingNote="E" />
      <String startingNote="B" />
      <String startingNote="G" />
      <String startingNote="D" />
      <String startingNote="A" />
      <String startingNote="E" />
      <Legend />
    </div>
  );
}
