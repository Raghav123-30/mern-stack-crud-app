import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/add-task" className="btn">
        Add task
      </NavLink>
    </div>
  );
}

export default Navbar;
