import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input1 Variants
 * Extracted from: https://butternutbox.com/blog
 * Usage count: 1x
 */
export const input1Variants = cva(
  // Base styles observed
  "MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart mui-112kj84",
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

export type Input1Variants = VariantProps<typeof input1Variants>;
