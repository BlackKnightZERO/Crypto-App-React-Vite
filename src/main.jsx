import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './error-page'
import Coin from './pages/Coin'

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import CryptoContext from './context/CryptoContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/coins/:coinId",
    element: <Coin />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoContext>
      <ThemeProvider theme={darkTheme}>
        <div className='app-container'>
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </CryptoContext>
  </React.StrictMode>
)
