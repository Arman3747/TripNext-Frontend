import React, { type ReactNode } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex-1">{children}</div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CommonLayout;
