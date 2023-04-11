import React from "react";
import styled from "styled-components";

function ReadMessage() {
  return (
    <ReadMessageContainer>
      <div className="contents_container">
        <div className="read_cookie">
          <SelectCookieImg src="https://d4pwibjctaa5b.cloudfront.net/블루팡이맛.png" />
        </div>
        <div className="read_letter">
          <div className="message_background">
            <ToBox>
              <ToRead>____ 에게</ToRead>
            </ToBox>
            <TextBox>
              <ReadMessageText>안녕 나야~~~</ReadMessageText>
            </TextBox>
            <FromBox>
              <FromRead>____ 보냄</FromRead>
            </FromBox>
          </div>
        </div>
        <div className="read_btn">
          <CheckBtn>확인</CheckBtn>
          <DeleteBtn>삭제</DeleteBtn>
          <CrimeBtn>신고</CrimeBtn>
        </div>
      </div>
    </ReadMessageContainer>
  );
}

export default ReadMessage;

const ReadMessageContainer = styled.div`
  height: 100%;

  .contents_container {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 100%;
    font-family: "BRBA_B";
    margin: 0 auto;
    padding: 0 40px;
  }

  .read_cookie {
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
  }

  .read_letter {
    width: 100%;
    height: 60%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }
  .message_background {
    width: 100%;
    height: 350px;
    padding: 20px;
    border-radius: 40px;
    border: 1px solid #a7a7a7;
    background-color: #f8f8f8;
  }
  .read_btn {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const SelectCookieImg = styled.img`
  width: 60px;
`;

const ToBox = styled.div`
  width: 100%;
  height: 40px;
`;
const TextBox = styled.div`
  width: 100%;
  height: 290px;
`;
const FromBox = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: flex-end;
`;

const ToRead = styled.p``;
const ReadMessageText = styled.p``;
const FromRead = styled.p``;

const CheckBtn = styled.button`
  width: 70px;
  height: 40px;
  border: 3px solid #7fa3ff;
  border-radius: 15px;
  background-color: #ffffff;
  font-family: "BRBA_B";
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;
const DeleteBtn = styled.button`
  width: 70px;
  height: 40px;
  border: 3px solid #7fa3ff;
  border-radius: 15px;
  background-color: #ffffff;
  font-family: "BRBA_B";
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;

const CrimeBtn = styled.button`
  width: 70px;
  height: 40px;
  border: 3px solid #7fa3ff;
  border-radius: 15px;
  background-color: #ffffff;
  font-family: "BRBA_B";
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;
