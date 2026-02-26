import * as React from "react";
import { cn } from "@/lib/utils";
import { form1Variants, type Form1Variants } from "./variants";

/**
 * Form1
 * 
 * Extracted from source site.
 * Original structure:
 * <form class="MuiBox-root mui-fs6uex"><div class="MuiBox-root mui-1h9gn4j"><div class="MuiFormControl-root MuiTextField-root mui-1lug4fu"><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBas
 * 
 * Observed on: https://butternutbox.com/blog
 * Usage count: 1x
 */
export interface Form1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Form1Variants {}

export const Form1 = React.forwardRef<HTMLDivElement, Form1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(form1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Form1.displayName = "Form1";
