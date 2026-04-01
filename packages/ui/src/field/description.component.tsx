import type { TextProps as AriaTextProps } from "react-aria-components";
import { Text as AriaText } from "react-aria-components";
import { cn } from "../utils/cn.ts";
import { fieldSmallSizes } from "../variants/index.ts";
import { useFieldContext } from "./field.context.ts";

/**
 * Props for the Description component.
 */
export interface DescriptionProps extends Omit<AriaTextProps, "slot"> {}

/**
 * A description component for providing additional context to form fields.
 * Built on top of React Aria Components' Text.
 */
export function Description({ className, ...props }: DescriptionProps) {
	const { size } = useFieldContext();
	return (
		<AriaText
			{...props}
			slot="description"
			className={cn(
				"text-gray-10",
				fieldSmallSizes[size],
				className,
			)}
		/>
	);
}
