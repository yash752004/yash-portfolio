import React from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) => {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-full p-[1px] transition duration-300",
        className
      )}
      {...otherProps}
    >
      <div className="absolute inset-0 rounded-full">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-primary opacity-100"
          style={{
            animation: `spin ${duration}ms linear infinite`,
          }}
        />
      </div>
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background px-8 py-4 text-sm antialiased">
        {children}
      </div>
    </button>
  );
};