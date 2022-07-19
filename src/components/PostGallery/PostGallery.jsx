import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from 'react-router-dom';


export default function PostGallery({ posts, user, handleDeletePost }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {posts.map((post) => (
        <ImageListItem key={post._id} component={Link} to={`${post._id}`} state={{ post, user }}>
          <img
            src={post.photo}
            srcSet={post.photo}
            alt={post.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
