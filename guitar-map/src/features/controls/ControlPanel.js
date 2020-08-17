import React from "react";
import { Typography, Checkbox, Row, Col, Switch } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { toggleNote, toggleUseFlats } from "./controlSlice";

const { Paragraph } = Typography;

export function ControlPanel() {
  const dispatch = useDispatch();

  const { useFlats, notes } = useSelector((state) => state.controls);

  const sendToggleNote = (note) => {
    dispatch(toggleNote(note));
  };

  const noteButtons = Object.keys(notes).map((note) => {
    return (
      <Row gutter={6}>
        <Col span={8} style={{textAlign: "left"}}>
          <Checkbox
            style={{ color: "white" }}
            value={note}
            onClick={(e) => sendToggleNote(note)}
            checked={notes[note]["state"]}
          >
            {note}
          </Checkbox>
        </Col>
      </Row>
    );
  });

  return (
    <div>
      <Row gutter={4}>
        <Col span={8}>
          <Switch
            checkedChildren="♭"
            unCheckedChildren="♯"
            checked={useFlats}
            onClick={(e) => dispatch(toggleUseFlats())}
          />
        </Col>
        <Col span={12}>
          <Paragraph level={3} style={{ color: "white" }}>
            Sharps/Flats
          </Paragraph>
        </Col>
      </Row>
      {noteButtons}
    </div>
  );
}
