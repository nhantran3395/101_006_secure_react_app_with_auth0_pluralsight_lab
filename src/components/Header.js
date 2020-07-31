import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <NavLink to="/">React-Bootstrap</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </Nav>
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
