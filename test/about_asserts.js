import {assert} from "chai";

describe('About asserts', () => {

  // We shall contemplate truth by testing reality, via asserts
  it('test assert truth', () => {
    assert.isTrue(false); // This should be true
  });

  // Enlightenment may be more easily achieved with appropriate
  // messages.
  it('test assert with message', () => {
    assert.isTrue(false, "This should be true -- Please fix this");
  });

  // To understand reality, we must compare our expectations against
  // reality.
  it('test assert equality', () => {
    var expected = __;
    var actual_value = 1 + 1;

    assert.isTrue(actual_value === expected);
  });

  //Some ways of asserting equality are better than others.
  it('test a better way of asserting equality', () => {
    var expected = __;
    var actual_value = 1 + 1;

    assert.equal(actual_value, expected);
  });

  // Sometimes we will ask you to fill in the values
  it('test fill in values', () => {
    assert.equal(__, 1 + 1);
  });

});