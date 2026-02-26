import { cva, type VariantProps } from "class-variance-authority";

/**
 * Form1 Variants
 * Extracted from: https://butternutbox.com/blog
 * Usage count: 1x
 */
export const form1Variants = cva(
  // Base styles observed
  "MuiBox-root mui-fs6uex",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Form1Variants = VariantProps<typeof form1Variants>;
