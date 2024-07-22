import { Stack } from "@mui/material";
import React from "react";
import { mainLayoutColor, PRIMARY } from "../constant/color";

export default function MainLayout({ children }: any) {
  return <Stack bgcolor={mainLayoutColor}>{children}</Stack>;
}
