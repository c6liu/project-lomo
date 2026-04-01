import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { cardVariants } from "./card.variants.ts";

/**
 * Props for the Card component.
 */
export type CardProps = ComponentPropsWithRef<"div"> & VariantProps<typeof cardVariants>;

/**
 * A container component for grouping related content and actions.
 */
export function Card({ variant, size, color, border, borderColor, className, ...props }: CardProps) {
	return (
		<div
			{...props}
			className={cardVariants({ variant, size, color, border, borderColor, class: className })}
		/>
	);
}
