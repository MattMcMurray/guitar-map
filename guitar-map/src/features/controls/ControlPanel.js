import React from 'react';
import { Button, Checkbox, Row, Col, Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux'

import { toggleNote, toggleUseFlats } from './controlSlice';

export function ControlPanel() {
    const dispatch = useDispatch();

    const { useFlats, notes } = useSelector(state => state.controls);

    const sendToggleNote = note => {
        dispatch(
            toggleNote(note)
        );
    }

    const noteButtons = Object.keys(notes).map(note => {
        return (
            <Row gutter={6}>
                <Col>
                    <Checkbox
                        style={{ color: "white" }}
                        value={note}
                        onClick={e => sendToggleNote(note)}
                        checked={notes[note]}
                    >
                        {note}
                    </Checkbox>
                </Col>
            </Row>
        );
    });

    return (
        <div>
            <Row gutter={6}>
                <Col>
                    <Switch
                        checkedChildren="♭"
                        unCheckedChildren="♯"
                        checked={useFlats}
                        onClick={e => dispatch(toggleUseFlats())}
                    />
                </Col>
            </Row>
            {noteButtons}
        </div>
    );
}