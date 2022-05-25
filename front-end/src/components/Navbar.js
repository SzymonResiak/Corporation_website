import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Navbar = ({ setLogoutUser }) => {
  const { auth } = useContext(AuthContext);

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo-login-wrapper">
          <Link to="/">
            <img
              src={require("../assets/react-icon.png")}
              alt="company logo"
              className="logo"
            />
          </Link>

          <p>
            Welcome <span className="username">{auth.username}</span>
          </p>
        </div>
        <div className="links-wrapper">
          <ul>
            <Link to="/">
              <li>Dashboard</li>
            </Link>

            <li>notSet</li>

            <Link to="/Meetings">
              <li>Schedule</li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="/">
            <button
              type="button"
              className="btn btn-logout"
              onClick={() => {
                setLogoutUser(false);
              }}
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
