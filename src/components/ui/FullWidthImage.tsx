import React from "react";
import { cn } from "./utils";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface FullWidthImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string; // e.g. "h-[500px]" or "h-[60vh]"
}

export function FullWidthImage({ src, alt, className, height = "h-[500px]" }: FullWidthImageProps) {
  return (
    <div className={cn("w-full relative overflow-hidden", height, className)}>
       <ImageWithFallback 
         src={src} 
         alt={alt} 
         className="absolute inset-0 w-full h-full object-cover"
       />
    </div>
  );
}
