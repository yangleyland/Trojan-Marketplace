import React, { useState } from "react";
import styled from "styled-components";

const StyledMessagingPage = styled.div`
    background-color: white;
    margin-top: 30px;
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

const InfoContainer = styled.div`
  padding: 10px;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;
  background: #fff;

  .timestamp {
    color: #AAAAAA;
    width: 100%;
    text-align: center;
  }

  .message-received {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .message-received span {
    background: #E6E6E6;
    width: fit-content;
    padding: 10px;
    margin: 2px;
    border-radius: 20px;
  }

  .message-sent {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .message-sent span {
    width: fit-content;
    padding: 10px;
    margin: 2px;
    border-radius: 20px;
    background: #FCC901;
    margin-right: 0;
  }
`;

const MessageForm = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  flex-direction: row;
  background: #fff;
  margin-top: -20px;
`;

const MessageInput = styled.input`
  flex: 1;
  margin-right: 10px;
  width: 100%;
  background: #e6e6e6;
  border-radius: 20px !important;
`;

const SendMessageButton = styled.button`
  background-color: #007bff;
  margin-top: 5px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function MessagingPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <StyledMessagingPage>
        <OuterContainer>
        <InfoContainer>
          <div style={{ display: "flex", gap: "20px" }}>
            <SquareImage src={"/v3_87.png"} alt="couch" />
            <InfoDiv>
              <NameText>Couch</NameText>
              <SubText>Used couch, great condition</SubText>
              <SubText>Seller: Tommy T</SubText>
            </InfoDiv>
          </div>
        </InfoContainer>
      <MessagesContainer>
        <div class="timestamp">09:10 AM</div>
        <div className="message-received">
            <span>Hi, Tommy!</span>    
        </div>
        <div className="message-received">
            <span>How are you?</span>    
        </div>
        {messages.map((message, index) => (
          <div className="message-sent" key={index}>
            <span>{message}</span>
          </div>
        ))}
      </MessagesContainer>
      <MessageForm onSubmit={handleMessageSubmit}>
        <MessageInput
          type="text"
          placeholder="Type your message here"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <SendMessageButton type="submit">Send</SendMessageButton>
      </MessageForm>
      </OuterContainer>
    </StyledMessagingPage>
  );
}

export default MessagingPage;
