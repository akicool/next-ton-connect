import { Header } from "@/components/Header";
import { IconDetails } from "@tabler/icons-react";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-950 h-dvh w-full px-5 relative overflow-hidden">
      <Header />
      {children}

      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-10">
        <IconDetails size={400} className="rotate-180" />
      </div>
    </div>
  );
};

export default MainLayout;
