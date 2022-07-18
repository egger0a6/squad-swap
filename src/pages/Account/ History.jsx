import React from "react";

const History = ({ History, user }) => {
  return (
    <>
      {History ? (
        <main>
          <h1>
            Hello{user ? user.name : "NoName"} Here is your preveous History
          </h1>
        </main>
      ) : (
        <main>
          <h3>
           Hello, '{user ? user.name : "NoName"}' you don't have preveous History yet
          </h3>
        </main>
      )}
    </>
  );
};

export default History;
