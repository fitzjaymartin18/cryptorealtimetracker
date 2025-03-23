import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navLinks">
        <div className="navLogo">
          <Link to="/">Crypto Real Time Tracker</Link>
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
