import React from "react";
import styled from "styled-components";
import "./main.css";
import "./create-sale.css";

const StyledCreateSale = styled.div`
    margin-top: 30px;
`;

function CreateSale() {
  return (
    <StyledCreateSale>
      <div className="v1_2">

        <span className="marketplace">Add Item</span>
        <form>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />

          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"></textarea>

          <label htmlFor="quantity">Quantity</label>
          <input type="text" id="quantity" name="quantity" />

          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />

          <label htmlFor="pickup-time">Pickup Time</label>
          <input type="text" id="pickup-time" name="pickup-time" />

          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" />

          <button type="submit">Create Sale</button>
        </form>
      </div>
    </StyledCreateSale>
  );
}
export default CreateSale;
