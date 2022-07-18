import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const Account = ({ user }) => {
  return (
    <div className="card">
      <img
        src="http://cdn.onlinewebfonts.com/svg/img_504768.png"
        alt="profile-pic"
        className="profile-image"
      />
      <ul className="profile-details">
        <li>Name, {user ? user.name : "friend"}</li>
        <li>Email:</li>
        <li>Age:</li>
        <li>Profession:</li>
        <li>Address:</li>
      </ul>
      <div>
        <Link to="/Account/Settings" className="settings">
          <SettingsIcon />
          Settings
        </Link>
      </div>
      <div>
        <Link to="/Account/Settings/History" className="History">
          <HistoryOutlinedIcon />
          History
        </Link>
      </div>
    </div>
  );
};

export default Account;
