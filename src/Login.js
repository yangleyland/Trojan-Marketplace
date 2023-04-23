import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:8080/Final_Project/LoginServlet",`username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      
    console.log(response.data);
      if (response.data===true) {
        navigate("/");
        console.log("true");
      } else {
        setError("Invalid username or password");
        console.log("false");
      }
    } catch (error) {
      console.error("Error during login request:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <StyledLogin>
      <div className="container">
        <img
          className="logo"
          src="https://identity.usc.edu/wp-content/uploads/2022/09/PrimaryMonogram.png"
          alt="USC logo"
        />
        <h1>Login to Marketplace</h1>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="email"
            id="email"
            name="email"
            required
          />
          <label for="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            name="password"
            required
          />

          <input type="submit" value="Log In" />
          {error && <p style={{color: "red"}}>{error}</p>}
        </form>
        
      </div>
    </StyledLogin>
  );
}
export default Login;
