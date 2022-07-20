import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SellIcon from '@mui/icons-material/Sell';

export default function OfferList({offers}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {offers.map(offer => 
        <ListItem key={offer._id}>
          <ListItemAvatar>
            <Avatar>
              <SellIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`$${offer.price}`} secondary={offer.createdAt} />
        </ListItem>
      )}
    </List>
  );
}