import { createTheme } from "@mui/material";


declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}


export const theme = createTheme({
   palette: {
    primary: {
      main: '#8A784E',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});
