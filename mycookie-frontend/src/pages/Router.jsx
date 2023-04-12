import React from "react";
import { Route, Routes } from "react-router-dom";
import FriendSelectCookie from "./FriendSelectCookie";
import KakaoLogin from "./KakaoLogin";
import Login from "./Login";
import Mymessage from "./message/Mymessage";
import ReadMessage from "./message/ReadMessage";
import SendMessage from "./message/SendMessage";
import SearchCookie from "./SearchCookie";
import MyPage from "./user/MyPage";

import Nickname from "./user/Nickname";
import SelectCookie from "./user/SelectCookie";
import PrivateLayout from "./PrivateLayout";

function Router() {
  return (
    <Routes>
      <Route index element={<Login />} />

      <Route path="/nickname" element={<Nickname />} />
      <Route path="/select" element={<SelectCookie />} />
      <Route element={<PrivateLayout />}>
        <Route path="/mymessage" element={<Mymessage />} />
        <Route path="/readmessage" element={<ReadMessage />} />
        <Route path="/sendmessage" element={<SendMessage />} />
        <Route path="/friendselect" element={<FriendSelectCookie />} />

        <Route path="/searchcookie" element={<SearchCookie />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />
      </Route>
    </Routes>
  );
}

export default Router;
