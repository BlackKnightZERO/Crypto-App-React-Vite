import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorPage from './error-page'
import Coin from './pages/Coin'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/coin/:coinId",
    element: <Coin />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
