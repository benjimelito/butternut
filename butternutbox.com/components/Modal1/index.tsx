import * as React from "react";
import { cn } from "@/lib/utils";
import { modal1Variants, type Modal1Variants } from "./variants";

/**
 * Modal1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="MuiBox-root mui-yi8m5p" role="dialog" aria-labelledby="cookie-banner-title" aria-describedby="cookie-banner-description">
 * 
 * Observed on: https://butternutbox.com, https://butternutbox.com/blog, https://butternutbox.com/contact, https://butternutbox.com/terms-of-use/2025, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 5x
 */
export interface Modal1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Modal1Variants {}

export const Modal1 = React.forwardRef<HTMLDivElement, Modal1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(modal1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Modal1.displayName = "Modal1";
