import React from "react";
import { Typography, Checkbox, Row, Col, Switch, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { toggleNote, toggleUseFlats, updateTuning } from "./controlSlice";

const { Paragraph } = Typography;
const { Option } = Select;

const tunings = {
  Standard: "E,A,D,G,B,E",
  "Open G": "D,G,D,G,B,D",
  "Open D": "D,A,D,F♯,A,D",
  C6: "C,A,C,G,C,E",
  DADGAD: "D,A,D,G,A,D",
  FACGCE: "F,A,C,G,C,E",
};

export function ControlPanel(props) {
  const dispatch = useDispatch();

  const { useFlats, notes } = useSelector((state) => state.controls);

  const dispatchToggleNote = (note) => {
    dispatch(toggleNote(note));
  };

  const noteControls = Object.keys(notes).map((note) => {
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
              onChange={(tuning) => dispatch(updateTuning(tunings[tuning]))}
            >
              {Object.keys(tunings).map((tuning) => (
                <Option key={tuning} value={tuning}>
                  {tuning}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      ) : null}
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
      <Row style={{ marginBottom: "16px" }}>
        {props.expandControls ? (
          <Col span={24}>
            <Paragraph style={{ color: "white" }}>Notes:</Paragraph>
          </Col>
        ) : null}
        {noteControls}
      </Row>
    </div>
  );
}
