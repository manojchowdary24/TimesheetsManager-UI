import React, { useEffect, useState } from "react";
import Application from "./Routers/App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Paper } from "@material-ui/core";
import { ToastProvider } from "./context/Toast";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <ToastProvider>
            <Application />
          </ToastProvider>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
