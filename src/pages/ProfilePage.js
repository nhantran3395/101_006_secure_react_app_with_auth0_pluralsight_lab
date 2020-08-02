import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "react-bootstrap/Image";

const ProfilePage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getTokens = async () => {
      const accessToken = await getAccessTokenSilently();
      alert(`accessToken:${accessToken}`);
      console.log(accessToken);
    };

    getTokens();
  }, []);

  return (
    <>
      <h2>Profile</h2>
      {isAuthenticated && (
        <div>
          <Image
            src={user.picture}
            alt={user.name}
            style={{ maxWidth: "120px" }}
          />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
