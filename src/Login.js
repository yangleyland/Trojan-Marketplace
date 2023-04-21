import React from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
  body {
    font-family: "Lato", sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  h1 {
    font-family: "Adobe Devanagari", sans-serif;
    font-size: 36px;
    margin: 0 0 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    width: 400px;
    max-width: 90%;
  }

  input[type="email"],
  input[type="password"] {
    font-size: 18px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;
  }

  input[type="submit"] {
    background-color: #4caf50;
    color: white;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #3e8e41;
  }
  .logo {
    height: 50px;
    margin-bottom: 1rem;
  }
`;

function Login() {
  return (
    <StyledLogin>
      <div className="container">
        <img
          className="logo"
          src="https://identity.usc.edu/wp-content/uploads/2022/09/PrimaryMonogram.png"
          alt="USC logo"
        />
        <h1>Login to Marketplace</h1>
        <form action="" method="POST">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />

          <input type="submit" value="Log In" />
        </form>
      </div>
    </StyledLogin>
  );
}
export default Login;
