import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingMenu } from "./FloatingMenu";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  return (
    <div className="min-h-screen w-full bg-white relative">
      <Navbar />
      <FloatingMenu />
      
      <main className="flex flex-col w-full">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
