/* eslint quotes: ["off", "single"] */
import { assert } from "chai";
import { __ } from "../src/helpers";

describe("About Strings", () => {
  // When you declare string using "" it is a quoted expression
  xit("Test that double quoted expressions are strings", () => {
    var doubleQuotedString = "Hello World";
    assert.isString(__);
  });

  // In JavaScript it does not matter if you use "" or '' as long as you stick to one.
  it("Test single quoted expressions are strings too!", () => {
    var singleQuotedString = 'Hello Again :)';
    assert.isString(__);
  });

  // Every special character such as !@#$%^&*() has to be escaped in string with \
  // Example: "\!", "\@"
  it("Test sackslash in strings serves for escaping characters", () => {
    var stringWithBackslashes = "Hello I\'m String";
    assert.isString(__);
  });

  // Keyword new creates instance of a new object
  // In this case it is String object
  it("Test strings can be created as instance of type String", () => {
    var stringInstance = new String("You can do this");
    assert.isString(__);
  });

  // Operator === performs strict comparison
  // It means that comparison will return true only if left and right side
  // of equation is string and only if they are truly euqal
  it("Test strings can be compared", () => {
    var expected = "xD";
    var given = "xD";
    assert.isTrue(__ === expected);
  });

  it("Test quoted expressions and object String are compatibile", () => {
    var expected = "xD";
    var given = String("xD");
    assert.isTrue(__ === expected);
  });

  // Operator == performs soft comparison
  // It means that if left and right side is not of the same type
  // JavaScript will try to cast them to a comparable type
  it("Test strings can be compared with different types", () => {
    var string = "1";
    var number = 1;
    assert.isTrue(string == __);
  });

  it("Test strings can be added", () => {
    var given = __ + "World!";
    var expected = "Hello World!"
    assert.equal(given, expected);
  });
});
