import React from "react";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLoginButtonClick = () => {
    loginWithRedirect();
  };

  return (
    <Button
      onClick={handleLoginButtonClick}
      variant="primary"
      className="btn-margin"
    >
      Log in
    </Button>
  );
};

export default LoginButton;
