import { tv } from "tailwind-variants";
import { tw } from "../utils/tw.ts";
import { cardBase, cardClassicColors, cardGhostColors, cardSizes, cardSurfaceColors } from "../variants/index.ts";

// Border color styles (step 9: solid color)
const borderColors: Record<string, string> = {
	terracotta: "border-[var(--terracotta-9)]",
	sage: "border-[var(--sage-9)]",
	yellow: "border-[var(--yellow-9)]",
	red: "border-[var(--red-9)]",
	amber: "border-[var(--amber-9)]",
	gray: "border-[var(--gray-9)]",
};

export const cardVariants = tv({
	base: cardBase,
	variants: {
		variant: {
			ghost: "",
			surface: "",
			classic: "",
		},
		size: cardSizes,
		color: {
			terracotta: "",
			sage: "",
			yellow: "",
			gray: "",
			red: "",
			amber: "",
		},
		rounded: {
			none: "rounded-none",
			small: tw("rounded-[calc(var(--radius-1)*1.5)]"),
			medium: tw("rounded-[calc(var(--radius-1)*2)]"),
			large: tw("rounded-[calc(var(--radius-1)*2.5)]"),
			full: tw("rounded-[max(var(--radius-4),9999px)]"),
		},
		border: {
			none: "border-none",
			small: "border",
			medium: "border-2",
			large: "border-4",
		},
		borderColor: {
			terracotta: borderColors.terracotta,
			sage: borderColors.sage,
			yellow: borderColors.yellow,
			gray: borderColors.gray,
			red: borderColors.red,
			amber: borderColors.amber,
		},
	},
	compoundVariants: [
		// Ghost
		{ variant: "ghost", color: "terracotta", class: cardGhostColors.terracotta },
		{ variant: "ghost", color: "sage", class: cardGhostColors.sage },
		{ variant: "ghost", color: "yellow", class: cardGhostColors.yellow },
		{ variant: "ghost", color: "gray", class: cardGhostColors.gray },
		{ variant: "ghost", color: "red", class: cardGhostColors.red },
		{ variant: "ghost", color: "amber", class: cardGhostColors.amber },
		// Surface
		{ variant: "surface", color: "terracotta", class: cardSurfaceColors.terracotta },
		{ variant: "surface", color: "sage", class: cardSurfaceColors.sage },
		{ variant: "surface", color: "yellow", class: cardSurfaceColors.yellow },
		{ variant: "surface", color: "gray", class: cardSurfaceColors.gray },
		{ variant: "surface", color: "red", class: cardSurfaceColors.red },
		{ variant: "surface", color: "amber", class: cardSurfaceColors.amber },
		// Classic
		{ variant: "classic", color: "terracotta", class: cardClassicColors.terracotta },
		{ variant: "classic", color: "sage", class: cardClassicColors.sage },
		{ variant: "classic", color: "yellow", class: cardClassicColors.yellow },
		{ variant: "classic", color: "gray", class: cardClassicColors.gray },
		{ variant: "classic", color: "red", class: cardClassicColors.red },
		{ variant: "classic", color: "amber", class: cardClassicColors.amber },
		// Border + BorderColor combinations
		{ border: "small", borderColor: "terracotta", class: `${borderColors.terracotta}` },
		{ border: "small", borderColor: "sage", class: `${borderColors.sage}` },
		{ border: "small", borderColor: "yellow", class: `${borderColors.yellow}` },
		{ border: "small", borderColor: "gray", class: `${borderColors.gray}` },
		{ border: "small", borderColor: "red", class: `${borderColors.red}` },
		{ border: "small", borderColor: "amber", class: `${borderColors.amber}` },
		{ border: "medium", borderColor: "terracotta", class: `${borderColors.terracotta}` },
		{ border: "medium", borderColor: "sage", class: `${borderColors.sage}` },
		{ border: "medium", borderColor: "yellow", class: `${borderColors.yellow}` },
		{ border: "medium", borderColor: "gray", class: `${borderColors.gray}` },
		{ border: "medium", borderColor: "red", class: `${borderColors.red}` },
		{ border: "medium", borderColor: "amber", class: `${borderColors.amber}` },
		{ border: "large", borderColor: "terracotta", class: `${borderColors.terracotta}` },
		{ border: "large", borderColor: "sage", class: `${borderColors.sage}` },
		{ border: "large", borderColor: "yellow", class: `${borderColors.yellow}` },
		{ border: "large", borderColor: "gray", class: `${borderColors.gray}` },
		{ border: "large", borderColor: "red", class: `${borderColors.red}` },
		{ border: "large", borderColor: "amber", class: `${borderColors.amber}` },
	],
	defaultVariants: {
		variant: "surface",
		size: 1,
		color: "gray",
		rounded: undefined,
		border: "none",
		borderColor: undefined,
	},
});
