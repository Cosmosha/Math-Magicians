import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return the correct result for addition', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '+',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('10');
  });

  it('should return the correct result for subtraction', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '-',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });

  it('should return the correct result for multiplication', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: 'x',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('24');
  });

  it('should return the correct result for division', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '÷',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('1.5');
  });

  it('should return the correct result for modulo', () => {
    const obj = {
      total: '6',
      next: '4',
      operation: '%',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('2');
  });
});
