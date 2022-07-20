import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation({user}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ 
          width: 500,
          position: "fixed",
          bottom: 0,
        }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/add"
          label="Post"
          icon={<CameraAltIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to={`/Account/${user.profile}`}
          label="Account"
          icon={<AccountBoxIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
