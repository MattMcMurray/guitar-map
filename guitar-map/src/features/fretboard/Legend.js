import React from "react";
import { Fret } from "./Fret";

export function Legend(props) {
  // Could render in a loop, but I _think_ this might be more efficient for re-rendering
  // Hopefully, this should never need to be changed......
  return (
    <div style={{ display: "flex" }}>
      <Fret width={"60px"}></Fret>
      <Fret width={"59px"}></Fret>
      <Fret width={"58px"}></Fret>
      <Fret width={"57px"}>III</Fret>
      <Fret width={"56px"}></Fret>
      <Fret width={"55px"}>V</Fret>
      <Fret width={"54px"}></Fret>
      <Fret width={"53px"}>VII</Fret>
      <Fret width={"52px"}></Fret>
      <Fret width={"51px"}>IX</Fret>
      <Fret width={"50px"}></Fret>
      <Fret width={"49px"}></Fret>
      <Fret width={"48px"}>XII</Fret>
      <Fret width={"47px"}></Fret>
      <Fret width={"46px"}></Fret>
      <Fret width={"45px"}>XV</Fret>
      <Fret width={"44px"}></Fret>
      <Fret width={"43px"}>XVII</Fret>
      <Fret width={"42px"}></Fret>
      <Fret width={"41px"}>XIX</Fret>
      <Fret width={"40px"}></Fret>
      <Fret width={"39px"}>XXI</Fret>
    </div>
  );
}
