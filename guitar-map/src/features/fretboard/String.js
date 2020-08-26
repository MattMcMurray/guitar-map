import React from "react";
import { Tooltip } from "antd";
import { useSelector } from "react-redux";
import { Fret } from "./Fret";
import PropTypes from "prop-types";
import { NOTE_ORDER_SHARPS, NOTE_ORDER_FLATS } from "../../constants";

const NUM_FRETS = 21;
const BASE_FRET_WIDTH = 60;

export function String(props) {
  const { useFlats } = useSelector((state) => state.controls);

  let noteOrder =
    useFlats ||
    (props.startingNote.includes("♭") && !props.startingNote.includes("♯"))
      ? NOTE_ORDER_FLATS
      : NOTE_ORDER_SHARPS;
  let index = noteOrder.indexOf(props.startingNote);
  let frets = [];

  for (let i = 0; i <= NUM_FRETS; i++) {
    if (props.startingNote !== "") {
      // A base note is defined; render string
      if (i === 0) {
        frets.push(
          <Fret
            key={`${noteOrder[index]}-${i}`}
            overrideColour="#262626"
            width={`${BASE_FRET_WIDTH - i}px`}
          >
            {noteOrder[index]}
          </Fret>
        );
      } else {
        frets.push(
          <Fret
            key={`${noteOrder[index]}-${i}`}
            width={`${BASE_FRET_WIDTH - i}px`}
          >
            {noteOrder[index]}
          </Fret>
        );
      }

      if (index === noteOrder.length - 1) {
        index = 0;
      } else {
        index++;
      }
    } else {
      // Custom tuning was selected; render input at base and empty frets following it
      if (i === 0) {
        frets.push(
          <Tooltip
            title="Enter a note here"
            placement="right"
            defaultVisible={props.showEditableHelp}
            key={i}
          >
            <Fret
              key={i}
              overrideColour="#262626"
              width={`${BASE_FRET_WIDTH - i}px`}
              editable={true}
              onNoteChange={props.onBaseNoteChange}
            >
              {noteOrder[index]}
            </Fret>
          </Tooltip>
        );
      }
    }
  }

  return <div style={{ display: "flex" }}>{frets}</div>;
}

String.propTypes = {
  startingNote: PropTypes.string,
  showEditableHelp: PropTypes.bool,
  onBaseNoteChange: PropTypes.func.isRequired,
};
