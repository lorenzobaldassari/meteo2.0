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
