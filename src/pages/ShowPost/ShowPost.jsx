import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useLocation, NavLink } from 'react-router-dom'
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShowSpeedDial from '../../components/ShowPost/SpeedDial';
import ShowSpeedDialVisitor from '../../components/ShowPost/SpeedDialVisitor';


export default function ShowPost() {
const location = useLocation()
console.log(location)
const post = location.state.post
const user = location.state.user
const handleDeletePost = location.state.handleDeletePost

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>

        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/500/450"//HARD CODED change to ->{post.image}
              alt="item picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                $ {post.price}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Condition: {post.condition}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Category: {post.category}
              </Typography>
              <Divider variant="middle"/>
              <NavLink 
                to="/Account"
                sx={{
                }} >
                <Box
                  sx={{
                    display : 'flex',
                    textDecoration: 'none',
                    wrap: 'no-wrap',
                    margin: '1em',
                    alignItems: 'center'
                  }}>
                  <Avatar src="/broken-image.jpg" />
                  <Box
                  sx={{
                    flexDirection: 'column',
                    marginLeft: '1em'
                  }}
                  >
                    <Typography variant='body1'>{post.owner.name}</Typography>
                    <Typography variant='body1'>Member Since {post.owner.createdAt.slice(0, 4)}</Typography>  
                  </Box>  
                  <ChevronRightIcon />
                </Box>
              </NavLink>
              <Divider variant="middle" />
              <Typography variant="h6" color="text.secondary">
                Description
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {post.description}
              </Typography>

            </CardContent>
            {user.profile === post.owner._id ?
              <ShowSpeedDial post={post} handleDeletePost={handleDeletePost}/>
              :
              <ShowSpeedDialVisitor />
            }
            <Link to="/">Back</Link>
          </Card>
      </Grid>
    </Grid>
  );
}
