import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const ColorModeContext = createContext({
  mode: "dark",
  toggleColorMode: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: dark ? "dark" : "light",
        primary: {
          main: "#3f51b5",
        },
        secondary: {
          main: "#f50057",
        },
      },
    });
  }, [dark]);

  return (
    <ColorModeContext.Provider
      value={{ mode: dark ? "dark" : "light", toggleColorMode: toggleTheme }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

//   theme = responsiveFontSizes(theme);

export const useToggleColorMode = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  return [mode, toggleColorMode];
};

export default ThemeProvider;
