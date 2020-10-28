import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  unstable_createMuiStrictModeTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";

const theme = unstable_createMuiStrictModeTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#D94A4A',
      secondary: '#D94A4A'
    },
    action: {
      active: '#D94A4A',
    },
    divider: '#D94A4A',
    primary: {
      main: '#D94A4A'
    },
    secondary: {
      main: '#D94A4A'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
