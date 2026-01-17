const { assert, expect } = require("chai");
const { add, subtract, multiply, divide } = require("../lib/mylib.js");
const { printHeader, printFooter } = require("../lib/myprintlib.js");

describe("MyLib - Test Suite", () => {
  
  // Print test header before all tests
  before(() => {
    printHeader("RUNNING UNIT TESTS", "🚀");
  });
  
  // Print test footer after all tests
  after(() => {
    printFooter("UNIT TESTS FINISHED!", "🏁");
  });
  
  describe("Testing function add()", () => {
    it("should add two positive numbers correctly", () => {
      assert.equal(add(2, 3), 5);
      assert.equal(add(10, 20), 30);
      assert.equal(add(100, 250), 350);
    });

    it("should add two negative numbers correctly", () => {
      assert.equal(add(-2, -3), -5);
      assert.equal(add(-10, -5), -15);
    });

    it("should add positive and negative numbers correctly", () => {
      assert.equal(add(5, -3), 2);
      assert.equal(add(-10, 5), -5);
    });

    it("should add decimal numbers correctly", () => {
      assert.equal(add(3.14, 2.86), 6);
      assert.equal(add(0.1, 0.2).toFixed(1), "0.3");
    });

    it("should handle zero correctly", () => {
      assert.equal(add(0, 5), 5);
      assert.equal(add(5, 0), 5);
      assert.equal(add(0, 0), 0);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => add("b", 3), "Inputs must be numbers");
      assert.throws(() => add(2, "a"), "Inputs must be numbers");
      assert.throws(() => add("b", "a"), "Inputs must be numbers");
      assert.throws(() => add(null, 3), "Inputs must be numbers");
      assert.throws(() => add(2, undefined), "Inputs must be numbers");
      assert.throws(() => add({}, 3), "Inputs must be numbers");
      assert.throws(() => add([], 3), "Inputs must be numbers");
    });
  });

  describe("Testing function subtract()", () => {
    it("should subtract two positive numbers correctly", () => {
      expect(subtract(10, 4)).to.equal(6);
      expect(subtract(100, 75)).to.equal(25);
      expect(subtract(50, 20)).to.equal(30);
    });

    it("should subtract two negative numbers correctly", () => {
      expect(subtract(-10, -4)).to.equal(-6);
      expect(subtract(-5, -3)).to.equal(-2);
    });

    it("should subtract positive and negative numbers correctly", () => {
      expect(subtract(5, -3)).to.equal(8);
      expect(subtract(-10, 5)).to.equal(-15);
    });

    it("should subtract decimal numbers correctly", () => {
      expect(subtract(10.5, 3.2)).to.equal(7.3);
      expect(subtract(5.5, 2.5)).to.equal(3);
    });

    it("should handle zero correctly", () => {
      expect(subtract(5, 0)).to.equal(5);
      expect(subtract(0, 5)).to.equal(-5);
      expect(subtract(0, 0)).to.equal(0);
    });

    it("should allow result to be negative", () => {
      expect(subtract(5, 10)).to.equal(-5);
      expect(subtract(3, 8)).to.equal(-5);
    });

    it("should throw an error if inputs are not numbers", () => {
      expect(() => subtract("10", 4)).to.throw("Inputs must be numbers");
      expect(() => subtract(10, "4")).to.throw("Inputs must be numbers");
      expect(() => subtract(null, 4)).to.throw("Inputs must be numbers");
      expect(() => subtract(10, undefined)).to.throw("Inputs must be numbers");
      expect(() => subtract({}, [])).to.throw("Inputs must be numbers");
    });
  });

  describe("Testing function multiply()", () => {
    it("should multiply two positive numbers correctly", () => {
      assert.equal(multiply(6, 7), 42);
      assert.equal(multiply(12, 12), 144);
      assert.equal(multiply(5, 5), 25);
    });

    it("should multiply two negative numbers correctly", () => {
      assert.equal(multiply(-5, -3), 15);
      assert.equal(multiply(-2, -4), 8);
    });

    it("should multiply positive and negative numbers correctly", () => {
      assert.equal(multiply(-5, 3), -15);
      assert.equal(multiply(4, -2), -8);
    });

    it("should multiply decimal numbers correctly", () => {
      assert.equal(multiply(2.5, 4), 10);
      assert.equal(multiply(3.5, 2), 7);
    });

    it("should handle zero correctly", () => {
      assert.equal(multiply(5, 0), 0);
      assert.equal(multiply(0, 5), 0);
      assert.equal(multiply(0, 0), 0);
    });

    it("should handle multiplication by one", () => {
      assert.equal(multiply(5, 1), 5);
      assert.equal(multiply(1, 5), 5);
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => multiply("6", 7), "Inputs must be numbers");
      assert.throws(() => multiply(6, "7"), "Inputs must be numbers");
      assert.throws(() => multiply(null, 7), "Inputs must be numbers");
      assert.throws(() => multiply(6, undefined), "Inputs must be numbers");
      assert.throws(() => multiply(true, 7), "Inputs must be numbers");
    });
  });

  describe("Testing function divide()", () => {
    it("should divide two positive numbers correctly", () => {
      assert.equal(divide(15, 3), 5);
      assert.equal(divide(100, 4), 25);
      assert.equal(divide(50, 2), 25);
    });

    it("should divide two negative numbers correctly", () => {
      assert.equal(divide(-15, -3), 5);
      assert.equal(divide(-20, -4), 5);
    });

    it("should divide positive and negative numbers correctly", () => {
      assert.equal(divide(-15, 3), -5);
      assert.equal(divide(20, -4), -5);
    });

    it("should handle decimal results correctly", () => {
      assert.equal(divide(7, 2), 3.5);
      assert.equal(divide(10, 3).toFixed(2), "3.33");
    });

    it("should handle zero dividend correctly", () => {
      assert.equal(divide(0, 5), 0);
      assert.equal(divide(0, 100), 0);
    });

    it("should handle division by one", () => {
      assert.equal(divide(5, 1), 5);
      assert.equal(divide(100, 1), 100);
    });

    it("should throw an error when dividing by zero", () => {
      assert.throws(() => divide(10, 0), "Division by zero");
      assert.throws(() => divide(5, 0), "Division by zero");
      assert.throws(() => divide(0, 0), "Division by zero");
      assert.throws(() => divide(-10, 0), "Division by zero");
    });

    it("should throw an error if inputs are not numbers", () => {
      assert.throws(() => divide("15", 3), "Inputs must be numbers");
      assert.throws(() => divide(15, "3"), "Inputs must be numbers");
      assert.throws(() => divide(null, 3), "Inputs must be numbers");
      assert.throws(() => divide(15, undefined), "Inputs must be numbers");
      assert.throws(() => divide([], 3), "Inputs must be numbers");
    });
  });
});