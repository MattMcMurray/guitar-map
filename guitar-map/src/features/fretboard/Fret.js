import React from "react";
import { useSelector } from "react-redux";
import { Input } from "antd";
import PropTypes from "prop-types";

export function Fret(props) {
  const { notes } = useSelector((state) => state.controls);
  const isSelected = notes[props.children]
    ? notes[props.children]["state"]
    : false;
  const defaultColour = props.overrideColour ? props.overrideColour : "#f6ffed";
  const borderColour = "#d9f7be";

  // TODO: break out editable fret into its own component
  return (
    <div
      style={{
        backgroundColor: isSelected
          ? notes[props.children]["colour"]
          : defaultColour,
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
      {props.editable ? (
        // TODO: add validation
        <Input
          placeholder="?"
          bordered={false}
          value={props.children}
          style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          onBlur={e => props.onNoteChange(e.target.value)}
          onPressEnter={e => props.onNoteChange(e.target.value)}
        />
      ) : (
        props.children
      )}
    </div>
  );
}

Fret.propTypes = {
  overrideColour: PropTypes.string,
  width: PropTypes.string,
  editable: PropTypes.bool,
  onNoteChange: PropTypes.func,
};
