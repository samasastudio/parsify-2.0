import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
import "typeface-nunito-sans";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'VT323',
    fontSize: 18
  },
  palette: {
    type: "dark",
    text: {
      primary: "#d9a362",
      secondary: "#d9a362",
    },
    action: {
      active: "#d9a362",
    },
    divider: "#d9a362",
    primary: {
      main: "#d9a362",
      light: "#d9a362",
    },
    secondary: {
      main: "#d9a362",
      light: "#d9a362",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
