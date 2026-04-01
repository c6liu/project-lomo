import type { LinkProps as AriaLinkProps } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { Link as AriaLink, composeRenderProps } from "react-aria-components";
import { linkVariants } from "./link.variants.ts";

/**
 * Props for the Link component.
 */
export type LinkProps = AriaLinkProps & VariantProps<typeof linkVariants>;

/**
 * A link component for navigation or triggering actions.
 * Built on top of React Aria Components' Link.
 */
export function Link({
	color,
	size,
	weight,
	underline,
	highContrast,
	trim,
	truncate,
	wrap,
	className,
	...props
}: LinkProps) {
	return (
		<AriaLink
			{...props}
			className={composeRenderProps(className, cls =>
				linkVariants({ color, size, weight, underline, highContrast, trim, truncate, wrap, class: cls }))}
		/>
	);
}
