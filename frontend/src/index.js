import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./pages/ErrorPage";
import LayoutPage from "./pages/LayoutPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

import store from "./utils/store.js";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CourseGenerator from "./pages/CourseGenerator";
import RegisterPage from "./pages/RegisterPage.js";
import ProfilePage from "./pages/ProfilePage.js";

import CreateCoursePage from "./pages/CreateCoursePage.js";
import ReadCoursePage from "./pages/ReadCoursePage.js";
import EditCoursePage from "./pages/EditCoursePage.js";
import AuditCoursePage from "./pages/AuditCoursePage.js";
import Contact from "./pages/ContactPage.js";
// import Cookies from "js-cookie";

const token = false;
// const token = Cookies.get("token");

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        errorElement: <ErrorPage />,
        element: <RegisterPage/>
      },
      {
        path: "/profile",
        element : <ProfilePage/>
      },
      {
        path: "/create-course",
        element : <CreateCoursePage/>
      },
      {
        path:"/read-course/:courseId",
        element : <ReadCoursePage/>
      },
      {
        path : "/course-generator",
        element : <CourseGenerator />
      },
      {
        path : "/edit-course/:courseId",
        element : <EditCoursePage />
      },
      {
        path : "/audit-courses",
        element : <AuditCoursePage/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/about",
        element : <Contact/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
