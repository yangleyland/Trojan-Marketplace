import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./main.css";
import "./create-sale.css";
import { useNavigate } from "react-router-dom";

const StyledCreateSale = styled.div`
  margin-top: 30px;
`;

function CreateSale() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/Final_Project/AddItemServlet",
        `item_name=${encodeURIComponent(
          title
        )}&item_description=${encodeURIComponent(
          description
        )}&image_url=${encodeURIComponent(image)}&price=${encodeURIComponent(
          price
        )}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate("/feed");
      console.log(response.data);
    } catch (error) {
      console.error("Error during login request:", error);
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <StyledCreateSale>
      <div className="v1_2">
        <span className="marketplace">Add Item</span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            name="title"
          />

          <label htmlFor="description">Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id="description"
            name="description"
          ></textarea>

          <label htmlFor="quantity">Quantity</label>
          <input type="text" id="quantity" name="quantity" />

          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />

          <label htmlFor="price">Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            id="price"
            name="price"
          />

          <label htmlFor="image">Image</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            id="image"
            name="image"
          />

          <button type="submit">Create Sale</button>
        </form>
      </div>
    </StyledCreateSale>
  );
}
export default CreateSale;
