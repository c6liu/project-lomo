import type { ComponentPropsWithRef } from "react";
import type { VariantProps } from "tailwind-variants";
import { badgeVariants } from "./badge.variants.ts";

export type BadgeProps = ComponentPropsWithRef<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ variant, size, color, rounded, border, borderColor, highContrast, className, ...props }: BadgeProps) {
	return (
		<span
			{...props}
			className={badgeVariants({ variant, size, color, rounded, border, borderColor, highContrast, class: className })}
		/>
	);
}
