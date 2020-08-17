import React from "react";
import { useSelector } from "react-redux";

export function Fret(props) {
  const { notes } = useSelector((state) => state.controls);
  const isSelected = notes[props.children] ? notes[props.children]["state"] : false;
  const defaultColour = "#f6ffed";
  const defaultColourDarker = "#d9f7be";

  return (
    <div
      style={{
        backgroundColor: isSelected ? notes[props.children]["colour"] : defaultColour,
        height: "50px",
        width: props.width,
        border: `1px ${defaultColourDarker} solid`,
        color: isSelected ? "white" : "black",
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
