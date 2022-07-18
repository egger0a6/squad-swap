const Landing = ({ user }) => {
  return (
    <>
      {user ? (
        <main>
          <h1>Your preveous History</h1>
        </main>
      ) : (
        <main>
          <h1>
            Now,You don't have preveous History <br />
            once you have you will see here
          </h1>
        </main>
      )}
    </>
  );
};

export default Landing;
