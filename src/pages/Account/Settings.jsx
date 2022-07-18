import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
function Settings() {
  return (
    <div className="settings-page">
      <Link
        to="/Account/Settings/add-profile-details"
        className="profile-details"
      >
        <strong>
          <AddIcon />
          Add profile detaills
        </strong>
      </Link>
      <Link
        to="/Account/Settings/edit-profile-details"
        className="profile-details"
      >
        <strong>
          <EditIcon />
          Edit profile detaills
        </strong>
      </Link>
      <Link
        to="/Account/Settings/deleteProfileDetails"
        className="profile-details"
      >
        <strong>
          <DeleteIcon />
          Delete profile details
        </strong>
      </Link>
      <Link to="/changePassword" className="profile-details">
        <strong>
          <LockOpenOutlinedIcon />
          Change password
        </strong>
      </Link>
      <Link to="/Account/Settings/report-Problems" className="profile-details">
        <strong>
          <ReportProblemIcon/>
          Report Problems
        </strong>
      </Link>
      <Link to="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default Settings;
