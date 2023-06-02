import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Layout from './components/Layout/Layout';
import Login from "./components/Login/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import axiosClient from './components/axiosClient/axiosClient'

//  check jwt token
 const token = localStorage.getItem("token");
 if (token) {
     axiosClient(token);
 }
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element:
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
  },
  {
    path: "/login",
    element: token ? <Navigate to={'/'}/>:  <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
)
