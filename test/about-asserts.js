import {assert} from "chai";
import {__} from "../src/helpers";

describe("About Asserts", () => {

  // We shall contemplate truth by testing reality, via asserts
  it("Test assert truth", () => {
    assert.isTrue(false); // This should be true
  });

  // Enlightenment may be more easily achieved with appropriate
  // messages.
  it("Test assert with message", () => {
    assert.isTrue(false, "This should be true -- Please fix this");
  });

  // To understand reality, we must compare our expectations against
  // reality.
  it("Test assert equality", () => {
    var expected = __;
    var actual_value = 1 + 1;

    assert.isTrue(actual_value === expected);
  });

  //Some ways of asserting equality are better than others.
  it("Test a better way of asserting equality", () => {
    var expected = __;
    var actual_value = 1 + 1;

    assert.equal(actual_value, expected);
  });

  // Sometimes we will ask you to fill in the values
  it("Fill in value", () => {
    assert.equal(__, 1 + 1);
  });

});
