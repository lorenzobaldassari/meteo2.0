import React from "react";
import logo from "./logo.svg";
import MainPage from "./Screen/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import { Stack } from "@mui/material";
import DayPage from "./Screen/DayPage";
import MainLayout from "./layouts/MainLayout";
function App() {
  return (
    <Stack>
      <BrowserRouter>
        <MainLayout>
          <CustomNavbar />
          <MainPage />
          <Routes>
            <Route element={<DayPage />} path="/daypage" />
          </Routes>
          <Footer />
        </MainLayout>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
