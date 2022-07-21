import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from 'react-router-dom';


export default function PostGallery({ posts }) {
  return (
    <ImageList sx={{ width: "100%", height: "90%" }} cols={3} rowHeight={164}>
      {posts.map((post) => (
        <ImageListItem key={post._id} component={Link} to={`/${post._id}`}>
          <img
            src={
              post.photo
              ? post.photo
              : "./image-placeholder.jpg"
            }
            srcSet={post.photo}
            alt={post.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
