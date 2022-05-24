import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setLogoutUser }) => {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <div className="logo-login-wrapper">
          <li>
            <Link to="/">
              <img
                src={require("../assets/react-icon.png")}
                alt="company logo"
                className="logo"
              />
            </Link>
          </li>

          <p>
            Welcome <span className="username">username</span>
          </p>
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>notSet</li>
            <li>
              <Link to="/Meetings">Schedule</Link>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-logout"
            onClick={() => {
              setLogoutUser(false);
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
