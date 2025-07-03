import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHotel, 
  faSignOutAlt, 
  faSignInAlt, 
  faUserPlus,
  faHome 
} from '@fortawesome/free-solid-svg-icons';
import {  faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (<div className="navbar">
    <div className="navContainer">
      <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
        <span className="logo">
          <FontAwesomeIcon icon={faHotel} className="logo-icon" />
          syriabooking
        </span>
      </Link>
      {user ? (
        <div className="navItems">
          <span className="username">Welcome, {user.username}</span>
          {/* Optional dropdown - uncomment if you want it */}
          {/* <div className="userMenu">
            <div className="userAvatar">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div className="dropdownContent">
              <Link to="/profile" className="dropdownItem">Profile</Link>
              <Link to="/bookings" className="dropdownItem">My Bookings</Link>
              <div className="dropdownItem" onClick={handleLogout}>Logout</div>
            </div>
          </div> */}
          <button className="navButton" onClick={handleLogout} data-tooltip="Logout">
  <FontAwesomeIcon icon={faSignOutAlt} />
  <span>Logout</span>
</button>

<Link to="/contactus">
  <button className="navButton" data-tooltip="Contact Us">
    <FontAwesomeIcon icon={faPhone} />
    <span>Contact Us</span>
  </button>
</Link>

<Link to="/about">
  <button className="navButton" data-tooltip="About Us">
    <FontAwesomeIcon icon={faHome} />
    <span>About Us</span>
  </button>
</Link>
        </div>
      ) : (
        <div className="navItems">
  <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
    <button className="navButton" data-tooltip="Login">
      <FontAwesomeIcon icon={faSignInAlt} />
      <span>Login</span>
    </button>
  </Link>
  <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
    <button className="navButton" data-tooltip="Register">
      <FontAwesomeIcon icon={faUserPlus} />
      <span>Register</span>
    </button>
  </Link>
</div>
      )}
    </div>
  </div>
  );
};

export default Navbar;