import { Link } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
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
            <ul id="nav-ul">
              <li>Welcome, {user.name}</li>
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
                  <GroupsIcon/>
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
      </header>
    </>
  );
};

export default NavBar;
