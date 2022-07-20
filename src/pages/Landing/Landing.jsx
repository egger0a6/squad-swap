import styles from "./Landing.module.css";
import BottomNav from "../../components/NavBar/BottomNav";
import PostGallery from "../../components/PostGallery/PostGallery";
import Login from "../../pages/Login/Login"

const Landing = ({ user, posts, handleSignupOrLogin }) => {
  posts = posts.filter(post => !post.sold)

  return (
    <>
      {user ? (
        <main className={styles.container}>
          <PostGallery posts={posts} />
          <BottomNav user={user} />
        </main>
      ) : (
        <main>
          <Login handleSignupOrLogin={handleSignupOrLogin}/>
        </main>
      )}
    </>
  );
};

export default Landing;
