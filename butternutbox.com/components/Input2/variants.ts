import { cva, type VariantProps } from "class-variance-authority";

/**
 * Input2 Variants
 * Extracted from: https://butternutbox.com/blog, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 2x
 */
export const input2Variants = cva(
  // Base styles observed
  "MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused mui-lz5cox",
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

export type Input2Variants = VariantProps<typeof input2Variants>;
