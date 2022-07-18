import styles from "./Landing.module.css";
import BottomNav from "../../components/NavBar/BottomNav";
import PostGallery from "../../components/PostGallery/PostGallery";

const Landing = ({ user, posts, handleDeletePost }) => {
  return (
    <>
      {user ? (
        <main className={styles.container}>
          <h1>
            Hello dear {user ? user.name : "friend"} this is your home page,
            
          </h1>
          <PostGallery posts={posts} user={user} handleDeletePost={handleDeletePost}/>
          <BottomNav />
        </main>
      ) : (
        <main>
          <h1>This is the first page</h1>
        </main>
      )}
    </>
  );
};

export default Landing;
