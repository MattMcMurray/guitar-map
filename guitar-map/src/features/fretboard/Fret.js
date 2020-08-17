import React from "react";
import { useSelector } from "react-redux";

export function Fret(props) {
  const { notes } = useSelector((state) => state.controls);
  const isSelected = notes[props.children] ? notes[props.children]["state"] : false;
  const defaultColour = props.overrideColour ? props.overrideColour : "#f6ffed";
  const borderColour = "#d9f7be";

  return (
    <div
      style={{
        backgroundColor: isSelected ? notes[props.children]["colour"] : defaultColour,
        height: "50px",
        width: props.width,
        border: `1px ${borderColour} solid`,
        color: isSelected || props.overrideColour != null ? "white" : "black",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
}
