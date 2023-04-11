import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { axiosInstance } from "../../api/axios";

function SelectCookie() {
  const navigate = useNavigate();
  const [cookie, setCookie] = useState([]); // 서버에서 불러오는 쿠키
  const [flavor, setFlavors] = useState(""); // 유저가 선택한 쿠키
  const user_uuid = "b22a8b3a-0f76-4859-a7d5-7238a36c0cf9";

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
    // flavors.push(e.target.id);
    if (flavor.length === 0) {
      setFlavors(flavor + e.target.id);
    } else {
      setFlavors(flavor + `,${e.target.id}`);
    }

    // sessionStorage.setItem("cookie", JSON.stringify(flavors));
  };

  // setFlavors(flavors.split().join(","));

  const selectBtn = () => {
    const nicknameData = sessionStorage.getItem("nickname");
    const nickname = JSON.parse(nicknameData);
    // const flavorsCookie = sessionStorage.getItem("cookie");
    // const flavors = JSON.parse(flavorsCookie);
    axiosInstance
      .post(`api/auth/info`, { nickname, flavor, user_uuid })
      .then((res) => {
        console.log(res.data);
        navigate("/mymessage");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SelectCookieBox>
      <div className="contents_container">
        <div className="select_title">
          <SelectTitle>너는 어떤 맛 쿠키야?</SelectTitle>
          <SelectTip>tip. 모든 맛을 전부 다 선택해도 괜찮아!</SelectTip>
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
                      <input
                        type="button"
                        id={cookie.id}
                        value={cookie.name}
                        onClick={handleClick}
                        className="cookie_btn"
                      />
                    </li>
                  );
                })}
            </CookieListBox>
          </div>
        </div>
        <div className="select_btn">
          <SelectBtn type="button" onClick={selectBtn}>
            선택완료!
          </SelectBtn>
        </div>
      </div>
    </SelectCookieBox>
  );
}

export default SelectCookie;

const SelectCookieBox = styled.div`
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

  .select_title {
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
    width: 100%;
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

  .select_btn {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }
`;

const SelectTitle = styled.p`
  font-size: 1.4rem;
`;
const SelectTip = styled.p`
  font-size: 0.6rem;
  padding-top: 10px;
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

const SelectBtn = styled.button`
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
