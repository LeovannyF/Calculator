const expect = require('chai').expect;
const Calculator = require('../calc.js');
let currentCal = new Calculator;

describe('calcualtor', () => {

  it('exist', () => {
    expect(Calculator).to.be.ok;
  });
  it('can add', () => {
    expect(currentCal.add(3,4)).to.be.equal(7);
  });
  it('can subract 1 from 2', ()=>{
    expect(currentCal.subtract(2,1)).to.be.equal(1);
  });
  it('can multiply 5 and 5', ()=>{
    expect(currentCal.multiply(5,5)).to.be.equal(25);
  });
});
