import { assert } from "chai";
import { __ } from "../src/helpers";

describe("About Strings", () => {
  it("Double quoted expressions are strings", () => {
    var doubleQuotedString = "Hello World";
    assert.isString(__);
  });

  it("Single quoted expressions are strings too!", () => {
    var singleQuotedString = 'Hello Again :)';
    assert.isString(__);
  });

  it("Backslash in strings serves for escaping characters", () => {
    var stringWithBackslashes = "Hello I\'m String";
    assert.isString(__);
  });

  it("Strings can be created as instance of type String", () => {
    var stringInstance = new String("You can do this");
    assert.isString(__);
  });
});
