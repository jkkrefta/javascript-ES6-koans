/* eslint quotes: ["off", "single"] */
import { assert } from "chai";
import { __ } from "../src/helpers";

describe("About Strings", () => {
  it("Test that double quoted expressions are strings", () => {
    var doubleQuotedString = "Hello World";
    assert.isString(__);
  });

  it("Test single quoted expressions are strings too!", () => {
    var singleQuotedString = 'Hello Again :)';
    assert.isString(__);
  });

  it("Test sackslash in strings serves for escaping characters", () => {
    var stringWithBackslashes = "Hello I\'m String";
    assert.isString(__);
  });

  it("Test strings can be created as instance of type String", () => {
    var stringInstance = new String("You can do this");
    assert.isString(__);
  });

});
