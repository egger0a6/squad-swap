import styles from "./Landing.module.css";
import BottomNav from "../../components/NavBar/BottomNav";
import PostGallery from "../../components/PostGallery/PostGallery";
import Login from "../../pages/Login/Login"

const Landing = ({ user, posts, handleSignupOrLogin }) => {
  return (
    <>
      {user ? (
        <main className={styles.container}>
          <PostGallery posts={posts} user={user} />
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
