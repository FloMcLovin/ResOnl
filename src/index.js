import React from "react";
import { render } from "react-dom";
import App from "./Components/App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { amber, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1a237e",
      light: indigo.A400
    },
    secondary: {
      main: amber.A400,
      light: amber[50],
      dark: amber[900]
    },
    background: {
      default: "#1a237e",
      paper: indigo[700]
    },
    type: "dark"
  }
});

console.log(theme);

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
