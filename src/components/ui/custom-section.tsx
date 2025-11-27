import React from "react";
import { cn } from "../ui/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section 
        ref={ref}
        className={cn("w-full font-sans py-20 px-4 md:px-12", className)} 
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
