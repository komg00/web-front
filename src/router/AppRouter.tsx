import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/layout/Header";
import LandingPage from "pages/LandingPage";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import Mypage from "pages/Mypage";
import Profile from "components/myPage/Profile";
import Diary from "components/myPage/Diary";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<AuthPage authType="signUp" />} />
        <Route path="/signin" element={<AuthPage authType="signin" />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route index element={<Profile />} />
          <Route path="diary" element={<Diary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
