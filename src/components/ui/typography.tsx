import React from "react";
import { cn } from "../ui/utils";

interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({ title, subtitle, description, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", 
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
        className
    )}>
      {subtitle && (
        <p className="text-lg text-black font-medium">{subtitle}</p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-normal text-black leading-tight">{title}</h2>
      )}
      {description && (
        <p className="text-xl md:text-2xl leading-relaxed text-black font-light max-w-3xl opacity-80">
          {description}
        </p>
      )}
    </div>
  );
}
