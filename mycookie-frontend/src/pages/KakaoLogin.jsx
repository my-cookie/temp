import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

function KakaoLogin() {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get("code");
  const { setAccessToken } = useAuth();

  const kakaoLoginCode = async () => {
    try {
      await axios.post(`api/auth/login`, { code }).then((result) => {
        const { status, data } = result;
        console.log(status);
        if (status === 200) {
          setAccessToken(data.tokens.access);
          navigate("/mymessage");
        } else if (status === 201 || status === 206) {
          navigate("/nickname");
        } else {
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    kakaoLoginCode();
  }, []);

  return <div>KakaoLogin</div>;
}

export default KakaoLogin;
