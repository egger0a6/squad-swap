import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="App-header">
        <Link to="/" className="logo">
          <strong>Squad Swap</strong>
        </Link>
        {user ? (
          <nav>
            <ul>
              {/* <li>Welcome, {user.name}</li> */}
              <li>
                <Link to="/home" className="nav-list">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/post" className="nav-list">
                  Post
                </Link>
              </li>
              <li>
                <Link to="/profiles" className="nav-list">
                  Profiles
                </Link>
              </li>
              <li>
                <Link to="/my-profile" className="nav-list">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="" onClick={handleLogout} className="nav-list">
                  LOG OUT
                </Link>
              </li>
              {/* <li><Link to="/changePassword">Change Password</Link></li> */}
            </ul>
          </nav>
        ) : (
          <nav>
            <ul>
              <li>
                <Link className="Login" to="/login">
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <button className="dark-mode">Dark mode💡</button>
      </header>
    </>
  );
};

export default NavBar;
