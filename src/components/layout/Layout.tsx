import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingMenu } from "./FloatingMenu";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-white relative font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        
        :root {
          font-family: 'Space Grotesk', sans-serif;
        }
        body {
          font-family: 'Space Grotesk', sans-serif;
        }
      `}</style>
      
      <Navbar />
      <FloatingMenu />
      
      <main className="flex flex-col w-full">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
