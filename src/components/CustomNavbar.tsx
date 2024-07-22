import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { PRIMARY } from "../constant/color";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { appBarTheme } from "../constant/theme";
import sun from "../assets/icona-meteo-sunny-pe850e.jpg";
import { Link } from "react-router-dom";

export default function CustomNavbar() {
  return (
    <ThemeProvider theme={appBarTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack>
              <img
                style={{ borderRadius: "50%" }}
                src={sun}
                alt="immagine del sole"
                width={50}
              />
            </Stack>
            <Link to={"/"}>
              <Typography
                variant="h6"
                component="div"
                marginLeft={4}
                sx={{ flexGrow: 1 }}
              >
                METEOR
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
