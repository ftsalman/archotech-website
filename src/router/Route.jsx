import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ContactPage } from "../pages/ContactPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { BlogsPage } from "../pages/BlogsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "abouts",
        element: <AboutPage />,
      },
      {
        path:"services",
        element:<ServicesPage/>
      },
       {
        path:"contact",
        element:<ContactPage/>
      },
        {
        path:"projects",
        element:<ProjectsPage/>
      },
       {
        path:"blog",
        element:<BlogsPage/>
      },
    ],
  },
]);
