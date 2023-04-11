import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../api/axios";

function FriendSelectCookie() {
  const [cookie, setCookie] = useState([]);
  const [flavors, setFlavors] = useState();

  async function getCookie() {
    try {
      const res = await axiosInstance.get(`api/flavor/cookies`);
      console.log(res.data);
      setCookie(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCookie();
  }, []);

  const handleClick = (e) => {
    console.log(e.target.id);
    setFlavors(e.target.id);
  };
  return (
    <FriendSelectBox>
      <div className="contents_container">
        <div className="friend_select_title">
          <FriendSelectTitle>친구가 선택한</FriendSelectTitle>
          <FriendSelectTitle>쿠키맛은 뭘까?</FriendSelectTitle>

          <FriendSelectTip>
            tip. 친구의 쿠키맛을 맞혀야 보낼 수 있어!
          </FriendSelectTip>
        </div>

        <div className="select_cookie">
          <div className="select_cookie_back">
            <CookieListBox>
              {cookie &&
                cookie?.map((cookie, index) => {
                  return (
                    <li key={index} className="cookie_list">
                      <img
                        src={cookie.img}
                        alt={cookie.name}
                        className="cookie_img"
                      />
                      <button
                        type="button"
                        id={cookie.id}
                        onClick={handleClick}
                        className="cookie_btn"
                      >
                        {cookie.name}
                      </button>
                    </li>
                  );
                })}
            </CookieListBox>
          </div>
        </div>
        <div className="friendSelect_btn">
          <FriendSelectBtn type="button">선택완료!</FriendSelectBtn>
        </div>
      </div>
    </FriendSelectBox>
  );
}

export default FriendSelectCookie;

const FriendSelectBox = styled.div`
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

  .friend_select_title {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .select_cookie {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
  }

  .select_cookie_back {
    height: 300px;
    border-radius: 40px;
    border: 1px solid #a7a7a7;
    background-color: #f8f8f8;
    padding: 20px;
  }

  .cookie_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cookie_img {
    width: 100px;
  }

  .cookie_btn {
    width: 80px;
    height: 40px;
    border: 3px solid #7fa3ff;
    border-radius: 15px;
    background-color: #ffffff;
    font-family: "BRBA_B";
    font-size: 0.8rem;
    cursor: pointer;
    margin: 5px;
  }

  .friendSelect_btn {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }
`;

const FriendSelectTitle = styled.p`
  font-size: 1.4rem;
  padding-bottom: 10px;
`;
const FriendSelectTip = styled.p`
  font-size: 0.8rem;
`;

const FriendSelectBtn = styled.button`
  width: 150px;
  height: 50px;
  border: 3px solid #7fa3ff;
  border-radius: 20px;
  background-color: #ffffff;
  font-family: "BRBA_B";
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
`;

const CookieListBox = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(2, 150px);
  @media (min-width: 1000px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 90px);
    grid-template-rows: repeat(2, 150px);
    .cookie_img {
      width: 80px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 110px);
    grid-template-rows: repeat(2, 150px);
    .cookie_list {
      width: 100%;
    }
  }
`;
