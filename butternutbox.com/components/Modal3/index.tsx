import * as React from "react";
import { cn } from "@/lib/utils";
import { modal3Variants, type Modal3Variants } from "./variants";

/**
 * Modal3
 * 
 * Extracted from source site.
 * Original structure:
 * <div aria-hidden="true" class="MuiBackdrop-root MuiModal-backdrop mui-14dl35y" style="opacity: 0; visibility: hidden;">
 * 
 * Observed on: https://butternutbox.com, https://butternutbox.com/blog, https://butternutbox.com/contact, https://butternutbox.com/terms-of-use/2025, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 5x
 */
export interface Modal3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal3Variants {}

export const Modal3 = React.forwardRef<HTMLDivElement, Modal3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal3.displayName = "Modal3";
