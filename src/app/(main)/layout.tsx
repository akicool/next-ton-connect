import { Header } from "@/components/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-950 h-dvh w-full px-5">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
