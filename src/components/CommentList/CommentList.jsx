import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ReviewsIcon from '@mui/icons-material/Reviews';


export default function CommentList({comments}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {comments.map(comment => 
        <ListItem key={comment._id}>
          <ListItemAvatar>
            <Avatar>
              <ReviewsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText 
            primary={comment.content}
            // secondary={comment.content}
          />
        </ListItem>
      )}
    </List>
  );
}