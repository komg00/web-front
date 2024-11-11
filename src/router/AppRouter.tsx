import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "components/Header";
import LandingPage from "pages/LandingPage";
import AuthPage from "pages/AuthPage";
import HomePage from "pages/HomePage";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<AuthPage authType="signUp" />} />
        <Route path="/signin" element={<AuthPage authType="signin" />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
