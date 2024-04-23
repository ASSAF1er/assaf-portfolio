import React from "react";
import { Outlet } from "rasengan";
import Tabbar from "@/components/Tabbar";
import Footer from "@/components/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Tabbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

AppLayout.path = "/";

export default AppLayout;
