import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Home</NavLink>
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'link active' : 'link')}>Login</NavLink>
    </nav>
  );
}

export default Navbar;