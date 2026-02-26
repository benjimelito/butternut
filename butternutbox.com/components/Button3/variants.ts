import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button3 Variants
 * Extracted from: https://butternutbox.com/contact
 * Usage count: 1x
 */
export const button3Variants = cva(
  // Base styles observed
  "MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorPrimary MuiButton-disableElevation mui-1jauera",
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

export type Button3Variants = VariantProps<typeof button3Variants>;
