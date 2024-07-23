import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { PRIMARY, SECONDARY } from "../constant/color";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { appBarTheme } from "../constant/theme";
import sun from "../assets/icona-meteo-sunny-pe850e.jpg";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <ThemeProvider theme={appBarTheme}>
      <AppBar position="static">
        <Toolbar>
          <Stack mr={5}>
            <img
              style={{ borderRadius: "50%" }}
              src={sun}
              alt="immagine del sole"
              width={50}
            />
          </Stack>
          <Link
            style={{
              textDecoration: "none",
              color: SECONDARY,
            }}
            to={"/"}
          >
            <Typography
              variant="h5"
              component="div"
              marginLeft={5}
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              METEORA
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
