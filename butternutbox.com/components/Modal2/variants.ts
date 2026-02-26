import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal2 Variants
 * Extracted from: https://butternutbox.com, https://butternutbox.com/blog, https://butternutbox.com/contact, https://butternutbox.com/terms-of-use/2025, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 5x
 */
export const modal2Variants = cva(
  // Base styles observed
  "MuiDrawer-root MuiDrawer-anchorLeft MuiDrawer-modal MuiModal-root MuiModal-hidden mui-jxus78",
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

export type Modal2Variants = VariantProps<typeof modal2Variants>;
