import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import createTheme from "@material-ui/core/styles/createTheme";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { responsiveFontSizes } from "@material-ui/core";

let theme = createTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#000",
    },
    primary: {
      main: "#051120",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 16,
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
