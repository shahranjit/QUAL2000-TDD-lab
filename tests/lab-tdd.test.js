//imports
const {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
  } = require("../lab-TDD-starter");
  const { describe, test } = require("node:test");
  const assert = require("node:assert");
  
  ///////Suite and tests
  describe("lab-tdd test", () => {
    // Add function tests
    describe("Add function tests", () => {
      test("Add function should return 8 when adding 5 and 3", () => {
        assert.strictEqual(add(3, 5), 8);
      });
      test("Add function should return 0 when adding -5 and 5", () => {
        assert.strictEqual(add(-5, 5), 0);
      });
    });
  
    // Subtract function tests
    describe("Subtract function tests", () => {
      test("Subtract function should return 10 when subtracting 25 from 35", () => {
        assert.strictEqual(subtract(35, 25), 10);
      });
      test("Subtract function should return -20 when subtracting 15 from -5", () => {
        assert.strictEqual(subtract(-5, 15), -20);
      });
    });
  
    // Multiply function tests
    describe("Multiply function tests", () => {
      test("Multiply function should return 144 when multiplying 12 and 12", () => {
        assert.strictEqual(multiply(12, 12), 144);
      });
      test("Multiply function should return 0 when multiplying by 0", () => {
        assert.strictEqual(multiply(10, 0), 0);
      });
    });
  
    // Divide function tests
    describe("Divide function tests", () => {
      test("Divide function should return 4 when dividing 32 over 8", () => {
        assert.strictEqual(divide(32, 8), 4);
      });
      test("Zero division should throw an error", () => {
        assert.throws(() => divide(10, 0), Error);
      });
    });
  
    // Modulas function tests
    describe("Modulas function tests", () => {
      test("Modulas function should return 3 when finding 19 mod 4", () => {
        assert.strictEqual(modulas(19, 4), 3);
      });
      test("Modulas function should return 2 when finding 22 mod 5", () => {
        assert.strictEqual(modulas(22, 5), 2);
      });
    });
  
    // Power function tests
    describe("Power function tests", () => {
      test("Power function should return 64 when 4 is raised to the power of 3", () => {
        assert.strictEqual(power(4, 3), 64);
      });
      test("Power function should return 1 when any number is raised to the power of 0", () => {
        assert.strictEqual(power(7, 0), 1);
      });
    });
  
    // SquareRoot function tests
    describe("SquareRoot function tests", () => {
      test("SquareRoot function should return 6 when finding the square root of 36", () => {
        assert.strictEqual(squareRoot(36), 6);
      });
      test("SquareRoot function should throw an error when finding the square root of a negative number", () => {
        assert.throws(() => squareRoot(-9), Error);
      });
    });
  
    // Floor function tests
    describe("Floor function tests", () => {
      test("Floor function should return 4 when flooring 4.99", () => {
        assert.strictEqual(floor(4.99), 4);
      });
      test("Floor function should return -5 when flooring -4.14", () => {
        assert.strictEqual(floor(-4.14), -5);
      });
    });
  
    // Ceiling function tests
    describe("Ceiling function tests", () => {
      test("Ceiling function should return 17 when ceiling 16.3", () => {
        assert.strictEqual(ceiling(16.3), 17);
      });
      test("Ceiling function should return -14 when ceiling -14.9", () => {
        assert.strictEqual(ceiling(-14.9), -14);
      });
    });
  });
