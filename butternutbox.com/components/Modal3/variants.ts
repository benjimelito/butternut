import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal3 Variants
 * Extracted from: https://butternutbox.com, https://butternutbox.com/blog, https://butternutbox.com/contact, https://butternutbox.com/terms-of-use/2025, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 5x
 */
export const modal3Variants = cva(
  // Base styles observed
  "MuiBackdrop-root MuiModal-backdrop mui-14dl35y",
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

export type Modal3Variants = VariantProps<typeof modal3Variants>;
