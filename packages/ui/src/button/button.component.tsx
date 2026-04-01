import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import type { VariantProps } from "tailwind-variants";
import { Button as AriaButton, composeRenderProps } from "react-aria-components";
import { buttonVariants } from "./button.variants.ts";

type ButtonBaseProps = AriaButtonProps & Omit<VariantProps<typeof buttonVariants>, "icon">;

/**
 * Props for the Button component.
 */
export type ButtonProps = ButtonBaseProps & (
	| { icon?: false }
	| { "icon": true; "aria-label": string }
);

/**
 * A button component that triggers an action or event.
 * Built on top of React Aria Components' Button.
 */
export function Button({ variant, size, color, border, borderColor, icon, className, ...props }: ButtonProps) {
	return (
		<AriaButton
			{...props}
			className={composeRenderProps(className, cls =>
				buttonVariants({ variant, size, color, border, borderColor, icon, class: cls }))}
		/>
	);
}
