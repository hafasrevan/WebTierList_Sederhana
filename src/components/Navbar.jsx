import { NavLink } from "react-router-dom";
import {
  Gamepad2,
  Layers,
  Star,
  House,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <Gamepad2 size={27} />
          <span>AkuNakRating</span>
        </NavLink>

        <div className="navbar-menu">
          <NavLink to="/" end className="navbar-link">
            <House size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/tier-list" className="navbar-link">
            <Layers size={18} />
            <span>Tier List</span>
          </NavLink>

          <NavLink to="/reviews" className="navbar-link">
            <Star size={18} />
            <span>Reviews</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;