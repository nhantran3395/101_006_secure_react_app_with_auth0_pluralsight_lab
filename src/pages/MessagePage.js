import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MessagePage = () => {
  const privateURL = process.env.REACT_APP_API_URL + "/api/private";
  const publicURL = process.env.REACT_APP_API_URL + "/api/public";

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPublicMessage = async () => {
      try {
        const response = await fetch(publicURL);
        const jsonData = await response.json();
        setMessage(jsonData.message);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPrivateMessage = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(privateURL, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const jsonData = await response.json();

        setMessage(jsonData.message);
      } catch (error) {
        console.log(error);
      }
    };

    !isAuthenticated ? fetchPublicMessage() : fetchPrivateMessage();
  }, []);

  return (
    <>
      <h2>Message</h2>
      <p>{message}</p>
    </>
  );
};

export default MessagePage;
