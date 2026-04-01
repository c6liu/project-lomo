import { Cog6ToothIcon, HomeIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Tab, TabList, TabPanel, Tabs } from "@repo/ui";
import { createFileRoute } from "@tanstack/react-router";

import { DemoSection, PageHeader, Playground, PropTable } from "./-components";
import { Anatomy, DocSection, FeatureList } from "./-doc-components";

const COLORS = ["terracotta", "sage", "yellow", "gray", "red", "amber"] as const;
const VARIANTS = ["lomo", "classic"] as const;
const ORIENTATIONS = ["horizontal", "vertical"] as const;

const PROPS = [
	{ name: "variant", type: "\"lomo\" | \"classic\"", default: "\"classic\"" },
	{ name: "orientation", type: "\"horizontal\" | \"vertical\"", default: "\"horizontal\"" },
	{ name: "color", type: "\"terracotta\" | \"sage\" | \"yellow\" | \"gray\" | \"red\" | \"amber\"", default: "\"terracotta\"" },
];

function TabsPage() {
	return (
		<div className="flex flex-col gap-10">
			<PageHeader
				title="Tabs"
				description="Organizes content into separate views where only one view is visible at a time."
			/>

			<Playground
				componentName="Tabs"
				defaults={{ variant: "lomo", orientation: "horizontal", color: "terracotta" }}
				controls={[
					{ name: "variant", type: "segment", options: VARIANTS },
					{ name: "orientation", type: "segment", options: ORIENTATIONS },
					{ name: "color", type: "segment", options: COLORS },
				]}
			>
				{(props) => (
					<Tabs {...props} className="w-full max-w-md">
						<TabList>
							<Tab id="home" icon={<HomeIcon className="size-6" />} label="Home" />
							<Tab id="add" icon={<PlusIcon className="size-6" />} label="Add" />
							<Tab id="settings" icon={<Cog6ToothIcon className="size-6" />} label="Settings" />
						</TabList>
						<TabPanel id="home" className="mt-4 p-4 border rounded-lg bg-white/50">Home Content</TabPanel>
						<TabPanel id="add" className="mt-4 p-4 border rounded-lg bg-white/50">Add Content</TabPanel>
						<TabPanel id="settings" className="mt-4 p-4 border rounded-lg bg-white/50">Settings Content</TabPanel>
					</Tabs>
				)}
			</Playground>

			<Anatomy
				parts={[
					{ label: "Tabs", description: "The root container for the tab system. Uses Context to share variant and color with children." },
					{ label: "TabList", description: "The container for individual tabs." },
					{ label: "Tab", description: "An individual tab item. Supports optional icon and label props." },
					{ label: "TabPanel", description: "The content container associated with a tab." },
				]}
			>
				<Tabs>
					<TabList>
						<Tab id="1">Tab 1</Tab>
						<Tab id="2">Tab 2</Tab>
					</TabList>
					<TabPanel id="1">Panel 1</TabPanel>
					<TabPanel id="2">Panel 2</TabPanel>
				</Tabs>
			</Anatomy>

			<FeatureList
				features={[
					"Supports both horizontal and vertical orientations.",
					"Customizable 'lomo' variant with a unique pill-shaped design.",
					"Built-in support for icons and labels in tabs.",
					"Context-based prop sharing (variant and color) for a cleaner API.",
					"Accessible keyboard navigation and ARIA support via React Aria.",
				]}
			/>

			<DocSection title="Examples">
				<div className="flex flex-col gap-8">
					<DemoSection title="Lomo Horizontal (Mobile Tab Bar)" description="The signature Lomo design for main navigation.">
						<div className="bg-sage-2 p-8 rounded-xl flex justify-center">
							<Tabs variant="lomo">
								<TabList>
									<Tab id="leaf" icon={<HomeIcon className="size-6" />} />
									<Tab id="plus" icon={<PlusIcon className="size-6" />} />
									<Tab id="gear" icon={<Cog6ToothIcon className="size-6" />} />
								</TabList>
							</Tabs>
						</div>
					</DemoSection>

					<DemoSection title="Lomo Vertical (Sidebar)" description="Adapts the Lomo design for vertical sidebar navigation.">
						<div className="bg-sage-2 p-8 rounded-xl flex justify-center min-h-[300px]">
							<Tabs variant="lomo" orientation="vertical">
								<TabList>
									<Tab id="leaf" icon={<HomeIcon className="size-6" />} label="Home" />
									<Tab id="plus" icon={<PlusIcon className="size-6" />} label="Request" />
									<Tab id="gear" icon={<Cog6ToothIcon className="size-6" />} label="Settings" />
								</TabList>
							</Tabs>
						</div>
					</DemoSection>

					<DemoSection title="Classic" description="A more traditional tab design with a selection indicator.">
						<Tabs variant="classic">
							<TabList>
								<Tab id="1">Account</Tab>
								<Tab id="2">Security</Tab>
								<Tab id="3">Notifications</Tab>
							</TabList>
							<TabPanel id="1" className="p-4">Account settings</TabPanel>
							<TabPanel id="2" className="p-4">Security settings</TabPanel>
							<TabPanel id="3" className="p-4">Notification settings</TabPanel>
						</Tabs>
					</DemoSection>
				</div>
			</DocSection>

			<DocSection title="API Reference">
				<PropTable data={PROPS} />
			</DocSection>
		</div>
	);
}

export const Route = createFileRoute("/showcase/tabs")({
	component: TabsPage,
});
