import type {
	TabListProps as AriaTabListProps,
	TabPanelProps as AriaTabPanelProps,
	TabProps as AriaTabProps,
	TabsProps as AriaTabsProps,
} from "react-aria-components";
import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import {
	Collection,
	composeRenderProps,
	Tab as AriaTab,
	TabList as AriaTabList,
	TabPanel as AriaTabPanel,
	Tabs as AriaTabs,
} from "react-aria-components";
import { tabsVariants, type TabsVariants } from "./tabs.variants.ts";

const TabsContext = createContext<Pick<TabsVariants, "variant" | "color">>({
	variant: "classic",
	color: "terracotta",
});

function useTabsContext() {
	return useContext(TabsContext);
}

export type TabsProps = AriaTabsProps & TabsVariants;

export function Tabs({
	variant = "classic",
	color = "terracotta",
	orientation = "horizontal",
	className,
	children,
	...props
}: TabsProps) {
	return (
		<TabsContext.Provider value={{ variant, color }}>
			<AriaTabs
				{...props}
				orientation={orientation}
				className={composeRenderProps(className, (cls, state) =>
					tabsVariants({
						variant,
						color,
						orientation: state.orientation,
						class: cls,
					}).root())}
			>
				{children}
			</AriaTabs>
		</TabsContext.Provider>
	);
}

export type TabListProps<T extends object> = AriaTabListProps<T> & Pick<TabsVariants, "variant" | "color">;

export function TabList<T extends object>({
	variant: variantProp,
	color: colorProp,
	className,
	children,
	...props
}: TabListProps<T>) {
	const context = useTabsContext();
	const variant = variantProp ?? context.variant;
	const color = colorProp ?? context.color;

	return (
		<AriaTabList
			{...props}
			className={composeRenderProps(className, (cls, state) =>
				tabsVariants({
					variant,
					color,
					orientation: state.orientation,
					class: cls,
				}).list())}
		>
			{composeRenderProps(children, (children, _state) => (
				<>
					{children}
					<Collection />
				</>
			))}
		</AriaTabList>
	);
}

export type TabProps = AriaTabProps & Pick<TabsVariants, "variant" | "color"> & {
	icon?: ReactNode;
	label?: ReactNode;
};

export function Tab({
	variant: variantProp,
	color: colorProp,
	icon,
	label,
	className,
	children,
	...props
}: TabProps) {
	const context = useTabsContext();
	const variant = variantProp ?? context.variant;
	const color = colorProp ?? context.color;

	return (
		<AriaTab
			{...props}
			className={composeRenderProps(className, (cls, state) =>
				tabsVariants({
					variant,
					color,
					orientation: state.orientation,
					class: cls,
				}).tab())}
		>
			{composeRenderProps(children, (children, state) => (
				<>
					{icon && <span className="flex items-center justify-center">{icon}</span>}
					{label && <span className="text-xs">{label}</span>}
					{children}
					{variant === "classic" && state.isSelected && (
						<div
							className={tabsVariants({
								variant,
								color,
								orientation: state.orientation,
							}).indicator()}
						/>
					)}
				</>
			))}
		</AriaTab>
	);
}

export type TabPanelProps = AriaTabPanelProps;

export function TabPanel(props: TabPanelProps) {
	return <AriaTabPanel {...props} />;
}
