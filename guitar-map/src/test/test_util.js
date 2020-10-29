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
        'Input key ("gobbledeegook") is not valid'
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
      assert.strictEqual(
        util.getMajorScale("d"),
        `D,E,F${SHARP},G,A,B,C${SHARP}`
      );
    });

    it("should return the A major scale", () => {
      assert.strictEqual(
        util.getMajorScale("A"),
        `A,B,C${SHARP},D,E,F${SHARP},G${SHARP}`
      );
    });

    it("should return the E major scale", () => {
      assert.strictEqual(
        util.getMajorScale("E"),
        `E,F${SHARP},G${SHARP},A,B,C${SHARP},D${SHARP}`
      );
    });

    it("should return the B major scale", () => {
      assert.strictEqual(
        util.getMajorScale("B"),
        `B,C${SHARP},D${SHARP},E,F${SHARP},G${SHARP},A${SHARP}`
      );
    });

    it(`should return the F${SHARP} major scale`, () => {
      assert.strictEqual(
        util.getMajorScale(`F${SHARP}`),
        `F${SHARP},G${SHARP},A${SHARP},B,C${SHARP},D${SHARP},F`
      );
    });

    it(`should return the D${FLAT} major scale`, () => {
      assert.strictEqual(
        util.getMajorScale(`D${FLAT}`),
        `D${FLAT},E${FLAT},F,G${FLAT},A${FLAT},B${FLAT},C`
      );
    });

    it(`should return the A${FLAT} major scale`, () => {
      assert.strictEqual(
        util.getMajorScale(`A${FLAT}`),
        `A${FLAT},B${FLAT},C,D${FLAT},E${FLAT},F,G`
      );
    });

    it(`should return the E${FLAT} major scale`, () => {
      assert.strictEqual(
        util.getMajorScale(`E${FLAT}`),
        `E${FLAT},F,G,A${FLAT},B${FLAT},C,D`
      );
    });

    it(`should return the B${FLAT} major scale`, () => {
      assert.strictEqual(
        util.getMajorScale(`B${FLAT}`),
        `B${FLAT},C,D,E${FLAT},F,G,A`
      );
    });

    it("should return the F major scale", () => {
      assert.strictEqual(util.getMajorScale("F"), `F,G,A,B${FLAT},C,D,E`);
    });

    it("should throw an error on invalid input", () => {
      assert.throws(
        () => util.getMajorScale("gobbledeegook"),
        Error,
        'Input key ("gobbledeegook") is not valid'
      );
    });
  });
});
