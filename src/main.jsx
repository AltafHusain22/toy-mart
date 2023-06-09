import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./MainLayout/MainLayOut.jsx";
import Home from "./pages/Home/Home.jsx";
import AddToys from "./pages/AddToys/AddToys.jsx";
import MyToys from "./pages/MyToys/MyToys.jsx";
import AllToys from "./pages/AllToys/AllToys.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import SingleToyDetails from "./pages/SingleToyDetails/SingleToyDetails";
import AuthRequired from "./context/AuthRequired";
import UpdateToy from "./pages/UpdateToy/UpdateToy";
import Error from "./components/404/Error";
import SingleToy from "./pages/SingleToy/SingleToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addToys",
        element: (
          <AuthRequired>
            <AddToys></AddToys>
          </AuthRequired>
        ),
      },
      {
        path: "/myToys",
        element: (
          <AuthRequired>
            <MyToys></MyToys>
          </AuthRequired>
        ),
        loader: () =>
          fetch(`https://toys-server-altafhusain22.vercel.app/alltoys`),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toys-server-altafhusain22.vercel.app/alltoys"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/singleToyDetails/:id",
        element: (
          <AuthRequired>
            <SingleToyDetails></SingleToyDetails>
          </AuthRequired>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-altafhusain22.vercel.app/singleRacer/${params.id}`
          ),
      },
      {
        path: "/singleToy/:id",
        element: (
          <AuthRequired>
            <SingleToy></SingleToy>
          </AuthRequired>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-altafhusain22.vercel.app/singleToy/${params.id}`
          ),
      },
      {
        path: "/updateToy/:id",
        element: (
          <AuthRequired>
            <UpdateToy></UpdateToy>
          </AuthRequired>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-altafhusain22.vercel.app/singleToy/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
