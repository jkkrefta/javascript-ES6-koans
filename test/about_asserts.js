import {assert} from "chai";

describe('About Assert', () => {

  // We shall contemplate truth by testing reality, via asserts
  it('assert truth', () => {
    assert.isTrue(false); // This should be true
  });

  // Enlightenment may be more easily achieved with appropriate
  // messages.
  it('assert with message', () => {
    assert.isTrue(false, "This should be true -- Please fix this");
  });

  // To understand reality, we must compare our expectations against
  // reality.
  it('assert equality', () => {
    var expected = __;
    var actual_value = 1 + 1;

    assert.isTrue(actual_value === expected);
  });

  //Some ways of asserting equality are better than others.
  it('better way of asserting equality', () => {
    var expected = __;
    var actual_value = 1 + 1;

    assert.equal(actual_value, expected);
  });

  // Sometimes we will ask you to fill in the values
  it('fill in values', () => {
    assert.equal(__, 1 + 1);
  });

});
