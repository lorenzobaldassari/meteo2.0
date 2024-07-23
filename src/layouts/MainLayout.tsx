import { Grid, Stack } from "@mui/material";
import React from "react";
import { mainLayoutColor, PRIMARY, SECONDARY } from "../constant/color";

export default function MainLayout({ children }: any) {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12} lg={8}>
        <Stack
          sx={{ minHeight: "100vh" }}
          flexDirection={"column"}
          justifyContent={"space-between"}
          bgcolor={SECONDARY}
        >
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
}
