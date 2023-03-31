import { useState } from 'react';
import calculate from '../logic/calculate';

export default function CalcButtons() {
  const [Object, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const calcAction = (buttonName) => {
    const result = calculate(Object, buttonName);
    setState({
      next: result.next,
      total: result.total,
      operation: result.operation,
    });
  };

  return (
    <div className="calculator-grid">
      <div className="display">
        <div className="previou-operand">
          {Object.total}
          {' '}
        </div>
        <div className="current-operand">{Object.next}</div>
      </div>
      <button type="button" onClick={() => calcAction('AC')}>AC</button>
      <button type="button" onClick={() => calcAction('+/-')}> +/- </button>
      <button type="button" onClick={() => calcAction('%')}> % </button>
      <button type="button" className="operators" onClick={() => calcAction('+')}> + </button>
      <button type="button" onClick={() => calcAction('7')}> 7 </button>
      <button type="button" onClick={() => calcAction('8')}> 8 </button>
      <button type="button" onClick={() => calcAction('9')}> 9 </button>
      <button type="button" className="operators" onClick={() => calcAction('x')}> x </button>
      <button type="button" onClick={() => calcAction('4')}> 4 </button>
      <button type="button" onClick={() => calcAction('5')}> 5 </button>
      <button type="button" onClick={() => calcAction('6')}> 6 </button>
      <button type="button" className="operators" onClick={() => calcAction('-')}> - </button>
      <button type="button" onClick={() => calcAction('1')}> 1 </button>
      <button type="button" onClick={() => calcAction('2')}> 2 </button>
      <button type="button" onClick={() => calcAction('3')}> 3 </button>
      <button type="button" className="operators" onClick={() => calcAction('+')}> + </button>
      <button type="button" className="span-two" onClick={() => calcAction('0')}> 0 </button>
      <button type="button" onClick={() => calcAction('.')}> . </button>
      <button type="button" className="operators" onClick={() => calcAction('=')}> = </button>
    </div>
  );
}
