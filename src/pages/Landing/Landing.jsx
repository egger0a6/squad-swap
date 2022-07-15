import styles from "./Landing.module.css";
import BottomNav from "../../components/NavBar/BottomNav";

const Landing = ({ user }) => {
  return (
    <>
      {user ? (
        <main className={styles.container}>
          <h1>This is Home page,</h1>
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
