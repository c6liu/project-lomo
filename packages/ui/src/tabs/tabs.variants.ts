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
			"data-[selected]:font-semibold",
		],
		indicator: "absolute transition-all duration-200",
	},
	variants: {
		orientation: {
			horizontal: {
				root: "flex-col",
				list: "flex-row border-b border-gray-4",
				tab: "pt-2 pb-1",
			},
			vertical: {
				root: "flex-row",
				list: "flex-col border-r border-gray-4 items-stretch",
				tab: "px-4 py-3 justify-start items-start",
			},
		},
		variant: {
			classic: {
				indicator: "bg-terracotta-9 data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:inset-x-0 data-[orientation=vertical]:right-0 data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:inset-y-0",
			},
			pill: {
				list: "p-1 gap-1 rounded-[2rem] bg-white",
				tab: "rounded-[1.5rem] p-4 transition-all duration-200 data-[hovered]:bg-gray-3",
			},
		},
		bold: {
			true: {
				list: "border-4 border-gray-12",
			},
		},
		elevated: {
			true: {
				list: "shadow-[0_8px_0_0_rgba(0,0,0,0.1)]",
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
	compoundVariants: [
		// Classic + Colors
		{ variant: "classic", color: "terracotta", class: { tab: "data-[selected]:text-terracotta-9", indicator: "bg-terracotta-9" } },
		{ variant: "classic", color: "sage", class: { tab: "data-[selected]:text-sage-9", indicator: "bg-sage-9" } },
		{ variant: "classic", color: "yellow", class: { tab: "data-[selected]:text-yellow-9", indicator: "bg-yellow-9" } },
		{ variant: "classic", color: "gray", class: { tab: "data-[selected]:text-gray-12", indicator: "bg-gray-12" } },
		{ variant: "classic", color: "red", class: { tab: "data-[selected]:text-red-9", indicator: "bg-red-9" } },
		{ variant: "classic", color: "amber", class: { tab: "data-[selected]:text-amber-9", indicator: "bg-amber-9" } },
		// Pill + Colors
		{ variant: "pill", color: "terracotta", class: { tab: "data-[selected]:bg-terracotta-9 data-[selected]:text-white data-[selected]:data-[hovered]:bg-terracotta-10" } },
		{ variant: "pill", color: "sage", class: { tab: "data-[selected]:bg-sage-9 data-[selected]:text-white data-[selected]:data-[hovered]:bg-sage-10" } },
		{ variant: "pill", color: "yellow", class: { tab: "data-[selected]:bg-yellow-9 data-[selected]:text-[var(--yellow-contrast)] data-[selected]:data-[hovered]:bg-yellow-10" } },
		{ variant: "pill", color: "gray", class: { tab: "data-[selected]:bg-gray-12 data-[selected]:text-white data-[selected]:data-[hovered]:bg-gray-11" } },
		{ variant: "pill", color: "red", class: { tab: "data-[selected]:bg-red-9 data-[selected]:text-white data-[selected]:data-[hovered]:bg-red-10" } },
		{ variant: "pill", color: "amber", class: { tab: "data-[selected]:bg-amber-9 data-[selected]:text-[var(--amber-contrast)] data-[selected]:data-[hovered]:bg-amber-10" } },
	],
	defaultVariants: {
		orientation: "horizontal",
		variant: "classic",
		color: "terracotta",
		bold: false,
		elevated: false,
	},
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
