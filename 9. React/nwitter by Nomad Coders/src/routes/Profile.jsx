import { authService } from "fbase";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      //이름이 같다면 변경 금지
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  //   const getMyNweets = async () => {
  //     const nweets = await dbService
  //       .collection("nweets")
  //       .where("creatorId", "==", userObj.uid) //DB data filtering
  //       .orderBy("createdAt")
  //       .get();
  //     console.log(nweets.docs.map((doc) => doc.data()));
  //   };

  //   useEffect(() => {
  //     getMyNweets();
  //   }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" placeholder="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
