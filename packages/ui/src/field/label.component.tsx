import type { LabelProps as AriaLabelProps } from "react-aria-components";
import { Label as AriaLabel } from "react-aria-components";
import { cn } from "../utils/cn.ts";
import { fieldLabelSizes } from "../variants/index.ts";
import { useFieldContext } from "./field.context.ts";

/**
 * Props for the Label component.
 */
export interface LabelProps extends AriaLabelProps {}

/**
 * A label component for form fields.
 * Built on top of React Aria Components' Label.
 */
export function Label({ className, ...props }: LabelProps) {
	const { size } = useFieldContext();
	return (
		<AriaLabel
			{...props}
			className={cn(
				"font-medium text-gray-12",
				fieldLabelSizes[size],
				className,
			)}
		/>
	);
}
