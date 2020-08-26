import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Form } from "antd";
import PropTypes from "prop-types";

import { ALL_VALID_NOTE_INPUTS } from "../../constants";

const DEFAULT_BG_COLOUR = "#f6ffed";
const DEFAULT_ERR_COLOUR = "#ff4d4f";
const DEFAULT_BORDER_COLOUR = "#d9f7be";

export function Fret(props) {
  const { notes } = useSelector((state) => state.controls);

  const [baseNoteValid, setBaseNoteValid] = useState(true);
  const [bgColour, setBgColour] = useState(
    props.overrideColour ? props.overrideColour : DEFAULT_BG_COLOUR
  );

  const isSelected = notes[props.children]
    ? notes[props.children]["state"]
    : false;

  const validateBaseNote = (value) => {
    if (
      !ALL_VALID_NOTE_INPUTS.includes(
        value.substring(0, 1).toUpperCase() + value.substring(1)
      )
    ) {
      setBaseNoteValid(false);
      setBgColour(DEFAULT_ERR_COLOUR);
    } else {
      setBaseNoteValid(true);
      setBgColour(
        props.overrideColour ? props.overrideColour : DEFAULT_BG_COLOUR
      );
    }
  };

  const onBaseNoteChange = (value) => {
    if (baseNoteValid) {
      props.onNoteChange(value);
    }
  };

  // TODO: break out editable fret into its own component
  return (
    <div
      style={{
        backgroundColor: isSelected
          ? notes[props.children]["colour"]
          : bgColour,
        height: "50px",
        width: props.width,
        border: `1px ${DEFAULT_BORDER_COLOUR} solid`,
        color: isSelected || props.overrideColour != null ? "white" : "black",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.editable ? (
        <Form>
          <Form.Item
            style={{ marginBottom: 0 }}
            validateStatus={baseNoteValid ? "success" : "error"}
          >
            <Input
              placeholder="?"
              bordered={false}
              value={props.children}
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
              }}
              onChange={(e) => validateBaseNote(e.target.value)}
              onBlur={(e) => onBaseNoteChange(e.target.value)}
              onPressEnter={(e) => onBaseNoteChange(e.target.value)}
            />
          </Form.Item>
        </Form>
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
