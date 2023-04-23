import React, { useState } from "react";
import styled from "styled-components";

const StyledPurchaseItem = styled.div`
  margin-top: 30px;
`;

const PurchaseForm = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  background: #fff;
  margin-top: -20px;
`;

const OuterContainer = styled.div`
  width: 700px;
  background-color: #efefee;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NameText = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

const SubText = styled.p`
  color: #939292;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
`;

const PickUpText = styled.p`
  color: black;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
`;

const SquareImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const PurchaseBanner = styled.div`
  font-size: 1.4em;
  font-weight: 600;
  background-color: #efd465;
  display: flow-root;
  margin-top: 5px;
  color: black;
  padding: 8px 16px;
  text-align: center;
`;
const InfoContainer = styled.div`
  padding: 10px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const CashAppButton = styled.div`
  background-color: #f9d440;
  margin-top: 5px;
  color: black;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;

const PayPalButton = styled.div`
  background-color: #f9d440;
  margin-top: 5px;
  color: black;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;

const PickupInfoContainer = styled.div`
  padding: 10px;
  height: 100px;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-evenly;
`;

function PurchaseItem({item}) {
  console.log(item);
  return (
    <StyledPurchaseItem>
      <OuterContainer>
        <PurchaseBanner> Purchase </PurchaseBanner>
        <InfoContainer>
          <div style={{ display: "flex", gap: "20px" }}>
            <SquareImage src={item.image_url} alt="couch" />
            <InfoDiv>
              <NameText>{item.item_description} - ${item.price}</NameText>
              <SubText>{item.item_description}</SubText>
              <SubText>Seller: Tommy T</SubText>
            </InfoDiv>
          </div>
        </InfoContainer>
        <PickupInfoContainer>
          <PickUpText>Pickup Location </PickUpText>
          <SubText> 0.2 miles from USC</SubText>
          <PickUpText>Pickup Time </PickUpText>
          <SubText> Mar.29, 2023- 7 P.M. </SubText>
        </PickupInfoContainer>
        <PurchaseForm></PurchaseForm>
        <SubText>Buy Now: </SubText>
        <CashAppButton type="submit"> $CashApp </CashAppButton>
        <PayPalButton type="submit"> PayPal </PayPalButton>
      </OuterContainer>
    </StyledPurchaseItem>
  );
}
export default PurchaseItem;
