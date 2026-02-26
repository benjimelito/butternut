import * as React from "react";
import { cn } from "@/lib/utils";
import { input1Variants, type Input1Variants } from "./variants";

/**
 * Input1
 * 
 * Extracted from source site.
 * Original structure:
 * <input aria-invalid="false" id="_R_5rd9iklubsnimivb_" placeholder="Search" type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart mui-112kj84" value="">
 * 
 * Observed on: https://butternutbox.com/blog
 * Usage count: 1x
 */
export interface Input1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input1Variants {}

export const Input1 = React.forwardRef<HTMLDivElement, Input1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input1.displayName = "Input1";
