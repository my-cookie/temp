import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useState } from "react";

function PrivateLayout() {
  const { accessToken, setAccessToken } = useAuth();
  const navigate = useNavigate();
  const [init, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
    if (!accessToken && init) {
      console.log("access token 재발급");
      axios
        .post("api/auth/access", {})
        .then((response) => {
          setAccessToken(response.data.access);
          console.log("재요청");
        })
        .catch((err) => {
          console.log(err);
          return navigate("/");
        });
    }
  }, [accessToken]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateLayout;
