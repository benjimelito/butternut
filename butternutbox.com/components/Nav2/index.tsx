import * as React from "react";
import { cn } from "@/lib/utils";
import { nav2Variants, type Nav2Variants } from "./variants";

/**
 * Nav2
 * 
 * Extracted from source site.
 * Original structure:
 * <nav class="MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root mui-1dceo9q" data-testid="breadcrumbs" aria-label="breadcrumb"><ol class="MuiBreadcrumbs-ol mui-51eq8m"><li class="MuiBreadcrumbs
 * 
 * Observed on: https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 1x
 */
export interface Nav2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav2Variants {}

export const Nav2 = React.forwardRef<HTMLDivElement, Nav2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav2.displayName = "Nav2";
