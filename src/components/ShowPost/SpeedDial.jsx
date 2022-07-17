import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import IosShareIcon from '@mui/icons-material/IosShare';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const actions = [
  { icon: <DeleteForeverIcon />, name: 'Delete Listing' },
  { icon: <IosShareIcon />, name: 'Share' },
];

export default function ShowSpeedDial({post}) {
  return (
    <Box sx={{ height: 100, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Post SpeedDial"
        sx={{ position: 'absolute', bottom: 100, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key="Edit Listing"
          icon={<Link to="/edit" state={{post}}><EditIcon/></Link>}
          tooltipTitle="Edit Listing"
        />
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            style={{textDecoration: "none"}}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
