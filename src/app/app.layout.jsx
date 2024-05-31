import React, { useState, useEffect } from "react";
import { Outlet } from "rasengan";
import Tabbar from "@/components/Tabbar";
import Footer from "@/components/Footer";
import CustomMouse from "@/components/CustomMouse";
import Loader from "@/components/Loader";
import { Analytics } from "@vercel/analytics/react";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 secondes de simulation de chargement
  });
  return (
    <React.Fragment>
      <CustomMouse />
      {isLoading && <Loader />}

      <Tabbar />
      <Outlet />
      <Footer />
      <Analytics />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
