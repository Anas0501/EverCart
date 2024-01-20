import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// react toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { Provider } from 'react-redux'
import { store } from './store/store';

// MUI
import { ThemeProvider } from "@mui/material";
import theme from "./config/muiTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <App />
    </ThemeProvider>
  </Provider>
);

