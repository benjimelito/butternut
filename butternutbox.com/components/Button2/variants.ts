import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button2 Variants
 * Extracted from: https://butternutbox.com, https://butternutbox.com/blog, https://butternutbox.com/contact, https://butternutbox.com/terms-of-use/2025, https://butternutbox.com/blog/nutrition/tinned-dog-food
 * Usage count: 5x
 */
export const button2Variants = cva(
  // Base styles observed
  "MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation mui-10le5cd",
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

export type Button2Variants = VariantProps<typeof button2Variants>;
