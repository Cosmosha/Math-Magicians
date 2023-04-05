import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="sub-container">
          <Routes>
            <Route path="/" element={<Home />} />
            {' '}
            <Route path="/calculator" element={<Calculator />} />
            {' '}
            <Route path="/quote" element={<Quote />} />
            {' '}
          </Routes>
          {' '}
        </div>
        {' '}
      </div>
      {' '}
    </>
  );
}

export default App;
