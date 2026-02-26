import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input3 Variants
 * Extracted from: https://butternutbox.com/blog, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 3x
 */
export const input3Variants = cva(
  // Base styles observed
  "MuiSelect-nativeInput mui-147e5lo",
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

export type Input3Variants = VariantProps<typeof input3Variants>;
