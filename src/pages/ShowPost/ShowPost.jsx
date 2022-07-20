import { useState, useEffect } from "react";
import * as offerService from "../../services/offerService"
import * as postService from "../../services/postService"

// MUI Components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, NavLink, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShowSpeedDial from "../../components/ShowPost/SpeedDial";
import ShowSpeedDialVisitor from "../../components/ShowPost/SpeedDialVisitor";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


export default function ShowPost({ user, handleDeletePost }) {
  const { id } = useParams();
  const [post, setPost] = useState({})
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await postService
    }
  })

  useEffect(() => {
    const fetchPostOffers = async () => {
      const offerData = await offerService.getPostOffers(post?._id);
      setOffers(offerData);
    };
    fetchPostOffers();
  }, [post?._id]);

  console.log(offers)


  return (
    post && (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={post.photo}
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
              <Divider variant="middle" />

              <NavLink to={`/Account/${post.owner._id}`} sx={{}}>
                <Box
                  sx={{
                    display: "flex",
                    textDecoration: "none",
                    wrap: "no-wrap",
                    margin: "1em",
                    alignItems: "center",
                  }}
                >
                  <Avatar src="/broken-image.jpg" />
                  <Box
                    sx={{
                      flexDirection: "column",
                      marginLeft: "1em",
                    }}
                  >
                    <Typography variant="body1">{post.owner.name}</Typography>
                    <Typography variant="body1">
                      Member Since {post.owner.createdAt.slice(0, 4)}
                    </Typography>
                  </Box>
                  <ChevronRightIcon />
                </Box>
              </NavLink>
            </CardContent>
            {user.profile === post.owner._id ? (
              <ShowSpeedDial post={post} handleDeletePost={handleDeletePost}/>
            ) : (
              <ShowSpeedDialVisitor post={post}/>
            )}
            <Link to="/">Back</Link>
          </Card>
        </Grid>
        <Grid item xs={3}>

        </Grid>
      </Grid>
    )
  );
}
