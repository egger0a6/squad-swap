import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SellIcon from '@mui/icons-material/Sell';
import Typography from '@mui/material/Typography';


export default function CommentList({comments}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {comments.map(comment => 
        <ListItem key={comment._id}>
          <ListItemAvatar>
            <Avatar>
              <SellIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={"placeholder"}
            secondary={comment.content}
          />
        </ListItem>
      )}
    </List>
  );
}