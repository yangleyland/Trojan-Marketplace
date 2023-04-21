import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  /* width: 100vw;
  padding: 0;
  display: flex;
  height: 88px;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-color: grey;
  border: 1px solid #ebebeb;
  gap: 10px; */
  position: fixed;
  z-index: 1;
  width: 100%;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #900;
    padding: 10px 20px;
  }

  .navbar-brand {
    display: flex;
    align-items: center;
  }

  .navbar-brand img {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }

  .navbar-brand h1 {
    color: #fff;
    font-size: 24px;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }

  .nav-link:hover {
    color: #ccc;
  }
`;
const NavPlaceHolder = styled.div`
  height: 44px;
  width: 100vw;
  background-color: white;
`;

function Navbar() {
  return (
    <>
      <StyledNavbar>
        {/* <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/message">Message</Link>
            <Link to="/profile">profile</Link>
            <Link to="/purchase-item">Purchase Item</Link>
            <Link to="/create-sale">Create Sale</Link>
            <Link to="/feed">Feed</Link> */}
        <nav className="navbar">
          <div className="navbar-brand">
            <img
              src="/white-usc.png"
              alt="USC logo"
              style={{ "object-fit": "contain" }}
            />
            <h1>Trojan Marketplace</h1>
          </div>
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/message">
              Message
            </Link>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/purchase-item">
              Purchase Item
            </Link>
            <Link className="nav-link" to="/create-sale">
              Create Sale
            </Link>
            <Link className="nav-link" to="/feed">
              Feed
            </Link>
          </div>
        </nav>
      </StyledNavbar>
      <NavPlaceHolder></NavPlaceHolder>
    </>
  );
}
export default Navbar;
