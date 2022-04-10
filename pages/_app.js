import { useContext, useState, createContext, useMemo, useEffect } from "react";
import Hero from "../components/Hero";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import Nav from "../components/Nav";
import "../styles/globals.css";
import { Box } from "@mui/material";
import AboutMe from "../components/AboutMe";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

function MyApp({ Component, pageProps }) {
  return (
    <Box>
      <Nav />
      <Hero />
      <AboutMe />
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const modeStorage = localStorage.getItem("mode");
    setMode(modeStorage);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  useEffect(() => {
    document.body.style.background = theme.palette.primary.main;
    localStorage.setItem("mode", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          mode,
          ...(mode === "light"
            ? {
                allVariants: {
                  color: "#424242",
                },
              }
            : {
                allVariants: {
                  color: "#fff",
                },
              }),
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#fff",
                  secondary: "#4615b2",
                },
                secondary: {
                  main: "#000",
                },

                divider: amber[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                background: {
                  default: deepOrange[900],
                  paper: "#fff",
                },
                border: `solid 1px ${grey[300]}`,
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#2E3136",
                  secondary: "#33dfff",
                },
                secondary: {
                  main: "#fff",
                },
                divider: deepOrange[700],
                background: {
                  default: deepOrange[900],
                  paper: "red",
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
                border: `solid 1px ${grey[800]}`,
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
