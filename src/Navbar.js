import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

const StyledNavbar = styled.div`
  width: 100vw;
  padding: 0;
  display: flex;
  height: 88px;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  background-color: grey;
  border: 1px solid #ebebeb;
  gap: 10px;
`
const NavPlaceHolder = styled.div`
  height: 88px;
  width: 100vw;
  background-color: white;
`;

function Navbar () {
    return(
        <>
        <StyledNavbar>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/message">Message</Link>
            <Link to="/profile">profile</Link>
            <Link to="/purchase-item">Purchase Item</Link>
            <Link to="/create-sale">Create Sale</Link>
            <Link to="/feed">Feed</Link>
        </StyledNavbar>
        <NavPlaceHolder></NavPlaceHolder>
        </>
        
    )

}
export default Navbar;