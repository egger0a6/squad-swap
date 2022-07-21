import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

export default function AccountSpeedDial({ post, handleLogout }) {
  // console.log('THIS IS HANDLE DELETE', handleDeletePost)
  return (
    <Box sx={{ height: 100, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Post SpeedDial"
        sx={{ position: "absolute", bottom: 25, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key="Edit Profile"
          icon={
            <Link 
            to="/Account/Settings/edit-profile-details" 
            state={{ post }}
            style={{ textDecoration: 'none', color: 'white' }}
            >
              <EditIcon />
            </Link>
          }
          tooltipTitle="Edit Profile"
        />
        <SpeedDialAction
          key="Logout"
          onClick={() => handleLogout()}
          icon={<LogoutIcon />}
          tooltipTitle="Logout"
        />
      </SpeedDial>
    </Box>
  );
}
