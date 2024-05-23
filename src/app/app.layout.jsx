import React, { useState, useEffect } from "react";
import { Outlet } from "rasengan";
import Tabbar from "@/components/Tabbar";
import Footer from "@/components/Footer";
import CustomMouse from "@/components/CustomMouse";
import Loader from "@/components/Loader";
const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
    }, 3000); // 3 secondes de simulation de chargement

    window.addEventListener("load", () => {
      //   setIsLoading(false);
    });
  });
  return (
    <React.Fragment>
      <CustomMouse />
      {/*<Loader />*/}

      <Tabbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
