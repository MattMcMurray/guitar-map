import React from "react";
import { Fret } from "./Fret";


export function Legend(props) {
  // Could render in a loop, but I _think_ this might be more efficient for re-rendering
  // Hopefully, this should never need to be changed......
  return (
    <div style={{ display: "flex" }}>
      <Fret overrideColour="#262626" width={"60px"}></Fret>
      <Fret overrideColour="#262626" width={"59px"}></Fret>
      <Fret overrideColour="#262626" width={"58px"}></Fret>
      <Fret overrideColour="#262626" width={"57px"}>III</Fret>
      <Fret overrideColour="#262626" width={"56px"}></Fret>
      <Fret overrideColour="#262626" width={"55px"}>V</Fret>
      <Fret overrideColour="#262626" width={"54px"}></Fret>
      <Fret overrideColour="#262626" width={"53px"}>VII</Fret>
      <Fret overrideColour="#262626" width={"52px"}></Fret>
      <Fret overrideColour="#262626" width={"51px"}>IX</Fret>
      <Fret overrideColour="#262626" width={"50px"}></Fret>
      <Fret overrideColour="#262626" width={"49px"}></Fret>
      <Fret overrideColour="#262626" width={"48px"}>XII</Fret>
      <Fret overrideColour="#262626" width={"47px"}></Fret>
      <Fret overrideColour="#262626" width={"46px"}></Fret>
      <Fret overrideColour="#262626" width={"45px"}>XV</Fret>
      <Fret overrideColour="#262626" width={"44px"}></Fret>
      <Fret overrideColour="#262626" width={"43px"}>XVII</Fret>
      <Fret overrideColour="#262626" width={"42px"}></Fret>
      <Fret overrideColour="#262626" width={"41px"}>XIX</Fret>
      <Fret overrideColour="#262626" width={"40px"}></Fret>
      <Fret overrideColour="#262626" width={"39px"}>XXI</Fret>
    </div>
  );
}
