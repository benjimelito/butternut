import * as React from "react";
import { cn } from "@/lib/utils";
import { button3Variants, type Button3Variants } from "./variants";

/**
 * Button3
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButto
 * 
 * Observed on: https://butternutbox.com/contact
 * Usage count: 1x
 */
export interface Button3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button3Variants {}

export const Button3 = React.forwardRef<HTMLDivElement, Button3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button3.displayName = "Button3";
