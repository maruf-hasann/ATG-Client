import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  children: [{
    path: '/',
    element:<Home></Home>
  }]
}])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
     
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
