import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayout/MainLayOut.jsx';
import Home from './pages/Home/Home.jsx';
import AddToys from './pages/AddToys/AddToys.jsx';
import MyToys from './pages/MyToys/MyToys.jsx';
import AllToys from './pages/AllToys/AllToys.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addToys',
        element: <AddToys></AddToys>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
