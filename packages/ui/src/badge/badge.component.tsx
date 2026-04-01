import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { badgeVariants } from "./badge.variants.ts";

/**
 * Props for the Badge component.
 */
export type BadgeProps = ComponentPropsWithRef<"span"> & VariantProps<typeof badgeVariants>;

/**
 * A decorative badge for displaying status, labels, or categories.
 */
export function Badge({ variant, size, color, border, borderColor, highContrast, className, ...props }: BadgeProps) {
	return (
		<span
			{...props}
			className={badgeVariants({ variant, size, color, border, borderColor, highContrast, class: className })}
		/>
	);
}
