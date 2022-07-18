import React, { useState, useEffect } from "react";
import { getOneProfile } from "../../services/profileService";
import { useParams } from "react-router-dom";
import "./Account.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const Account = ({ user }) => {
  // link to profile from post
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchAddProfile = async () => {
      const profileData = await getOneProfile(id);
      setProfile(profileData);
    };
    fetchAddProfile();
  }, []);
  console.log(profile);

  return (
    <div className="card">
      <img
        src="http://cdn.onlinewebfonts.com/svg/img_504768.png"
        alt="profile-pic"
        className="profile-image"
      />
      <ul className="profile-details">
        <li>Name:{profile ? profile.name : "Noname"}</li>
        <li>Email:{profile ? profile.email : "NoEmail"}</li>
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
