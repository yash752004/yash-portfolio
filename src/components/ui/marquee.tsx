import { cn } from "@/lib/utils";

export const Marquee = ({ children, containerClassName = "", conveyorClassName = "" }: { children: React.ReactNode; containerClassName?: string; conveyorClassName?: string }) => {
  return (
    <div className={cn('w-full overflow-hidden whitespace-nowrap', containerClassName)}>
      <div className={cn('marquee-left', conveyorClassName)}>
        {children}
        {children}
      </div>
    </div>
  );
};
