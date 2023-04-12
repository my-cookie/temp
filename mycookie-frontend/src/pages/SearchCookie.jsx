import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance } from "../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as FaStarRegular } from "@fortawesome/free-regular-svg-icons";

function SearchCookie() {
  const [search, setSearch] = useState([]); // 검색 데이터 저장
  const [searchField, setSearchField] = useState(""); // 검색창 onchange
  const [bookmark, setBookmark] = useState([]); // 북마크 get
  const [bookmarkId, setBookmarkId] = useState([]); // 북마크 target_id

  useEffect(() => {
    if (searchField !== 0) {
      axiosInstance.post(`api/auth/search`, { nickname: searchField }).then((res) => {
        setSearch(res.data);
      });
    }
  }, [searchField]);

  const searchNickname = (e) => {
    e.preventDefault();
    setSearchField(e.target.value);
  };

  useEffect(() => {
    axiosInstance.get(`api/bookmark/item`).then((res) => {
      setBookmark(res.data);
      res.data.map((el) => setBookmarkId([...bookmarkId, el.target.id]));
    });
  }, []);

  const favoriteAddHandler = (e) => {
    console.log(e.target.id);
    axiosInstance
      .post(`api/bookmark/item`, { target: e.target.id })
      .then((res) => {
        setBookmarkId([e.target.id, ...bookmarkId]);
        setBookmark([res.data, ...bookmark]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(bookmark);
  }, [bookmark]);

  const favoriteDeleteHandler = (e) => {
    axiosInstance
      .delete(`api/bookmark/item`, { data: { target: e.target.id } })
      .then((res) => {
        setBookmarkId(
          bookmarkId.filter((el) => {
            return el != e.target.id;
          })
        );
        setBookmark(
          bookmark.filter((el) => {
            return el.target.id != e.target.id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SearchCookieBox>
      <div className="contents_container">
        <div className="search_title">
          <SearchTitle>쿠키 찾기</SearchTitle>
        </div>
        <div className="search_input">
          <SearchInput type="text" placeholder="친구를 찾아봐!" maxlength="7" onChange={searchNickname} value={searchField} />
        </div>
        {!bookmark.length && !searchField.length ? <p>등록된 즐겨찾기가 없어요</p> : ""}
        {searchField.length !== 0 ? (
          <div className="search_box">
            {search.length !== 0
              ? search.map((search) => {
                  console.log(search.id);
                  return (
                    <div key={search.id} className="box_list">
                      {search.nickname}
                      {bookmarkId.includes(`${search.id}`) ? (
                        <button key={search.id} id={search.id} onClick={favoriteDeleteHandler}>
                          <FontAwesomeIcon icon={faStar} style={{ color: "#000000" }} />
                        </button>
                      ) : (
                        <button key={search.id} id={search.id} onClick={favoriteAddHandler}>
                          <FontAwesomeIcon icon={FaStarRegular} style={{ color: "#B12222" }} />
                        </button>
                      )}
                    </div>
                  );
                })
              : "검색결과가 없습니다"}
          </div>
        ) : (
          <div>
            {bookmark.map((bookmark) => {
              return (
                <li key={bookmark.target.id} className="box_list">
                  {bookmark.target.nickname}
                  <StartBtn key={bookmark.target.id} id={bookmark.target.id} onClick={favoriteDeleteHandler}>
                    <FontAwesomeIcon icon={faStar} style={{ color: "#000000" }} />
                  </StartBtn>
                </li>
              );
            })}
          </div>
        )}

        <div className="search_send">
          <SearchSend> </SearchSend>
          <SearchSend>누구 에게 쿠키를 보낼까?</SearchSend>
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
    padding-top: 10px;
  }
  .search_input {
    width: 100%;
    height: 15%;
  }
  .search_send {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box_list {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
  .search_box {
    width: 80%;
    height: 45%;
    background-color: #fff;
    padding: 20px;
    align-items: center;
    margin: 10px auto;
    border-radius: 20px;
    font-size: 1.2rem;
    list-style: none;
  }
  .search_btn {
    width: 100%;
    height: 20%;
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
  box-sizing: border-box;
  padding-left: 10px;
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
const StartBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;
