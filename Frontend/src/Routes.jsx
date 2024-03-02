import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import AboutUs from "pages/AboutUs";
import ListingMapView from "pages/ListingMapView";
import CartPage from "pages/Cart/CartPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    // { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },

    {
      path: "/listingmapview",
      element: <ListingMapView />,
    },
   
    {
      path: "/cart",
      element: <CartPage />,
    }
  ]);

  return element;
};

export default ProjectRoutes;
