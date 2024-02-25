import React from "react";
import { createBrowserRouter} from "react-router-dom";


import ErrorPage from "./pages/ErrorPage";
import LayoutPage from "./pages/LayoutPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MyCoursePage from "./pages/MyCourse.js";
import KnowledgebasesPage from "./pages/KnowledgebasesPage.js"

import CourseGenerator from "./pages/CourseGenerator";
import RegisterPage from "./pages/RegisterPage.js";
import ProfilePage from "./pages/ProfilePage.js";

import CreateCoursePage from "./pages/CreateCoursePage.js";
import ReadCoursePage from "./pages/ReadCoursePage.js";
import EditCoursePage from "./pages/EditCoursePage.js";
import AuditCoursePage from "./pages/AuditCoursePage.js";
import Contact from "./pages/ContactPage.js";
import AddKnowledgebase from "./pages/AddKnowledgebase.js";
import AboutUs from "./pages/AboutUsPage.js";
import VerifyknowledgeBase from "./pages/VerifyknowledgeBase.js";
import CreateClassPage from "./pages/CreateClassPage.js";


 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/knowledgebases",
        element: <KnowledgebasesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path:"/verify-knowledgebase/:courseId",
        element: <VerifyknowledgeBase/>,
        errorElement: <ErrorPage/>
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        errorElement: <ErrorPage />,
        element: <RegisterPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/create-course",
        element: <CreateCoursePage />,
      },
      {
        path: "/read-course/:courseId",
        element: <ReadCoursePage />,
      },
      {
        path: "/course-generator",
        element: <CourseGenerator />,
      },
      {
        path: "/my-courses",
        element: <MyCoursePage />,
      },
      {
        path: "/edit-course/:courseId",
        element: <EditCoursePage />,
      },
      {
        path: "/audit-courses",
        element: <AuditCoursePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/content",
        element: <AddKnowledgebase />,
      },
      {
        path : "/class/create-class",
        element : <CreateClassPage/>
      }
    ],
  },
]);

export default appRouter