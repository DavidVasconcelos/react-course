import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      {/* to render the content here */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
