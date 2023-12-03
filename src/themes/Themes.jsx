/* eslint-disable react/prop-types */
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",
    background: {
      default: "#F5F5F5",
    },
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: "#FF7F50",
    },
    text: {
      primary: "#1F1F1F",
    },
    divider: "#919191",
  },
});

// const darkTheme = createTheme({
//   palette: {
//     type: "dark",
//     background: {
//       default: "#121212",
//     },
//     primary: {
//       main: "#708090",
//     },
//     secondary: {
//       main: "#00A699",
//     },
//     text: {
//       primary: "#D3D3D3",
//     },
//     divider: "#003153",
//   },
// });

function ThemesProvider({ children }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

export default ThemesProvider;
