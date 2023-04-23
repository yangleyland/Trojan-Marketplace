import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import Feed from "./Feed";
import Message from "./Message";
import CreateSale from "./CreateSale";
import PurchaseItem from "./PurchaseItem";
import CreateAccount from "./CreateAccount";

const Main = (props) => {
  const [purchaseItem, setPurchaseItem] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  function modifyItem(item) {
    setPurchaseItem(item);
  }
  function logIn() {
    setLoggedIn(true);
  }

  return (
    <StyledMain>
      <Navbar loggedIn={loggedIn}></Navbar>
      <Background></Background>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login logIn={logIn} />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route
          exact
          path="/feed"
          element={<Feed modifyItem={modifyItem} />}
        ></Route>
        <Route
          exact
          path="/message"
          element={<Message item={purchaseItem} />}
        ></Route>
        <Route exact path="/create-sale" element={<CreateSale />}></Route>
        <Route
          exact
          path="/purchase-item"
          element={<PurchaseItem item={purchaseItem} />}
        ></Route>
        <Route exact path="/create-account" element={<CreateAccount />}></Route>
      </Routes>
    </StyledMain>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://pbs.twimg.com/media/EU8GlrJWsAAZKHx?format=jpg&name=large);
  background-size: cover;
  z-index: -1;
`;
const StyledMain = styled.div`
  width: 100vw;
`;

export default Main;
