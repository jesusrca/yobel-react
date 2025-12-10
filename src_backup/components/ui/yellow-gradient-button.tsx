import React from "react";

interface YellowGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const YellowGradientButton = React.forwardRef<HTMLButtonElement, YellowGradientButtonProps>(
  ({ children, onClick, className = "", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        className={`px-4 py-4 rounded-[30px] border-[1.5px] border-black border-solid bg-transparent text-black relative overflow-hidden transition-all duration-500 text-2xl leading-6 font-medium font-['Neue_Augenblick'] before:absolute before:inset-0 before:bg-[linear-gradient(150deg,#FFF700_0%,#FFF700_32%,#FFE300_70%,#5dd3c0_100%)] before:opacity-0 before:transition-opacity before:duration-500 before:rounded-[30px] hover:before:opacity-100 hover:border-0 ${className}`}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

YellowGradientButton.displayName = "YellowGradientButton";