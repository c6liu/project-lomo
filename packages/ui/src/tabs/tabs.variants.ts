import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";
import { focusRings, interactiveBase } from "../variants/index.ts";

export const tabsVariants = tv({
	slots: {
		root: "flex",
		list: "flex items-center",
		tab: [
			interactiveBase,
			"relative flex-1 flex-col gap-1 px-3 py-2 text-text-2",
			"data-[selected]:font-semibold data-[selected]:text-gray-12",
		],
		indicator: "absolute transition-all duration-200",
	},
	variants: {
		orientation: {
			horizontal: {
				root: "flex-col",
				list: "flex-row border-t border-gray-4",
				tab: "pt-2 pb-1",
			},
			vertical: {
				root: "flex-row",
				list: "flex-col border-r border-gray-4",
				tab: "px-4 py-3 justify-start items-start",
			},
		},
		variant: {
			lomo: {
				list: "p-1 gap-1 rounded-[2rem] border-4 border-gray-12 bg-white shadow-[0_8px_0_0_rgba(0,0,0,0.1)]",
				tab: "rounded-[1.5rem] p-4 transition-all duration-200 data-[selected]:bg-gray-12 data-[selected]:text-white data-[hovered]:bg-gray-3 data-[selected]:data-[hovered]:bg-gray-12",
			},
			classic: {
				tab: "data-[selected]:text-terracotta-9",
				indicator: "bg-terracotta-9 data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:right-0 data-[orientation=vertical]:w-0.5",
			},
		},
		color: {
			terracotta: {
				tab: focusRings.terracotta,
			},
			sage: {
				tab: focusRings.sage,
			},
			yellow: {
				tab: focusRings.yellow,
			},
			gray: {
				tab: focusRings.gray,
			},
			red: {
				tab: focusRings.red,
			},
			amber: {
				tab: focusRings.amber,
			},
		},
	},
	defaultVariants: {
		orientation: "horizontal",
		variant: "classic",
		color: "terracotta",
	},
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
