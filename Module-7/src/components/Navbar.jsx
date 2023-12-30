import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
