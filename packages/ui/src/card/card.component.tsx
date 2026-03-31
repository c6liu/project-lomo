import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { cardVariants } from "./card.variants.ts";

export type CardProps = ComponentPropsWithRef<"div"> & VariantProps<typeof cardVariants>;

export function Card({ variant, size, color, rounded, border, borderColor, className, ...props }: CardProps) {
	return (
		<div
			{...props}
			className={cardVariants({ variant, size, color, rounded, border, borderColor, class: className })}
		/>
	);
}
