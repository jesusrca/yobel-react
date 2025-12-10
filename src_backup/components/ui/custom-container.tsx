import React from "react";
import { cn } from "../ui/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8", className)} 
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
