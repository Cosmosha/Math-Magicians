import CalculationButtons from './calculationButtons';

function Calculator() {
  return (
    <>
      <div className="container">
        <h1 className="headline"> Let do some math! </h1>
        {' '}
        <CalculationButtons />
      </div>
      {' '}
    </>
  );
}

export default Calculator;
