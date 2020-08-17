import React from "react";
import { Typography, Checkbox, Row, Col, Switch, Select, Divider} from "antd";
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
};

export function ControlPanel() {
  const dispatch = useDispatch();

  const { useFlats, notes } = useSelector((state) => state.controls);

  const dispatchToggleNote = (note) => {
    dispatch(toggleNote(note));
  };

  const noteButtons = Object.keys(notes).map((note) => {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "left" }}>
          <Checkbox
            style={{ color: "white" }}
            value={note}
            onClick={(e) => dispatchToggleNote(note)}
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
      <Row>
        <Col span={24} style={{textAlign: "left"}}>
        <Paragraph style={{color: "white"}}>Tuning:</Paragraph>
        </Col>
        <Col span={24}>
          <Select
            defaultValue="Standard"
            style={{ width: "100%" }}
            onChange={(tuning) => dispatch(updateTuning(tunings[tuning]))}
          >
            {Object.keys(tunings).map((tuning) => (
              <Option value={tuning}>{tuning}</Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Divider style={{color:" white"}} />
      <Row>
        <Col span={16} style={{textAlign: "left"}}>
          <Paragraph level={3} style={{ color: "white" }}>
            Flats/Sharps
          </Paragraph>
        </Col>
        <Col span={8}>
          <Switch
            checkedChildren="♭"
            unCheckedChildren="♯"
            checked={useFlats}
            onClick={(e) => dispatch(toggleUseFlats())}
          />
        </Col>
      </Row>
      <Divider />
      {noteButtons}
    </div>
  );
}
