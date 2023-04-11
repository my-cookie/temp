import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../api/axios";

function SearchCookie() {
  const [search, setSearch] = useState("");
  const [searchField, setSearchField] = useState(""); // 유저가 입력한 닉네임

  useEffect(() => {
    if (searchField !== 0) {
      axiosInstance
        .post(`api/auth/search`, { nickname: searchField })
        .then((response) => {
          console.log(response.data);
          setSearch(response.data);
        });
    }
  }, [searchField]);

  const searchNickname = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  return (
    <SearchCookieBox>
      <div className="contents_container">
        <div className="search_title">
          <SearchTitle>쿠키 찾기</SearchTitle>
        </div>
        <div className="search_input">
          <SearchInput
            type="text"
            placeholder="친구를 찾아봐!"
            maxlength="7"
            onChange={searchNickname}
          />
          {/* <select>
            {search?.map((search) => {
              return <option key={search.id}>{search.nickname}</option>;
            })}
          </select> */}
        </div>
        <div className="search_send">
          <SearchSend>누구 에게</SearchSend>
          <SearchSend>쿠키를 보낼까?</SearchSend>
        </div>
        <div className="search_btn">
          <SearchBtn type="submit">좋아!</SearchBtn>
        </div>
      </div>
    </SearchCookieBox>
  );
}

export default SearchCookie;

const SearchCookieBox = styled.div`
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
  .search_title {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
  }

  .search_input {
    width: 100%;
    height: 25%;
  }

  .search_send {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .search_btn {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }
`;

const SearchTitle = styled.div`
  font-size: 1.4rem;
  padding-top: 20px;
`;
const SearchInput = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  outline: none;
  font-size: 1.2rem;
  font-family: "BRBA_B";
`;

const SearchSend = styled.p`
  font-family: "BRBA_B";
  font-size: 1.5rem;
  padding-bottom: 10px;
`;

const SearchBtn = styled.button`
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
