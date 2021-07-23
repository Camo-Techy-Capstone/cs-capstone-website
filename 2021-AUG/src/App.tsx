import React from 'react';
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import {ThemeProvider} from "@material-ui/core/styles";
import {AppRouter} from "./AppRouter";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}
