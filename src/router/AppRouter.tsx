import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/layout/Header";
import LandingPage from "pages/LandingPage";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";
import Mypage from "pages/Mypage";
import Profile from "components/myPage/Profile";
import Diary from "components/myPage/Diary";
import Dictionarypage from "pages/DictionaryPage";
import Dictionary from "components/dictionary/Dictionary";
import Quiz from "components/dictionary/Quiz";
import Song from "components/dictionary/Song";
import Player from "components/dictionary/Player";
import Video from "components/myPage/Video";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<AuthPage authType="signUp" />} />
        <Route path="/signin" element={<AuthPage authType="signin" />} />
        <Route path="/mypage" element={<Mypage />}>
          <Route index element={<Profile />} />
          <Route path="diary" element={<Diary />} />
          <Route path="recommend" element={<Video />} />
        </Route>
        <Route path="/dictionary" element={<Dictionarypage />}>
          <Route index element={<Dictionary />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="songs" element={<Song />} />
          <Route path="players" element={<Player />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
