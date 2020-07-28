var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 5)
  });

  it('it should subtract', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  });

  it('it should multiply', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 15)
  });

  it('it should divide', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 3)
  });

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(9)
    calculator.numberClick(8)
    calculator.numberClick(1)
    const actual = calculator.runningTotal
    assert.equal(actual, 981)
  });

  it('it should chain multiple operations together', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(8)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 60)
  });

  it('it should clear the running total without affecting the calculation', function(){
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(8)
    calculator.operatorClick('=')
    calculator.clearClick()
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    const actual = calculator.runningTotal
    assert.equal(actual, 5)
  });
});
