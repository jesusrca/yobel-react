"use client";

import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingMenu } from "./FloatingMenu";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
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