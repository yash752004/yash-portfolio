import React from "react";

export const GradientSpinner = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center w-16 h-16 ${className}`}>
      {/* Outer rotating gradient ring */}
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 border-r-secondary-500 animate-spin" />

      {/* Inner glowing effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 blur-sm animate-pulse" />

      {/* Center dot */}
      {/* <div className="w-2 h-2 bg-slate-800 rounded-full animate-ping" /> */}
    </div>
  );
};
