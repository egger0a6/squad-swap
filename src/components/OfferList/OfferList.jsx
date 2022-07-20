import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SellIcon from '@mui/icons-material/Sell';
import Typography from '@mui/material/Typography';
import { Fragment } from 'react';
import OfferModal from '../OfferModal/OfferModal';


export default function OfferList({user, post, offers}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {offers.map(offer => 
        <ListItem key={offer._id}>
          <ListItemAvatar>
            <Avatar>
              <SellIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={`$${offer.price}`}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {offer.owner.name}
                </Typography>
                {` — ${new Date(offer.createdAt).toDateString()}`}
              </Fragment>
            }
          />
          {post?.owner._id === user?._id && <OfferModal/>}
        </ListItem>
      )}
    </List>
  );
}