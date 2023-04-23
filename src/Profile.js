import React from "react";
import styled from "styled-components";

const StyledProfile = styled.div`
  margin-top: 30px;
`;

function Profile() {
  const repeatCount = 5;
  const items = Array.from({ length: repeatCount }, (_, index) => index);
  return (
    <StyledProfile>
      <OuterContainer>
        <InfoContainer>
          <div style={{ display: "flex", gap: "20px" }}>
            <CircularImage src={"/profile-photo.webp"} alt="Profile" />
            <InfoDiv>
              <NameText>Tommy Trojan</NameText>
              <SubText>Class of 2023</SubText>
              <SubText>4 items sold</SubText>
            </InfoDiv>
          </div>
          <RatingDiv>
            <RedText>Edit Profile</RedText>
            <SubText>5.0 *</SubText>
          </RatingDiv>
        </InfoContainer>
        <PurchaseDiv>
          <PurchaseHeaderContainer>Purchases</PurchaseHeaderContainer>
          {items.map((item) => (
            <SaleItemDiv>
              <ItemImage src={"/heater.jpeg"} alt="Profile" />
              <ItemDescription>
                <ItemTitle>Space Heater</ItemTitle>
                <SubText>Purchased Mar. 12, 2023</SubText>
              </ItemDescription>
              <MoneyText>$50</MoneyText>
            </SaleItemDiv>
          ))}
        </PurchaseDiv>
        <SalesDiv>
          <SalesHeaderContainer>Sales</SalesHeaderContainer>
          {items.map((item) => (
            <SaleItemDiv>
              <ItemImage src={"/heater.jpeg"} alt="Profile" />
              <ItemDescription>
                <ItemTitle>Space Heater</ItemTitle>
                <SubText>Sold Mar. 12, 2023</SubText>
              </ItemDescription>
              <MoneyText>$50</MoneyText>
            </SaleItemDiv>
          ))}
        </SalesDiv>
      </OuterContainer>
    </StyledProfile>
  );
}
const ProfilePicDiv = styled.div`

`;
const RatingDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const InfoContainer = styled.div`
  padding: 10px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const PurchaseDiv = styled.div`
  width: 100%;
  background-color: white;
  position: relative;
`;
const PurchaseHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: #efd365;
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  font-weight: bold;
  padding-left: 3px;
`;
const SalesDiv = styled.div`
  width: 100%;
`;
const SalesHeaderContainer = styled(PurchaseHeaderContainer)`
  background-color: #bd7678;
`;
const SalesHeader = styled.div``;
const SaleItemDiv = styled.div`
  height: 140px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding-left: 20px;
  background-color: white;
  border-bottom: 1px solid grey;
`;
const NameText = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;
const ItemTitle = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  color: #777777;
`;
const SubText = styled.p`
  color: #939292;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
`;
const MoneyText = styled.p`
  color: #939292;
  font-size: 1.2em;
  font-weight: 500;
  margin: 0;
  position: absolute;
  top: 20px;
  right: 20px;
`;
const RedText = styled.p`
  color: red;
  font-size: 0.3em;
`;
const CircularImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
export default Profile;
