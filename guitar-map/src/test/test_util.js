const { assert, expect } = require("chai");

const util = require("../util/util");
const { FLAT, SHARP } = require("../constants");

describe("Util", () => {
  describe("getRelativeMinor", () => {
    it("should return A when the major is C", () => {
      assert.strictEqual(util.getRelativeMinor("C"), "A");
    });

    it("should return D when the major is F (wrap around array)", () => {
      assert.strictEqual(util.getRelativeMinor("F"), "D");
    });

    it("should work with a lowercase input", () => {
      assert.strictEqual(util.getRelativeMinor("f"), "D");
    });

    it("should throw an error when input is invalid", () => {
      assert.throws(
        () => util.getRelativeMinor("gobbledeegook"),
        Error,
        'Input key ("gobbledeegook") was not valid'
      );
    });
  });

  describe("getMajorScale", () => {
    it("should return the C major scale", () => {
      assert.strictEqual(util.getMajorScale("C"), `C,D,E,F,G,A,B`);
    });

    it("should return the G major scale", () => {
      assert.strictEqual(util.getMajorScale("g"), `G,A,B,C,D,E,F${SHARP}`);
    });

    it("should return the D major scale", () => {
      assert.strictEqual(util.getMajorScale("d"), `D,E,F${SHARP},G,A,B,C${SHARP}`);
    });

    it("should return the A major scale", () => {
      assert.strictEqual(util.getMajorScale("A"), `A,B,C${SHARP},D,E,F${SHARP},G${SHARP}`);
    });

    it("should return the E major scale", () => {
      assert.strictEqual(util.getMajorScale("E"), `E,F${SHARP},G${SHARP},A,B,C${SHARP},D${SHARP}`);
    });

    it("should return the B major scale", () => {
      assert.strictEqual(util.getMajorScale("B"), `B,C${SHARP},D${SHARP},E,F${SHARP},G${SHARP},A${SHARP}`);
    });

    it(`should return the F${SHARP} major scale`, () => {
      assert.strictEqual(util.getMajorScale(`F${SHARP}`), `F${SHARP},G${SHARP},A${SHARP},B,C${SHARP},D${SHARP},E${SHARP}`);
    });
  });

  describe("buildNaturalNoteScale", () => {
    it("should return a list of natural notes, starting from A", () => {
      expect(util.buildNaturalNoteScale("a")).to.eql([
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
      ]);
    });

    it("should return a list of natural notes, starting from E", () => {
      expect(util.buildNaturalNoteScale("e")).to.eql([
        "E",
        "F",
        "G",
        "A",
        "B",
        "C",
        "D",
      ])
    });

    it("should throw an error when given bad input", () => {
      assert.throws(
        () => util.buildNaturalNoteScale("gobbledeegook"),
        Error,
        'Input note ("gobbledeegook") is not valid'
      );
    });
  });
});
