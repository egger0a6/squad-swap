import styles from "./Landing.module.css";

const Landing = ({ user }) => {
  return (
    <>
      {user ? (
        <main className={styles.container}>
          <li>Hello, {user.name},This is your main page</li>
        </main>
      ) : (
        <>
          <h1>Well come to Squad Swap</h1>
          <p>Introduction to our website should be here</p>
          <div className="footer">
            <p>Copy write 2022 Squad Swap</p>
          </div>
        </>
      )}
    </>
  );
};

export default Landing;
