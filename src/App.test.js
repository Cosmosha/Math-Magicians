import operate from './logic/operate';
import calculate from './logic/calculate';

describe('Test calculate', () => {
  it('6 + 4 = 10', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '+',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('10');
  });

  it('6 - 4 = 2', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '-',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });

  it('6 x 4 = 24', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: 'x',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('24');
  });

  it('6 ÷ 4 = 1.5', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '÷',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('1.5');
  });

  it('6 % 4 = 2', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '%',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });

  //   it('throws an error for unknown operations', () => {
  //     expect(() => operate(5, 10, '%')).toThrow("Unknown operation '%'");
  //   });

  //   it('throws an error for division by zero', () => {
  //     expect(() => operate(5, 0, '÷')).toThrow("Can't divide by 0.");
  //   });

  //   it('throws an error for modulo by zero', () => {
  //     expect(() => operate(5, 0, '%')).toThrow(
  //       "Can't find modulo as can't divide by 0."
  //     );
  //   });
});
