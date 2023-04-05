import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="logo">
          Math
          {' '}
          <span className="logo-span"> Magicians </span>
          {' '}
        </NavLink>
        {' '}
        <ul>
          <li>
            <NavLink className="nav-link" to="/">
              {' '}
              Home
              {' '}
            </NavLink>
            {' '}
          </li>
          {' '}
          <li>
            <NavLink className="nav-link" to="/calculator">
              {' '}
              Calculator
              {' '}
            </NavLink>
            {' '}
          </li>
          {' '}
          <li>
            <NavLink className="nav-link" to="/quote">
              {' '}
              Quote
              {' '}
            </NavLink>
            {' '}
          </li>
          {' '}
        </ul>
        {' '}
      </nav>
      {' '}
    </>
  );
}

export default Navbar;
