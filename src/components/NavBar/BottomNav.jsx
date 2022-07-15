import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Post" icon={<CameraAltIcon />} />
        <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} />
      </BottomNavigation>
    </Box>
  );
}
