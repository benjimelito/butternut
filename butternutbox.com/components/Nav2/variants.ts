import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav2 Variants
 * Extracted from: https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 1x
 */
export const nav2Variants = cva(
  // Base styles observed
  "MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root mui-1dceo9q",
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

export type Nav2Variants = VariantProps<typeof nav2Variants>;
