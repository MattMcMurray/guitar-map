import React, { useState } from "react";
import { Typography, Checkbox, Row, Col, Switch, Select, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleNote,
  clearNotes,
  toggleUseFlats,
  updateTuning,
} from "./controlSlice";

import { TUNINGS } from "../../constants";

const { Paragraph } = Typography;
const { Option } = Select;

export function ControlPanel(props) {
  const dispatch = useDispatch();

  const { useFlats, notes } = useSelector((state) => state.controls);
  const [showSharpFlatToggle, setShowSharpFlatToggle] = useState(true);

  const dispatchToggleNote = (note) => {
    dispatch(toggleNote(note));
  };

  const noteControls = Object.keys(notes).map((note, i) => {
    return (
      <Col
        key={note}
        span={props.expandControls ? 12 : 24}
        style={{ textAlign: "left" }}
      >
        <Checkbox
          style={{ color: "white" }}
          value={note}
          onClick={(e) => dispatchToggleNote(note)}
          checked={notes[note]["state"]}
        >
          {note}
        </Checkbox>
      </Col>
    );
  });

  return (
    <div
      style={{
        margin: "0 16px",
        textAlign: "left",
      }}
    >
      {props.expandControls ? (
        <Row style={{ marginBottom: "16px" }}>
          <Col span={24} style={{ textAlign: "left" }}>
            <Paragraph style={{ color: "white" }}>Tuning:</Paragraph>
          </Col>
          <Col span={24}>
            <Select
              defaultValue="Standard"
              style={{ width: "100%" }}
              onChange={(tuning) => {
                if (tuning === "Custom") {
                  setShowSharpFlatToggle(false);
                } else {
                  setShowSharpFlatToggle(true);
                }

                dispatch(updateTuning(TUNINGS[tuning]));
              }}
            >
              {Object.keys(TUNINGS).map((tuning) => (
                <Option key={tuning} value={tuning}>
                  {tuning}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      ) : null}
      {showSharpFlatToggle ? (
        <Row style={{ marginBottom: "16px" }}>
          {props.expandControls ? (
            <Col span={16}>
              <Paragraph level={3} style={{ color: "white" }}>
                Show Flats
              </Paragraph>
            </Col>
          ) : null}
          <Col span={8}>
            <Switch
              checkedChildren="♭"
              unCheckedChildren="♯"
              checked={useFlats}
              onClick={(e) => dispatch(toggleUseFlats())}
            />
          </Col>
        </Row>
      ) : null}
      <Row style={{ marginBottom: "16px" }}>
        {props.expandControls ? (
          <Col span={24}>
            <Paragraph style={{ color: "white" }}>Notes:</Paragraph>
          </Col>
        ) : null}
        {noteControls}
      </Row>
      <Row style={{ marginBottom: "16px" }}>
        <Col span={24}>
          <Button
            onClick={() => dispatch(clearNotes())}
            style={{ width: "100%" }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </div>
  );
}
