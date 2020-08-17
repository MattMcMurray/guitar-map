import React from 'react';
import { Fret } from './Fret';

export function Fretboard() {
    return (
        <div style={{display: "flex"}}>
            <Fret width="60px">A</Fret>
            <Fret width="55px">B</Fret>
            <Fret width="40px">C</Fret>
        </div>
    );
}