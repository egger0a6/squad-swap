import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function PostGallery({ posts }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {posts.map((post) => (
        <ImageListItem key={post._id}>
          <img
            src="https://picsum.photos/500/450"
            srcSet="https://picsum.photos/500/450"
            alt={post.image}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
