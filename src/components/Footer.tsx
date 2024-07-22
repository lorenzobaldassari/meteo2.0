import { IconButton, Stack } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { PRIMARY } from "../constant/color";

export default function Footer() {
  return (
    <Stack
      justifyContent={"center"}
      flexDirection={"row"}
      py={3}
      bgcolor={PRIMARY}
    >
      <IconButton aria-label="delete" disabled>
        <InstagramIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton aria-label="delete" disabled>
        <GitHubIcon sx={{ color: "white" }} />
      </IconButton>
      <IconButton aria-label="delete" disabled>
        <LinkedInIcon sx={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
}
