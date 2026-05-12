"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

import { Button as BaseButton, type ButtonProps as BaseButtonProps } from "@/components/ui/button";

export interface StatefulButtonProps extends BaseButtonProps {
  loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, StatefulButtonProps>(function Button(
  { children, onClick, loadingText = "Sending...", disabled, type = "button", ...props },
  ref,
) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || isLoading || !onClick) {
      return;
    }

    const result: unknown = onClick(event);

    if (result && typeof (result as Promise<unknown>).then === "function") {
      setIsLoading(true);

      try {
        await result;
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <BaseButton
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </BaseButton>
  );
});

Button.displayName = "Button";