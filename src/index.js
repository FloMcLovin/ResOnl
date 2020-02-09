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
      light: amber.A400,
      dark: amber.A400
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
