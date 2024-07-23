import { createTheme } from "@mui/material";
import { PRIMARY } from "./color";

export const appBarTheme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: PRIMARY,
        },
      },
    },
  },
});
export const mainLayoutTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontWeight: "bold",
          // fontSize: "1.5e",
        },
      },
    },
  },
});
export const dayDataBoxTypoTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontWeight: "bold",
          fontSize: "0.9em",
        },
      },
    },
  },
});
