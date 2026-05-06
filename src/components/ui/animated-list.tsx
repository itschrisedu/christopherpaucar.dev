"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedListProps {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, delay = 1000 }: AnimatedListProps) => {
    const [displayedItems, setDisplayedItems] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setDisplayedItems((prev) => {
          if (prev === childrenArray.length) return 0;
          return prev + 1;
        });
      }, delay);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [delay, childrenArray.length]);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {childrenArray.map((item, index) => (
          <div
            key={index}
            className={cn(
              "transition-all duration-500 ease-in-out",
              displayedItems > index
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
