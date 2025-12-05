import React from "react";
import { cn } from "../ui/utils";

interface ProcessItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ProcessItem({ icon, title, description, className }: ProcessItemProps) {
  return (
    <div className={cn("flex flex-col lg:flex-row gap-[60px] lg:gap-[200px] items-start py-12 w-full", className)}>
      <div className="shrink-0 lg:w-[40%]">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-[20px] w-full lg:w-[60%]">
        <h3 className="text-[36px] font-augenblick leading-[32px] text-black w-full font-[Neue_Augenblick]">{title}</h3>
        <p className="text-[22px] font-augenblick leading-[24px] text-black w-full font-[Neue_Augenblick]">{description}</p>
      </div>
    </div>
  );
}