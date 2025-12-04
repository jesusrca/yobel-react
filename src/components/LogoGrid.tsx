import React from "react";
import { cn } from "./ui/utils";

interface LogoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function LogoGrid({ children, className }: LogoGridProps) {
  return (
    <div className={cn("grid grid-cols-3 md:grid-cols-5 items-center gap-x-6 gap-y-8 md:gap-8", className)}>
      {React.Children.map(children, (child) => (
        <div className="flex items-center justify-center w-full">
          {child}
        </div>
      ))}
    </div>
  );
}