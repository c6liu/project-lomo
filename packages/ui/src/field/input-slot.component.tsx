import { cn } from "../utils/cn.ts";
import { fieldSlotSizes } from "../variants/index.ts";
import { useFieldContext } from "./field.context.ts";

/**
 * Props for the InputSlot component.
 */
export interface InputSlotProps extends React.ComponentPropsWithoutRef<"div"> {
	/** The side of the input field where the slot should be placed. */
	side?: "start" | "end";
}

/**
 * A slot component for adding icons or other elements to an input field.
 */
export function InputSlot({
	side = "start",
	className,
	...props
}: InputSlotProps) {
	const { size } = useFieldContext();
	return (
		<div
			{...props}
			data-side={side}
			className={cn(
				"flex shrink-0 items-center text-gray-10",
				fieldSlotSizes[size],
				side === "end" && "order-last",
				className,
			)}
		/>
	);
}
