import React from "react";
import { Outlet } from "rasengan";
import Tabbar from "@/components/Tabbar";
import Footer from "@/components/Footer";
import CustomMouse from "@/components/CustomMouse";
const AppLayout = () => {
  return (
    <React.Fragment>
      <CustomMouse />
      <Tabbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
