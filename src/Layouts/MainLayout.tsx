// Layout.js
import React, { ReactElement } from "react";
import { LayoutProps } from "../types/layout.type";
import Header from "../components/shared/layout/Header/Header";
import Footer from "../components/shared/layout/Footer/Footer";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
