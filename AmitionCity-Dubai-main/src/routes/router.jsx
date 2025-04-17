import { createBrowserRouter, Navigate } from "react-router-dom"; // Import Navigate here
import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import AboutUs from "../components/Aboutus/Aboutus";
import Gallery from "../components/Gallery/Gallery";
import { Uae } from "../components/UAEPage/Uae";
import BusinessTrade from "../components/BusinessTrade/Businesstrade";
import Freezone from "../components/Freezone/Freezone";
import Login from "../pages/Login";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import NotFound from "../components/NotFound/NotFound";
import AdminFeaturedPlace from "../pages/AdminFeaturedPlace";
import FeaturedPlaceAdd from "../pages/FeaturedPlaceAdd";
import LogoUpload from "../pages/LogoUpload";
import BannerUpload from "../pages/BannerUpload";
import SocailMediaPage from "../pages/SocailMediaPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      // {
      //   path: "/register",
      //   element: <RegistrationPage />, // Correctly reference the registration page
      // },
      {
        path: "/uae",
        element: <Uae />,
      },
      {
        path: "/business",
        element: <BusinessTrade />,
      },
      {
        path: "/freezone",
        element: <Freezone />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/admin/dashboard`} replace />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/places",
        element: <AdminFeaturedPlace />,
      },
      {
        path: "/admin/place/add",
        element: <FeaturedPlaceAdd />,
      },
      {
        path: "/admin/upload/logo",
        element: <LogoUpload />,
      },
      {
        path: "/admin/upload/banner",
        element: <BannerUpload />,
      },
      {
        path: "/admin/add/socail-media",
        element: <SocailMediaPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
