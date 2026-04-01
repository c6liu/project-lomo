import { tv } from "tailwind-variants";
import { fieldGaps } from "../variants/index.ts";

/**
 * Visual styles and variant definitions for the TextField component.
 */
export const textFieldVariants = tv({
	base: "flex w-full",
	variants: {
		orientation: {
			vertical: "flex-col",
			horizontal: "flex-row items-center",
		},
		size: fieldGaps,
	},
	defaultVariants: {
		orientation: "vertical",
		size: 2,
	},
});
