import { useHistory } from "react-router-dom";
import React from "react";

const Profile = (props) => {
  const history = useHistory();
  return (
    <>
      <h1>Profile</h1>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
};

export default Profile;
