const History = ({ user }) => {
  
  return (
    <>
      {user ? (
        <main>
          <h1>Your preveous History</h1>
        </main>
      ) : (
        <main>
          <h1>No preveous History</h1>
        </main>
      )}
    </>
  );
};

export default History;
