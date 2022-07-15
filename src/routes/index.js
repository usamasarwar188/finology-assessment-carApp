import React from "react";
import { BrowserRouter, Switch, Redirect, Route, Routes, Navigate } from "react-router-dom";
import { BASE_PATH, CAR_TYPES_PATH } from "../constants/appPaths";
import { CAR_APP_ROUTES } from "./CarAppRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to={CAR_TYPES_PATH} />} />
        {CAR_APP_ROUTES.map((route) => (
          <Route key={route.name} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
  {
  }
}

export default AppRoutes;
