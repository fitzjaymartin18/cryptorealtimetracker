import { Link } from "react-router-dom";
import "../css/navbar.css";

function Navbar() {
  return (
    <>
      <div className="navLinks">
        <div className="navLogo">
          <Link to="/" className="nav-logo">
            CR<span>T</span>T
          </Link>
        </div>
        <div className="navSection">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/favorites" className="navLink">
            Starred
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
