import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav1 Variants
 * Extracted from: https://butternutbox.com, https://butternutbox.com/blog, https://butternutbox.com/contact, https://butternutbox.com/terms-of-use/2025, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 5x
 */
export const nav1Variants = cva(
  // Base styles observed
  "MuiPaper-root MuiPaper-elevation MuiPaper-elevation4 MuiAppBar-root MuiAppBar-colorPrimary MuiAppBar-positionStatic mui-1fs4a2",
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

export type Nav1Variants = VariantProps<typeof nav1Variants>;
