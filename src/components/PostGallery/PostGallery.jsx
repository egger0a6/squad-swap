import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function PostGallery({ posts }) {
  return (
    <Box sx={{ width: "95vw", height: "100vh", overflowY: 'scroll' }}>
      <ImageList cols={3} gap={9}>
        {posts.map((post) => (
          <ImageListItem key={post._id} component={Link} to={`/${post._id}`}>
            <img
              src={
                post?.photo
                ? `${post.photo}?w=164&h=164&fit=crop&auto=format`
                : "../image-placeholder.jpg"
              }
              srcSet={post.photo}
              alt={post.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
