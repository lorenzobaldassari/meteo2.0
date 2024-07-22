import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Screen/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";
import DayPage from "./Screen/DayPage";
function App() {
  return (
    <Stack>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<DayPage />} path="/daypage" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Stack>
  );
}

export default App;
