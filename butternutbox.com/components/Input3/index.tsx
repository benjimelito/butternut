import * as React from "react";
import { cn } from "@/lib/utils";
import { input3Variants, type Input3Variants } from "./variants";

/**
 * Input3
 * 
 * Extracted from source site.
 * Original structure:
 * <input aria-invalid="false" aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput mui-147e5lo" value="2">
 * 
 * Observed on: https://butternutbox.com/blog, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 3x
 */
export interface Input3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input3Variants {}

export const Input3 = React.forwardRef<HTMLDivElement, Input3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input3.displayName = "Input3";
