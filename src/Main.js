import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"
import Feed from "./Feed"
import Message from "./Message"
import CreateSale from "./CreateSale"
import PurchaseItem from "./PurchaseItem"

const Main = (props) => {
    return (
  <StyledMain>
    <Navbar></Navbar>
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home/>
        }
      ></Route>
      <Route
        exact
        path="/login"
        element={
          <Login/>
        }
      ></Route>
      <Route
        exact
        path="/profile"
        element={
          <Profile/>
        }
      ></Route>
      <Route
        exact
        path="/feed"
        element={
          <Feed/>
        }
      ></Route>
      <Route
        exact
        path="/message"
        element={
          <Message/>
        }
      ></Route>
      <Route
        exact
        path="/create-sale"
        element={
          <CreateSale/>
        }
      ></Route>
      <Route
        exact
        path="/purchase-item"
        element={
          <PurchaseItem/>
        }
      ></Route>
    </Routes>
  </StyledMain>
    )
};

const StyledMain = styled.div`
  width: 100vw;
`;

export default Main;