import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home";
// import { Home } from "../views/Home/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
