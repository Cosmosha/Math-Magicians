import Big from 'big.js';
import operate from './logic/operate';

describe('operate', () => {
  it('should return the sum of two numbers', () => {
    expect(operate(2, 3, '+')).toEqual(Big(5).toString());
  });

  it('should return the difference of two numbers', () => {
    expect(operate(5, 2, '-')).toEqual(Big(3).toString());
  });

  it('should return the product of two numbers', () => {
    expect(operate(2, 3, 'x')).toEqual(Big(6).toString());
  });

  it('should return the quotient of two numbers', () => {
    expect(operate(6, 3, '÷')).toEqual(Big(2).toString());
  });

  it("should return 'Can't divide by 0.' if attempting to divide by 0", () => {
    expect(operate(6, 0, '÷')).toEqual("Can't divide by 0.");
  });

  it('should return the modulo of two numbers', () => {
    expect(operate(5, 2, '%')).toEqual(Big(1).toString());
  });

  it("should return 'Can't find modulo as can't divide by 0.' if attempting to find modulo with 0", () => {
    expect(operate(5, 0, '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error if the operation is unknown', () => {
    expect(() => operate(2, 3, 'foo')).toThrowError("Unknown operation 'foo'");
  });
});
