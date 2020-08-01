import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const callbackURL = process.env.REACT_APP_AUTH0_CALLBACK_URL;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={callbackURL}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
